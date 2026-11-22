import LinkCard from "@/components/LinkCard";
import Profile from "@/components/Profile";
import ThemeToggle from "@/components/ThemeToggle";
import { links, profile } from "@/data/profile";
import { getClickCounts } from "@/lib/clicks";

export const dynamic = "force-dynamic";

export default async function Home() {
  const counts = await getClickCounts();

  return (
    <main className="relative mx-auto min-h-screen w-full max-w-[28rem] px-6 pb-16 pt-20 sm:pt-24">
      <div className="absolute right-5 top-5">
        <ThemeToggle />
      </div>

      <Profile {...profile} />

      <ul className="mt-10 flex flex-col gap-5">
        {links.map((link) => (
          <li key={link.id}>
            <LinkCard
              link={link}
              initialCount={counts ? (counts[link.id] ?? 0) : null}
            />
          </li>
        ))}
      </ul>
    </main>
  );
}
