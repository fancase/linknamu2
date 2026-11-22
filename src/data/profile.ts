export type LinkItem = {
  /** 클릭 수 저장 키. 변경하면 기존 집계와 연결이 끊깁니다. */
  id: string;
  emoji: string;
  title: string;
  description: string;
  url: string;
};

export const profile = {
  name: "김개발",
  bio: "풀스택 개발자 | 요즘에는 AI 개발에 관심이 많아요",
  image: "/profile.png",
};

export const links: LinkItem[] = [
  {
    id: "github",
    emoji: "💻",
    title: "깃허브",
    description: "오픈소스와 프로젝트",
    url: "https://github.com/fancase",
  },
  {
    id: "blog",
    emoji: "📝",
    title: "블로그",
    description: "배운 것을 정리하는 글",
    url: "https://blog.naver.com/jdhsoft",
  },
  {
    id: "email",
    emoji: "✉️",
    title: "이메일",
    description: "메일 보내기",
    // TODO: 실제 이메일 주소로 교체하세요.
    url: "mailto:your-email@example.com",
  },
];
