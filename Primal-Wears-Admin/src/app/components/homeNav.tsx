"use client";
import { Button } from "@chakra-ui/react";
import { signOut } from "../lib/data";
import { Btn, Logo } from "./shared";
import Link from "next/link";

export const HomeNav = () => {
  return (
    <section className="flex w-full items-center justify-between">
      <Logo />
      <div className="flex justify-between items-center gap-4 ">
        <Btn
          text="Contact Us"
          route="/contact"
          color="transparent"
          variant="ghost"
          width="w-[150px]"
          padding="p-8"
        />
        <Btn
          text="login"
          route="/auth"
          color="blue"
          variant="outline"
          width="w-[150px]"
          padding="p-8"
        />
        <Link
          href={"/auth/signup"}
          className={`whitespace-nowrap w-[150px] text-xs tablet:text-base hover:opacity-80 flex items-center rounded transition ease-in-out delay-150`}
        >
          <Button
            className={`capitalize w-full p-8`}
            colorScheme={"blue"}
            variant={"solid"}
          >
            sign up
          </Button>
        </Link>
      </div>
    </section>
  );
};
