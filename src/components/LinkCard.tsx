"use client";

import { useState, type MouseEvent } from "react";
import type { LinkItem } from "@/data/profile";

type LinkCardProps = {
  link: LinkItem;
  /** null이면 집계를 사용할 수 없는 상태이므로 숫자를 숨깁니다. */
  initialCount: number | null;
};

export default function LinkCard({ link, initialCount }: LinkCardProps) {
  const [count, setCount] = useState(initialCount);

  function recordClick() {
    // sendBeacon은 페이지를 벗어나는 중에도 요청 전송을 보장합니다.
    navigator.sendBeacon(`/api/clicks/${encodeURIComponent(link.id)}`);
    setCount((current) => (current === null ? null : current + 1));
  }

  function handleAuxClick(event: MouseEvent<HTMLAnchorElement>) {
    if (event.button === 1) recordClick(); // 마우스 가운데 버튼
  }

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={recordClick}
      onAuxClick={handleAuxClick}
      className="flex min-h-16 items-center justify-between gap-3 rounded-2xl border border-stone-200 bg-white px-4 py-3 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-500 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 dark:border-stone-800 dark:bg-stone-900 dark:hover:border-emerald-400"
    >
      <span className="min-w-0">
        <span className="block truncate font-semibold">{link.title}</span>
        <span className="block truncate text-sm text-stone-500 dark:text-stone-400">
          {link.description}
        </span>
      </span>
      {count !== null && (
        <span className="shrink-0 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium tabular-nums text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200">
          {count.toLocaleString("ko-KR")}회
        </span>
      )}
    </a>
  );
}
