import Image from "next/image";
import Link from "next/link";
import React from "react";
import CustomButton from "./CustomButton";

const Navbar = () => {
  return (
    // TODO: Fix the layout so that the hero's not too far below.
    // Make sure nav's always on top and centered for wider screen
    <header>
      <nav
        className="max-w-[1440px] flex justify-between items-center 
       sm:px-16 px-6 py-4"
      >
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Carhub logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>

        {/* TODO: Fix this so that we can pass to component 
        when we don't want the default type*/}
        <CustomButton
          title="Sign in"
          btnType="button"
          containerStyles="bg-primary-blue rounded-full 
          text-white min-w-[130px]"
        />
      </nav>
    </header>
  );
};

export default Navbar;
