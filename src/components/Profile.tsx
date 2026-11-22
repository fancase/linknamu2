import Image from "next/image";

type ProfileProps = {
  name: string;
  bio: string;
  image: string;
};

export default function Profile({ name, bio, image }: ProfileProps) {
  return (
    <header className="mt-2 flex flex-col items-center text-center">
      <Image
        src={image}
        alt={`${name} 프로필 사진`}
        width={208}
        height={208}
        priority
        unoptimized={image.endsWith(".svg")}
        className="h-52 w-52 rounded-full object-cover ring-2 ring-emerald-600/30 dark:ring-emerald-400/40"
      />
      <h1 className="mt-6 text-2xl font-bold tracking-tight">{name}</h1>
      <p className="mt-2 text-base text-stone-600 dark:text-stone-300">{bio}</p>
    </header>
  );
}
