import { Navbar, Footer } from "../../components/index";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <main className="flex flex-col justify-between min-h-screen min-w-screen">
        <div>
          <Navbar />
        </div>
        <Outlet />
        <div>
          <Footer />
        </div>
      </main>
    </>
  );
}
