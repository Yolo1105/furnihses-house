import {
  families,
  jobs,
  placeOf,
  verbNames,
  verbsOf,
  type FamilyId,
  type Job,
} from "./data";
import { homes, type HomeId } from "./town";

/* The visitor says it in their own words; this finds which of the problems we
   have an answer to is closest. It runs in the page, with no model behind it:
   the site has to be whole without one. It knows the words people use for the
   things our pieces deal with, in English and in Chinese, and it prefers an
   answer in the home the visitor chose over one down the street. */

/** words that mean the same thing to us: the first one is the word we use */
const SAME: string[][] = [
  ["shoes", "shoe", "boots", "sneakers", "trainers", "slippers", "鞋"],
  ["coats", "coat", "jacket", "jackets", "外套", "大衣", "衣服"],
  ["keys", "key", "wallet", "钥匙", "钱包"],
  ["post", "mail", "letters", "parcels", "packages", "信", "快递", "包裹"],
  ["bags", "bag", "backpack", "backpacks", "schoolbag", "书包", "包"],
  [
    "door",
    "hallway",
    "hall",
    "entry",
    "entrance",
    "entryway",
    "玄关",
    "门口",
    "进门",
  ],
  [
    "desk",
    "work",
    "working",
    "office",
    "laptop",
    "computer",
    "study",
    "wfh",
    "办公",
    "工作",
    "书桌",
    "电脑",
    "桌",
  ],
  [
    "books",
    "book",
    "bookshelf",
    "bookcase",
    "library",
    "reading",
    "书",
    "书架",
  ],
  ["toys", "toy", "lego", "play", "playing", "玩具"],
  [
    "children",
    "child",
    "kids",
    "kid",
    "son",
    "daughter",
    "siblings",
    "孩子",
    "小孩",
    "儿童",
    "宝宝",
  ],
  ["baby", "changing", "nappy", "diaper", "婴儿", "尿布"],
  [
    "bed",
    "bedside",
    "sleep",
    "sleeping",
    "night",
    "nightstand",
    "床",
    "床头",
    "睡",
  ],
  [
    "tv",
    "television",
    "cables",
    "cable",
    "console",
    "router",
    "boxes",
    "电视",
    "线",
  ],
  ["sofa", "couch", "cup", "remote", "coffee", "沙发", "茶几", "遥控"],
  ["kitchen", "cook", "cooking", "counter", "worktop", "厨房", "做饭", "台面"],
  ["bottles", "jars", "spices", "spice", "pantry", "food", "瓶", "罐", "调料"],
  [
    "bathroom",
    "bath",
    "towels",
    "towel",
    "laundry",
    "washing",
    "浴室",
    "卫生间",
    "毛巾",
    "洗衣",
  ],
  ["balcony", "plants", "plant", "outside", "terrace", "阳台", "植物", "花"],
  [
    "wardrobe",
    "clothes",
    "closet",
    "dressing",
    "dress",
    "衣柜",
    "衣橱",
    "衣帽间",
  ],
  ["mirror", "镜子", "镜"],
  [
    "divide",
    "divider",
    "dividing",
    "partition",
    "separate",
    "split",
    "between",
    "privacy",
    "private",
    "own",
    "隔断",
    "隔开",
    "分隔",
    "分开",
    "隐私",
    "独立",
  ],
  [
    "screen",
    "calls",
    "call",
    "video",
    "zoom",
    "meeting",
    "meetings",
    "background",
    "backdrop",
    "屏风",
    "视频",
    "会议",
    "通话",
    "背景",
  ],
  [
    "storage",
    "store",
    "clutter",
    "mess",
    "messy",
    "tidy",
    "stuff",
    "things",
    "everywhere",
    "organise",
    "organize",
    "收纳",
    "乱",
    "杂物",
    "整理",
    "东西",
  ],
  ["hide", "hidden", "doors", "behind", "cover", "藏", "遮"],
  [
    "roll",
    "rolls",
    "wheels",
    "casters",
    "move",
    "moves",
    "movable",
    "mobile",
    "trolley",
    "cart",
    "轮",
    "移动",
    "推车",
  ],
  ["sit", "seat", "bench", "sitting", "坐", "凳"],
  ["hang", "hooks", "hook", "hanging", "挂", "挂钩"],
  ["shelves", "shelf", "shelving", "架", "层板"],
  ["cat", "pet", "dog", "猫", "狗", "宠物"],
  ["small", "tiny", "space", "room", "studio", "小", "空间"],
  ["guests", "guest", "visitors", "客人"],
  ["whiteboard", "write", "notes", "planning", "白板"],
  ["tools", "workshop", "bench", "工具"],
  ["light", "daylight", "window", "光", "采光"],
];

const STOP = new Set(
  "a an the and or but of for to in on at by with my our your his her their its is are was be been i we you it they this that these those there here have has had do does not no so too very just some any all one two need needs want wants would like can could should where when what how which who get got put keep keeps make more less from home house place somewhere something anything nowhere nothing everything really always never also about into out up down over under than then them me us".split(
    " ",
  ),
);

const concept = new Map<string, string>();
for (const group of SAME) for (const w of group) concept.set(w, group[0] ?? w);

/** the ideas in a sentence: our own word for each thing it mentions */
function ideas(text: string): Set<string> {
  const out = new Set<string>();
  const lower = text.toLowerCase();
  // Chinese is not spaced: look for the words we know inside the sentence
  for (const [w, c] of concept)
    if (/[\u2e80-\u9fff]/.test(w) && lower.includes(w)) out.add(c);
  for (const raw of lower.split(/[^a-z]+/)) {
    if (raw.length < 2 || STOP.has(raw)) continue;
    const forms = [raw, raw.replace(/(ing|ed|es|s)$/, "")];
    const hit = forms.map((f) => concept.get(f)).find(Boolean);
    out.add(hit ?? forms[1] ?? raw);
  }
  return out;
}

const lifeOfJob = (j: Job) =>
  families
    .find((f) => f.id === j.family)
    ?.bodies.find((b) => b.id === j.body)
    ?.lives.find((l) => l.id === j.life);

/** what each problem is about, worked out once */
const about = new Map<string, { say: Set<string>; rest: Set<string> }>();
function aboutJob(j: Job) {
  const hit = about.get(j.id);
  if (hit) return hit;
  const life = lifeOfJob(j);
  const made = {
    say: ideas(j.say),
    rest: ideas(
      [
        placeOf(j.room)?.name,
        homes.find((h) => h.id === j.home)?.name,
        life?.name,
        life?.line,
        ...(life ? verbsOf(life).map((v) => verbNames[v].name) : []),
      ]
        .filter(Boolean)
        .join(" "),
    ),
  };
  about.set(j.id, made);
  return made;
}

export type Answer = {
  job: Job;
  /** the design it brings */
  name: string;
  /** in the home the visitor chose */
  here: boolean;
  score: number;
};

/** what the visitor can narrow an answer down by, and how much is left if they do */
export type Facet = { id: string; name: string; n: number };

export type Asked = {
  answers: Answer[];
  /** which rooms and which kinds the answers are in */
  rooms: Facet[];
  kinds: Facet[];
};

export type Narrow = {
  /** room names, as `placeOf(job.room).name` gives them */
  rooms?: string[];
  kinds?: FamilyId[];
};

/** everything the words match, before it is narrowed down */
function matches(query: string, home: HomeId | null): Answer[] {
  const said = ideas(query);
  if (said.size === 0) return [];
  const out: Answer[] = [];
  for (const j of jobs) {
    const a = aboutJob(j);
    // said in the problem itself counts double what is only true of the answer;
    // and a hair more again, so that of two equal scores the problem wins
    let score = 0;
    for (const w of said) score += a.say.has(w) ? 2.05 : a.rest.has(w) ? 1 : 0;
    if (score === 0) continue;
    const here = home !== null && j.home === home;
    out.push({
      job: j,
      name: lifeOfJob(j)?.name ?? "",
      here,
      // the same answer at home beats it down the street, but a better answer
      // down the street still beats a worse one at home
      score: score / Math.sqrt(said.size) + (here ? 0.75 : 0),
    });
  }
  return out.sort((p, q) => q.score - p.score);
}

/** one row per design: the same piece often answers the same words twice */
function once(list: Answer[], take: number): Answer[] {
  const seen = new Set<string>();
  return list
    .filter((a) => {
      const k = `${a.job.home}|${a.job.life}`;
      if (seen.has(k)) return false;
      seen.add(k);
      return true;
    })
    .slice(0, take);
}

const tally = (list: Answer[], of: (a: Answer) => string | undefined) => {
  const n = new Map<string, number>();
  for (const a of list) {
    const k = of(a);
    if (k) n.set(k, (n.get(k) ?? 0) + 1);
  }
  return [...n.entries()]
    .map(([id, count]) => ({ id, name: id, n: count }))
    .sort((p, q) => q.n - p.n || p.name.localeCompare(q.name));
};

const roomOfAnswer = (a: Answer) => placeOf(a.job.room)?.name;

/** What the visitor said, answered — and what is left to narrow it down by.
    The counts are of everything the words matched, so a room offered here
    always has something behind it. */
export function asked(
  query: string,
  home: HomeId | null,
  narrow: Narrow = {},
  take = 6,
): Asked {
  const all = matches(query, home);
  const kept = all.filter(
    (a) =>
      (!narrow.rooms?.length || narrow.rooms.includes(roomOfAnswer(a) ?? "")) &&
      (!narrow.kinds?.length || narrow.kinds.includes(a.job.family)),
  );
  return {
    answers: once(kept, take),
    rooms: tally(all, roomOfAnswer),
    kinds: tally(all, (a) => a.job.family).map((f) => ({
      ...f,
      name: families.find((x) => x.id === f.id)?.name ?? f.id,
    })),
  };
}

/** the problems closest to what the visitor said, best first */
export function ask(query: string, home: HomeId): Answer[] {
  return asked(query, home).answers;
}
