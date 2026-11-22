import type { Metadata, Viewport } from "next";
import { profile } from "@/data/profile";
import "pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css";
import "./globals.css";

export const metadata: Metadata = {
  title: `${profile.name} | 링크나무`,
  description: profile.bio,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

// 첫 페인트 전에 테마를 적용해 화면 깜빡임을 막습니다.
const themeScript = `(function(){var t=null;try{t=localStorage.getItem("theme")}catch(e){}var d=t?t==="dark":matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.classList.toggle("dark",d)})()`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen font-sans text-stone-800 antialiased dark:text-orange-50">
        {children}
      </body>
    </html>
  );
}
