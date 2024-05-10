import Image from "next/image";
import { HomeNav } from "./components/homeNav";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-20  px-24 py-12 border-4 border-red-700">
      <HomeNav />
      <section className="flex w-full justify-between items-center">
        <div>
          <h1 className="font-black text-6xl mb-3">
            Money & Sense: <br />
            Master your wealth with <br />
            <span className="text-blue-700">CANARY</span>
          </h1>
          <p>
            Allocate your income to investments, savings, and expenses. Discover{" "}
            <br /> the art of budgeting and manage your money wisely for a
            brighter <br /> financial future.
          </p>
          <div className="flex items-center gap-14 mt-3">
            <p>
              <span className="text-3xl font-black">8+</span> <br />
              Budget <br />
              Principles
            </p>
            <p>
              <span className="text-3xl font-black">50+</span> <br />
              Budget <br />
              Principles
            </p>
            <p>
              <span className="text-3xl font-black">100+</span> <br />
              Budget <br />
              Principles
            </p>
          </div>
        </div>
        <Image
          src={"/images/landing01.svg"}
          alt="landing01"
          width={400}
          height={400}
          priority={true}
        />
      </section>
    </main>
  );
}
