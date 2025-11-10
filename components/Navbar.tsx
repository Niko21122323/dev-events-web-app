"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import logo from "../public/assets/icons/logo.png";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { AddEventForm } from "./AddEventForm";

const Navbar = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const handleOpenChange = (open: boolean) => {
    setIsPopoverOpen(open);
    document.body.style.overflow = open ? "hidden" : "unset";
  };

  const handleEventCreated = () => {
    setIsPopoverOpen(false);
    document.body.style.overflow = "unset";
  };

  return (
    <header>
      <nav className="container mx-auto px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-3">
            <Image src={logo} alt="logo" width={24} height={24} />
            <h6>PlayForge</h6>
          </Link>
          <Popover open={isPopoverOpen} onOpenChange={handleOpenChange}>
            <PopoverTrigger asChild>
              <button
                type="button"
                className="bg-primary max-sm:text-sm px-4 sm:px-6 py-2.5 sm:py-4 rounded-full text-white font-semibold cursor-pointer hover:bg-sidebar-primary transition-colors duration-300 ease-in-out leading-[1.1]"
              >
                Create Event
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0" align="end">
              <AddEventForm onSuccess={handleEventCreated} />
            </PopoverContent>
          </Popover>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
