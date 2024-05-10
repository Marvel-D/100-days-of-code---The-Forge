import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen flex-col justify-center items-center text-black">
      {children}
    </div>
  );
}
