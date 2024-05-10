"use client";
import { PageRoutes } from "@/app/lib/definitions";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FiHeadphones,
  FiGift,
  FiLogOut,
  FiChevronRight,
  FiShoppingBag,
  FiUsers,
  FiFolderMinus,
  FiSettings,
} from "react-icons/fi";
import { MdSpaceDashboard } from "react-icons/md";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { Logo } from "../shared";

const Sidebar = () => {
  const path = usePathname();

  let PageRoutes: PageRoutes[] = [
    {
      id: 0,
      title: "Dashboard",
      icon: <MdSpaceDashboard />,
      link: "/dashboard",
    },
    {
      id: 1,
      title: "Orders",
      icon: <FiShoppingBag />,
      link: "/dashboard/orders",
    },
    {
      id: 2,
      title: "Customers",
      icon: <FiUsers />,
      link: "/dashboard/customers",
    },
    {
      id: 3,
      title: "Inventory",
      icon: <FiFolderMinus />,
      link: "/dashboard/inventory",
    },
    {
      id: 4,
      title: "Conversations",
      icon: <IoChatbubbleEllipsesOutline />,
      link: "/dashboard/chat",
    },
    {
      id: 5,
      title: "Settings",
      icon: <FiSettings />,
      link: "/dashboard/settings",
    },
  ];

  return (
    <div className="flex flex-col w-[300px] max-h-screen min-h-screen gap-8 p-4 bg-white text-black whitespace-nowrap">
      <Logo />
      <section id="routes" className="flex flex-col justify-between h-full">
        <ul className="flex flex-col gap-1">
          {PageRoutes.map((route: PageRoutes) => (
            <Link href={route.link} key={route.id}>
              <li
                className={clsx(
                  "p-3 rounded hover:bg-pri-80 flex items-center gap-2",
                  {
                    "bg-pri-100 text-white": path === route.link,
                  }
                )}
              >
                <span>{route.icon}</span>
                <p>{route.title}</p>
              </li>
            </Link>
          ))}
        </ul>

        <section className="text-base">
          <section className="flex flex-col gap-3 mb-6">
            <div className="flex items-center rounded gap-2 bg-slate-300 bg-opacity-70 p-2">
              <FiHeadphones className="text-xl" />
              <p className="text-sm">Contact Support</p>
            </div>
            {/* <div className="rounded bg-sec-20 bg-opacity-70 p-2">
              <div className="flex items-center gap-2 mb-2">
                <FiGift className="text-xl" />
                <p>Free Gifts Awaits You!</p>
              </div>
              <div className="flex items-center gap-4 text-xs">
                <p>Upgrade your account</p>

                <FiChevronRight className="text-base" />
              </div>
            </div> */}
          </section>

          <div className="flex items-center gap-3 text-err-100 px-2">
            <FiLogOut className="text-lg" />
            <p>Logout</p>
          </div>
        </section>
      </section>
    </div>
  );
};

export { Sidebar };
