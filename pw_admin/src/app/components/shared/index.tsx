"use client";
import { FiChevronRight, FiHome } from "react-icons/fi";
import { usePathname } from "next/navigation";
import { Button, Select } from "@chakra-ui/react";
import Link from "next/link";
import { Rye } from "next/font/google";
import Image from "next/image";

const rye = Rye({ subsets: ["latin"], weight: ["400"] });

const Logo = () => {
  return (
    <Link href={"/"} className={`text-3xl font-black `}>
      <span className={`${rye.className} text-blue-700`}>Primal</span>{" "}
      <span className="text-xs">Wears</span>
    </Link>
  );
};

const LoadingScreen = () => {
  return (
    <div className="flex w-full h-screen justify-center items-center">
      <Image
        alt="loading..."
        src={"/images/loadingGif.gif"}
        width={500}
        height={500}
        priority={true}
        // priority=(true)
      ></Image>
    </div>
  );
};

const ComingSoonScreen = () => {
  return <p>coming Soon</p>;
};

const Btn = ({
  color,
  text,
  route,
  width,
  variant,
  padding,
}: {
  color: string;
  text: string;
  route: any;
  width?: string;
  variant: string;
  padding?: string;
}) => {
  return (
    <Link
      href={route}
      className={`whitespace-nowrap ${
        width || "w-fit"
      }  text-xs tablet:text-base hover:opacity-80 flex items-center rounded transition ease-in-out delay-150`}
    >
      <Button
        className={`capitalize w-full ${padding || "p-2"}`}
        colorScheme={color}
        variant={variant}
      >
        {text}
      </Button>
    </Link>
  );
};

const ActionBtn = ({
  color,
  text,
  func,
  icon,
  width,
  variant,
}: {
  color: string;
  text: string;
  func?: any;
  icon?: any;
  width?: string;
  variant: string;
  padding?: string;
}) => {
  return (
    <div
      onClick={func}
      className={`whitespace-nowrap ${
        width || "w-fit"
      }  text-xs tablet:text-base hover:opacity-80 flex items-center rounded transition ease-in-out delay-150`}
    >
      <Button
        className={`capitalize w-full`}
        leftIcon={icon}
        colorScheme={color}
        variant={variant}
        size="sm"
      >
        {text}
      </Button>
    </div>
  );
};

const Dropdown = () => {
  return (
    <Select placeholder="Kulture Store" size={"sm"}>
      <option value="kulture store">Kulture store</option>
      <option value="lewa store">Lewa Store</option>
    </Select>
  );
};

const Breadcrumb = () => {
  const paths = usePathname();
  let pathnames = paths.split("/").filter((path) => path);

  let value = "dashboard";
  pathnames = pathnames.filter((item) => item !== value);

  return (
    <>
      <div className="flex items-center text-sm whitespace-nowrap ">
        <Link href="/dashboard">
          <FiHome />
        </Link>
        {pathnames.map((path, index) => {
          let href = `/${pathnames.slice(0, index + 1).join("/")}`;
          const path1 = path.split("-").filter((path) => path);
          const path2 = path1.toString();
          const pathAsText = path2.replaceAll(",", " ");

          return (
            <Link href={href} key={index} className="flex items-center">
              <FiChevronRight height={12} />
              <p className="capitalize text-p400">{` ${pathAsText}`}</p>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export {
  Logo,
  Btn,
  ActionBtn,
  Dropdown,
  Breadcrumb,
  LoadingScreen,
  ComingSoonScreen,
};
