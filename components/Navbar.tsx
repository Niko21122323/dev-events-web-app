"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import logo from "../public/assets/icons/logo.png";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { AddEventForm } from "./AddEventForm";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const handleEventCreated = () => {
    // Close the popover after successful event creation
    setIsPopoverOpen(false);
  };

  return (
    <header>
      <nav className="container mx-auto px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-3">
            <Image src={logo} alt="logo" width={24} height={24} />
            <h6>PlayForge</h6>
          </Link>

          <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
            <PopoverTrigger asChild>
              <Button variant="default">Create Event</Button>
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
