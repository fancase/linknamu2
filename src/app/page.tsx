import LinkList from "@/components/LinkList";
import Profile from "@/components/Profile";
import ThemeToggle from "@/components/ThemeToggle";
import { links, profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="relative mx-auto min-h-screen w-full max-w-[28rem] px-6 pb-16 pt-20 sm:pt-24">
      <div className="absolute right-5 top-5">
        <ThemeToggle />
      </div>

      <Profile {...profile} />

      <LinkList links={links} />
    </main>
  );
}
