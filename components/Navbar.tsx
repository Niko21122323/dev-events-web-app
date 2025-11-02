import Link from "next/link";
import Image from "next/image";

import logo from "../public/assets/icons/logo.png";

const Navbar = () => {
  return (
    <header>
      <nav>
        <Link href="/" className="logo">
          <Image src={logo} alt="logo" width={24} height={24} />
          <p>DevMeet</p>
        </Link>

        <ul>
          <Link href="/">Home</Link>
          <Link href="/">Events</Link>
          <Link href="/">Create Event</Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
