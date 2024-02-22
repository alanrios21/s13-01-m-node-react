import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <>
      <div className="flex flex-col h-screen">
        <nav></nav>
      </div>

      <main>
        <Outlet />
      </main>
    </>
  );
};
