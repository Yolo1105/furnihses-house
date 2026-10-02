import { redirect } from "next/navigation";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ case?: string }>;
}) {
  const q = (await searchParams).case;
  redirect(
    q ? `/family/pieces?case=${encodeURIComponent(q)}` : "/family/pieces",
  );
}
