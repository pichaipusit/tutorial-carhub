import Image from "next/image";
import Link from "next/link";
import React from "react";
import CustomButton from "./CustomButton";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav
        className="max-w-[1440px] flex justify-between items-center 
       mx-auto sm:px-16 px-6 py-4"
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
