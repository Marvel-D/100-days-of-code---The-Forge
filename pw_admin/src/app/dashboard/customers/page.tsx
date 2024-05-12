import { ContainerW } from "@/app/components/dashboard";
import { Btn, ActionBtn } from "@/app/components/shared";
import Image from "next/image";
import { PiGraph, PiPlus } from "react-icons/pi";

export default function Page() {
  return (
    <div className="h-full flex flex-col border border-black">
      <section className="flex w-full justify-between items-center">
        <h3>Customers Summary</h3>
        <ActionBtn
          text="Add a New Customer"
          variant="solid"
          color="blue"
          icon={<PiPlus />}
        />
      </section>

      <section className="h-full">
        <div className="my-4 grid grid-cols-2 gap-3 justify-between items-center h-[120px]">
          <ContainerW style={""}>
            <section className="flex justify-between items-center">
              <PiGraph />
              <p>This Week</p>
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

          <ContainerW style={""}>
            <section className="flex justify-between items-center">
              <PiGraph />
              <p>This Week</p>
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
        </div>
        <ContainerW style={""}>
          {/* when list empty */}
          <div
            id="empty-order-list"
            className="h-full flex justify-center items-center"
          >
            <section className="text-center flex flex-col gap-2 justify-between items-center border border-black h-fit w-fit">
              <Image
                alt=""
                src={"/images/iconContainer.png"}
                width={100}
                height={100}
              />
              <h3 className="font-semibold text-lg">No Orders yet?</h3>
              <small>
                Add products to your store and start <br /> selling to see
                orders here
              </small>
              <ActionBtn
                text="New Product"
                icon={<PiPlus />}
                variant="solid"
                color="blue"
              />
            </section>
          </div>
        </ContainerW>
      </section>
    </div>
  );
}
