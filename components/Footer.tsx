import Link from "next/link";
import Image from "next/image";
import emailIcon from "../public/assets/icons/email-icon-1.png";
import phoneIcon from "../public/assets/icons/phone-icon.png";
import footerIcon from "../public/assets/icons/footer-icon.png";

const Footer = () => {
  return (
    <footer className="pt-24 border-t border-muted">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between gap-20 pb-10">
          <div className="">
            <p className="text-muted-foreground text-xl font-semibold pb-4">
              Have questions?
            </p>
            <p className="font-titan-one max-sm:text-pretty text-foreground max-[425px]:text-3xl text-4xl lg:text-5xl max-w-[400px] sm:max-w-[450px] leading-12 pb-8">
              We’d love to hear from you.
            </p>
            <div className="flex flex-col gap-2 xl:gap-6">
              <div className="flex items-center gap-4">
                <Image
                  src={emailIcon}
                  alt="email icon"
                  width={100}
                  height={100}
                  className="w-10 lg:w-14 h-auto"
                />

                <Link
                  href="mailto:support@playforge.com"
                  className="max-[425px]:text-lg text-2xl lg:text-4xl xl:text-5xl text-foreground font-bold underline hover:text-primary transition-colors duration-300 ease-in-out"
                >
                  support@playforge.com
                </Link>
              </div>
              <div className="flex items-center gap-2 xl:gap-4">
                <Image
                  src={phoneIcon}
                  alt="email icon"
                  width={100}
                  height={100}
                  className="w-10 lg:w-14 h-auto"
                />
                <Link
                  href="tel:15554379824"
                  className="max-[425px]:text-lg text-2xl lg:text-4xl xl:text-5xl text-foreground font-bold underline hover:text-primary transition-colors duration-300 ease-in-out"
                >
                  +1 (555) 437-9824
                </Link>
              </div>
            </div>
          </div>
          <div className="max-sm:hidden">
            <Image
              src={footerIcon}
              alt="footer icon"
              width={1000}
              height={1000}
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-10 border-t border-muted py-10">
          <ul className="flex max-[375px]:flex-col max-[375px]:items-start items-center max-[375px]:gap-2 gap-4">
            <li>
              <Link
                href="/"
                className="text-base text-muted-foreground hover:text-primary transition-colors duration-300 ease-in-out underline"
              >
                Instagram
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-base text-muted-foreground hover:text-primary transition-colors duration-300 ease-in-out underline"
              >
                Facebook
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-base text-muted-foreground hover:text-primary transition-colors duration-300 ease-in-out underline"
              >
                Youtube
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-base text-muted-foreground hover:text-primary transition-colors duration-300 ease-in-out underline"
              >
                LinkedIn
              </Link>
            </li>
          </ul>
          <ul className="flex max-[375px]:flex-col max-[375px]:items-start items-center max-[375px]:gap-2 gap-4">
            <li>
              <Link
                href="/"
                className="text-base text-muted-foreground hover:text-primary transition-colors duration-300 ease-in-out underline"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-base text-muted-foreground hover:text-primary transition-colors duration-300 ease-in-out underline"
              >
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
