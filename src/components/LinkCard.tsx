"use client";

import type { MouseEvent } from "react";
import type { LinkItem } from "@/data/profile";

type LinkCardProps = {
  link: LinkItem;
  count: number;
  onRecordClick: () => void;
};

export default function LinkCard({ link, count, onRecordClick }: LinkCardProps) {
  function handleAuxClick(event: MouseEvent<HTMLAnchorElement>) {
    if (event.button === 1) onRecordClick(); // 마우스 가운데 버튼
  }

  // mailto 링크는 새 탭을 열면 빈 탭이 남으므로 웹 주소만 새 탭으로 엽니다.
  const newTabProps = link.url.startsWith("http")
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <a
      href={link.url}
      {...newTabProps}
      onClick={onRecordClick}
      onAuxClick={handleAuxClick}
      className="glass flex min-h-[4.75rem] items-center justify-between gap-3 rounded-3xl px-4 py-3.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-700 dark:focus-visible:outline-orange-300"
    >
      <span className="flex min-w-0 items-center gap-3.5">
        <span
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/60 text-[1.375rem] dark:bg-orange-50/10"
          aria-hidden="true"
        >
          {link.emoji}
        </span>
        <span className="min-w-0">
          <span className="block truncate text-[1.0625rem] font-semibold tracking-tight">
            {link.title}
          </span>
          <span className="mt-0.5 block truncate text-[0.8125rem] text-stone-600 dark:text-orange-100/65">
            {link.description}
          </span>
        </span>
      </span>
      <span className="shrink-0 rounded-full bg-white/55 px-2.5 py-1 text-xs font-medium tabular-nums text-stone-600 dark:bg-orange-50/10 dark:text-orange-100/80">
        {count.toLocaleString("ko-KR")}회
      </span>
    </a>
  );
}
