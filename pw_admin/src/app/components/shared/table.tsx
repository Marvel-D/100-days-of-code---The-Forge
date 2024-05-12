"use client";
import { ActionBtn } from ".";
import { PiPlus } from "react-icons/pi";
import Image from "next/image";
import { Checkbox, filter } from "@chakra-ui/react";

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightAddon,
  Select,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { FaSearch } from "react-icons/fa";

const Filter = ({
  icon,
  placeholder,
  val,
}: {
  icon?: ReactNode;
  placeholder?: string;
  val;
}) => {
  return (
    <>
      <InputGroup className="bg-gr-08 border rounded-lg flex gap-4 px-2 items-center h-10">
        {/* <InputLeftElement>{icon}</InputLeftElement> */}
        <div className="text-xl">{icon}</div>
        <Select
          {...val}
          placeholder={placeholder}
          variant="unstyled"
          size="lg"
          className=""
        >
          <option value="none">none</option>
          <option value="Uniport">University of Port Harcourt</option>
          <option value="UST">Rivers State University</option>
          <option value="Ken Poly">Ken Saro Wiwa Polytechnic</option>
        </Select>
      </InputGroup>
    </>
  );
};

const TableSearchBar = ({ val }) => {
  return (
    <>
      <InputGroup className="w-[50px] flex items-center gap-2 border-2 border-black rounded px-1">
        <FaSearch color="" />

        <Input
          placeholder="Search"
          size="sm"
          {...val}
          variant="unstyled"
          className="py-1"
        />
      </InputGroup>
    </>
  );
};

const TableActionBtn = ({ text }) => {
  return (
    <>
      <Button type="submit" className="w-[150px] border border-black" size="sm">
        <FaSearch color="" />
        <small>{text}</small>
      </Button>
    </>
  );
};

const EmptyTable = () => {
  return (
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
          Add products to your store and start <br /> selling to see orders here
        </small>
        <ActionBtn
          text="New Product"
          icon={<PiPlus />}
          variant="solid"
          color="blue"
        />
      </section>
    </div>
  );
};

const TableGrid = ({ data }) => {
  return (
    <section>
      <section className="flex items-center justify-between mb-4">
        <h2 className="font-bold">Inventory Items</h2>
        <div className="flex justify-end items-center w-[50%] gap-1">
          <TableSearchBar />

          <TableActionBtn text={"filter"} />
          <TableActionBtn text={"share"} />
          <TableActionBtn text={"export"} />
        </div>
      </section>

      <TableContainer>
        <Table variant="simple" size="sm">
          {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
          <Thead>
            <Tr className="">
              <Th>
                <Checkbox className="" />
              </Th>
              <Th className="border border-black">Inventory Items</Th>
              <Th>Category</Th>
              <Th>Unit Price</Th>
              <Th>In-stock</Th>
              <Th>Discount</Th> <Th>Total Value</Th>
              <Th>Action</Th>
              <Th>Status</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((res) => {
              return (
                <Tr key={res.productId} className=" ">
                  <Th>
                    <Checkbox className="" />
                  </Th>
                  <Td className="border border-black">res.productName</Td>
                  <Td className="border border-black">res.productName</Td>
                  <Td className="border border-black">res.productName</Td>
                  <Td className="border border-black">res.productName</Td>
                  <Td className="border border-black">res.productName</Td>
                  <Td className="border border-black">res.productName</Td>
                  <Td className="border border-black">res.productName</Td>
                  <Td className="border border-black">res.productName</Td>
                </Tr>
              );
            })}
          </Tbody>
          {/* <Tfoot>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Tfoot> */}
        </Table>
      </TableContainer>
    </section>
  );
};
export { EmptyTable, TableGrid };
