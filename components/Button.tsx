import Link from "next/link";

const Button = ({ name, url }: { name: string; url: string }) => {
  return (
    <Link
      href={url}
      className="relative overflow-hidden flex items-center justify-center w-full bg-transparent px-6 py-3 rounded-full text-foreground border border-muted group"
    >
      <span>{name}</span>
      <div className="z-[-1] absolute bottom-0 left-0 w-full h-0 bg-primary group-hover:h-full transition-all duration-300 ease-in-out"></div>
    </Link>
  );
};

export default Button;
