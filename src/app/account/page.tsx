import { unstable_noStore as noStore } from "next/cache";

export default async function Page() {
  noStore();
  return (
    <div className="flex min-h-[calc(100vh-7rem)] flex-wrap items-center justify-center gap-5 p-5">
      Account
    </div>
  );
}
