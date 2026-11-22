import Image from "next/image";

type ProfileProps = {
  name: string;
  bio: string;
  image: string;
};

export default function Profile({ name, bio, image }: ProfileProps) {
  return (
    <header className="flex flex-col items-center text-center">
      <div className="rounded-full bg-white/70 p-1.5 shadow-[0_22px_44px_-16px_rgba(150,88,50,0.5),inset_0_1px_0_rgba(255,255,255,0.9)] dark:bg-orange-50/10 dark:shadow-[0_22px_44px_-16px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,240,225,0.18)]">
        <Image
          src={image}
          alt={`${name} 프로필 사진`}
          width={208}
          height={208}
          priority
          // 외부 이미지와 SVG는 Next.js 이미지 최적화를 거치지 않고 그대로 표시합니다.
          unoptimized={image.startsWith("http") || image.endsWith(".svg")}
          className="h-52 w-52 rounded-full object-cover"
        />
      </div>
      <h1 className="mt-7 text-[1.75rem] font-bold leading-tight tracking-tight">
        {name}
      </h1>
      <p className="mt-2.5 text-balance break-keep text-sm leading-relaxed text-stone-600 sm:text-[0.9375rem] dark:text-orange-100/70">
        {bio}
      </p>
    </header>
  );
}
