"use client";

import { useEffect, useState } from "react";
import LinkCard from "@/components/LinkCard";
import type { LinkItem } from "@/data/profile";

type Counts = Record<string, number>;

export default function LinkList({ links }: { links: LinkItem[] }) {
  const [serverCounts, setServerCounts] = useState<Counts>({});
  // 응답 전에 누른 클릭이 덮어써지지 않도록 서버 값과 분리해 둡니다.
  const [localClicks, setLocalClicks] = useState<Counts>({});

  useEffect(() => {
    const controller = new AbortController();

    fetch("/api/clicks", { cache: "no-store", signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return response.json() as Promise<Counts>;
      })
      .then(setServerCounts)
      .catch((error) => {
        if (!controller.signal.aborted) {
          console.error("클릭 수 불러오기 실패", error);
        }
      });

    return () => controller.abort();
  }, []);

  function handleClick(id: string) {
    navigator.sendBeacon(`/api/clicks/${encodeURIComponent(id)}`);
    setLocalClicks((current) => ({
      ...current,
      [id]: (current[id] ?? 0) + 1,
    }));
  }

  return (
    <ul className="mt-10 flex flex-col gap-5">
      {links.map((link) => (
        <li key={link.id}>
          <LinkCard
            link={link}
            count={(serverCounts[link.id] ?? 0) + (localClicks[link.id] ?? 0)}
            onRecordClick={() => handleClick(link.id)}
          />
        </li>
      ))}
    </ul>
  );
}
