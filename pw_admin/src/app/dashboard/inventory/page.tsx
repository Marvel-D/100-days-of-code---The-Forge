"use client";
import { ContainerW } from "@/app/components/dashboard";
import { ActionBtn } from "@/app/components/shared";
import Image from "next/image";
import { PiGraph, PiPlus, PiUsers } from "react-icons/pi";
import {
  useReactTable,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
} from "@tanstack/react-table";
import {
  EmptyTable,
  GridTable,
  TableGrid,
} from "@/app/components/shared/table";

const columnHelper = createColumnHelper();

const data = [
  {
    productId: 1,
    productName: "iphone",
    category: "gadget",
    unitPrice: 1200,
    inStock: 8,
    discount: 20,
    totalValue: 50000, // inStock(unitPrice - discount)
    action: "Publish",
    status: "published",
  },
  {
    productId: 2,
    productName: "iphone",
    category: "gadget",
    unitPrice: 1200,
    inStock: 8,
    discount: 20,
    totalValue: 50000, // inStock(unitPrice - discount)
    action: "Publish",
    status: "published",
  },
];

export default function Page() {
  return (
    <div className="h-full flex flex-col border-2 border-black">
      <section className="flex w-full justify-between items-center">
        <h3>Inventory Summary</h3>
        <ActionBtn
          text="Add a New Product"
          variant="solid"
          color="blue"
          icon={<PiPlus />}
        />
      </section>

      <section className="h-full flex flex-col">
        <div className="my-4 grid grid-cols-2 gap-3 justify-between items-center h-[180px] text-sm">
          <ContainerW color={"bg-pri-100"}>
            <PiGraph />

            <section className="text-white grid grid-cols-2 grid-rows-2 gap-x-8 gap-y-2 justify-between items-center">
              {/* header */}
              <p>All Products</p>
              <p>Active</p>
              {/* values */}
              <b>350</b>
              <b className="flex items-center gap-1">
                316 <small className="font-normal">86%</small>
              </b>
            </section>
          </ContainerW>

          <ContainerW style={""}>
            <section className="flex justify-between items-center">
              <PiUsers />
              <p>This Week</p>
            </section>
            <section className="grid grid-cols-3 grid-rows-2 gap-x-8 gap-y-2 justify-between items-center">
              {/* header */}
              <p className="text-err-100">Low Stock Alert</p>
              <p>Expired</p>
              <p>1 Star Rating</p>
              {/* values */}
              <b>23</b>
              <b>3</b>
              <b>2</b>
            </section>
          </ContainerW>
        </div>

        <ContainerW style={""}>
          {data.length > 0 ? <TableGrid data={data} /> : <EmptyTable />}
        </ContainerW>
      </section>
    </div>
  );
}
