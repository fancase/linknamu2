export type LinkItem = {
  /** 클릭 수 저장 키. 변경하면 기존 집계와 연결이 끊깁니다. */
  id: string;
  title: string;
  description: string;
  url: string;
};

// 아래 값은 모두 화면 확인용 더미 데이터입니다. 실제 내용으로 교체하세요.
export const profile = {
  name: "김클로",
  bio: "세계 최강 바이브코더",
  image: "/profile.svg",
};

export const links: LinkItem[] = [
  {
    id: "github",
    title: "GitHub",
    description: "오픈소스와 프로젝트",
    url: "https://github.com/",
  },
  {
    id: "linkedin",
    title: "LinkedIn",
    description: "경력과 이력",
    url: "https://www.linkedin.com/",
  },
  {
    id: "blog",
    title: "Blog",
    description: "배운 것을 정리하는 글",
    url: "https://example.com/",
  },
];
