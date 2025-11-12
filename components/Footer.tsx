import Image from "next/image";
import emailIcon1 from "../public/assets/icons/email-icon-1.png";
import emailIcon2 from "../public/assets/icons/email-icon-2.png";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-10">
          <div className="flex items-center justify-center gap-6 w-full">
            <Image
              src={emailIcon1}
              alt="email icon"
              width={300}
              height={300}
              className="w-32 xl:w-40 h-auto"
            />
            <p className="text-5xl xl:text-6xl text-foreground font-medium font-titan-one">
              Get in touch
            </p>
            <Image
              src={emailIcon2}
              alt="email icon"
              width={300}
              height={300}
              className="w-32 xl:w-40 h-auto"
            />
          </div>
          <Link
            href="mailto:support@playforge.com"
            className="font-medium text-foreground text-7xl xl:text-8xl text-center underline"
          >
            support@playforge.com
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
