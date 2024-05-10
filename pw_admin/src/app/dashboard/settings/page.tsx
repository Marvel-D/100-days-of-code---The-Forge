import { ActionBtn } from "@/app/components/shared";
import { Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import Image from "next/image";
import { FiMail, FiUser } from "react-icons/fi";

export default function Page() {
  return (
    <div className="h-full flex flex-col border border-black">
      <form className="h-full w-full border-red border-2">
        <section className="my-4 w-full flex items-center justify-between">
          <h1 className="text-3xl font-bold">Account Settings</h1>
          <ActionBtn text="Update" variant="solid" color="blue" />
        </section>

        <section className="flex gap-5 border-4 border-blue-700">
          <article className="flex flex-col gap-6 w-[350px]">
            <InputGroup>
              <InputLeftAddon>
                <FiMail />
              </InputLeftAddon>
              <Input type="text" name="first name" placeholder="First Name" />
            </InputGroup>

            <InputGroup>
              <InputLeftAddon>
                <FiMail />
              </InputLeftAddon>
              <Input type="tel" placeholder="Last Name" />
            </InputGroup>

            <InputGroup>
              <InputLeftAddon>
                <FiMail />
              </InputLeftAddon>
              <Input type="text" name="email" placeholder="email" />
            </InputGroup>

            <InputGroup>
              <InputLeftAddon>
                <FiMail />
              </InputLeftAddon>
              <Input type="tel" placeholder="Phone Number" />
            </InputGroup>

            <InputGroup>
              <InputLeftAddon>
                <FiMail />
              </InputLeftAddon>
              <Input type="text" placeholder="Address" />
            </InputGroup>
            <InputGroup>
              <InputLeftAddon>
                <FiMail />
              </InputLeftAddon>
              <Input type="text" name="city" placeholder="City" />
            </InputGroup>

            <div className="flex">
              <InputGroup>
                <InputLeftAddon>
                  <FiMail />
                </InputLeftAddon>
                <Input type="text" placeholder="Country" />
              </InputGroup>
              <InputGroup>
                <InputLeftAddon>
                  <FiMail />
                </InputLeftAddon>
                <Input type="text" placeholder="State" />
              </InputGroup>
            </div>
          </article>

          <Image
            src={"/logomark.png"}
            alt="user Image"
            width={1000}
            height={1000}
            className="h-[150px] w-[150px] border-black border-4 shadow-md rounded-md"
          />
        </section>
      </form>
    </div>
  );
}
