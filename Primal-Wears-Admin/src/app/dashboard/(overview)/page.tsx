"use client";
import { ContainerW } from "@/app/components/dashboard";
import { PiGraph } from "react-icons/pi";
import { IoPieChart } from "react-icons/io5";
import { useAuth } from "@/app/hooks/useAuth";

export default function Page() {
  return (
    <div className="grid grid-cols-3 grid-rows-5 gap-4 justify-between h-full">
      <ContainerW style={""}>
        <section className="flex justify-between items-center">
          <IoPieChart />
          <p>tech</p>
        </section>
        <section className=" grid grid-cols-2 grid-rows-2 gap-x-8 gap-y-2 justify-between items-center">
          <p>Sales</p>
          <p>Volume</p>
          <p>0.00</p>
          <p>0</p>
        </section>
      </ContainerW>

      <ContainerW>
        <section className="flex justify-between items-center">
          <PiGraph />
          <p>tech</p>
        </section>
        <section className="grid grid-cols-2 grid-rows-2 gap-x-8 gap-y-2 justify-between items-center">
          <p>Sales</p>
          <p>Volume</p>
          <p>0.00</p>
          <p>0</p>
        </section>
      </ContainerW>

      <ContainerW>
        <section className="flex justify-between items-center">
          <PiGraph />
          <p>tech</p>
        </section>
        <section className="grid grid-cols-3 grid-rows-2 gap-x-8 gap-y-2 justify-between items-center">
          {/* header */}
          <p>All orders</p>
          <p>Pending</p>
          <p>Completed</p>
          {/* values */}
          <p>0</p>
          <p>0</p>
          <p>0</p>
        </section>
      </ContainerW>

      <ContainerW style={"row-span-2"}>
        <section className="flex justify-between items-center">
          <PiGraph />
          <p>tech</p>
        </section>
        <section className="grid grid-cols-2 grid-rows-2 gap-x-8 gap-y-2 justify-between items-center">
          <p>Sales Tech</p>
          <p>Volume</p>
          <p>0.00</p>
          <p>0</p>
        </section>
      </ContainerW>

      <div className="flex flex-col justify-between row-span-2 gap-2">
        <ContainerW color={"bg-pri-100"}>
          <section className="flex justify-between items-center">
            <PiGraph />
            <p>tech</p>
          </section>
          <section className="grid grid-cols-2 grid-rows-2 gap-x-8 gap-y-2 justify-between items-center">
            <p>Sales</p>
            <p>Volume</p>
            <p>0.00</p>
            <p>0</p>
          </section>
        </ContainerW>

        <ContainerW>
          <section className="flex justify-between items-center">
            <PiGraph />
            <p>tech</p>
          </section>
          <section className="grid grid-cols-2 grid-rows-2 gap-x-8 gap-y-2 justify-between items-center">
            <p>Sales</p>
            <p>Volume</p>
            <p>0.00</p>
            <p>0</p>
          </section>
        </ContainerW>
      </div>

      <ContainerW style={"row-span-4"}>
        <section className="flex justify-between items-center">
          <PiGraph />
          <p>tech</p>
        </section>
        <section className="grid grid-cols-2 grid-rows-2 gap-x-8 gap-y-2 justify-between items-center">
          <p>Sales</p>
          <p>Volume</p>
          <p>0.00</p>
          <p>0</p>
        </section>
      </ContainerW>

      <ContainerW style={"col-span-2 row-span-2"}>
        <section className="flex justify-between items-center">
          <PiGraph />
          <p>tech</p>
        </section>
        <section className="grid grid-cols-2 grid-rows-2 gap-x-8 gap-y-2 justify-between items-center">
          <p>Sales</p>
          <p>Volume</p>
          <p>0.00</p>
          <p>0</p>
        </section>
      </ContainerW>
    </div>
  );
}
