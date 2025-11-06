import Link from "next/link";

const Button = ({ name, url }: { name: string; url: string }) => {
  return (
    <Link
      href={url}
      className="flex items-center justify-center w-full bg-primary px-6 py-3 rounded-full text-foreground hover:bg-sidebar-primary transition-colors duration-300 ease-in-out"
    >
      {name}
    </Link>
  );
};

export default Button;
