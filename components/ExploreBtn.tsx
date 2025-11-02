"use client";

import Image from "next/image";
import arrowDownIcon from "../public/assets/icons/arrow-down.svg";

const ExploreBtn = () => {
  return (
    <button
      id="explore-btn"
      type="button"
      onClick={() => console.log("Click")}
      className="mt-7"
    >
      <a href="#events">Explore Events</a>
      <Image src={arrowDownIcon} alt="arrow-down" width={24} height={24} />
    </button>
  );
};

export default ExploreBtn;
