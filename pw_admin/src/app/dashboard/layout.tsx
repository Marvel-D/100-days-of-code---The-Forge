import { Sidebar, Topbar } from "../components/dashboard";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <Sidebar />
      <section className="w-full h-full flex flex-col bg-gray-100 border-4 border-white">
        <Topbar />
        <div className="h-full w-full p-2">{children}</div>
      </section>
    </div>
  );
}
