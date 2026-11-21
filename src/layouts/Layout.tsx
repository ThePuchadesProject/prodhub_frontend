import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <header className="bg-black">
        <div className="mx-auto max-w-6xl py-10 flex items-center gap-4">
          <img
            src="/prodhub.png"
            alt="ProdHub Logo"
            className="w-12 h-12 rounded-full"
          />
          <h1 className="text-4xl font-extrabold text-white">
            ProdHub - Product Manager
          </h1>
        </div>
      </header>

      <main className="mt-10 mx-auto max-w-6xl p-10 text-white bg-zinc-600 shadow-2xl shadow-black/50 border border-zinc-500">
        <Outlet />
      </main>
    </>
  );
}
