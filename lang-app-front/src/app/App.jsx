import Navbar from "@/components/layout/Navbar.jsx";
import Footer from "@/components/layout/Footer.jsx";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "@/context/ThemeContext";
import Sidebar from "@/components/layout/Sidebar.jsx";

export default function App() {
  return (
    <ThemeProvider>
      <div className="flex min-h-screen text-slate-900 transition-colors duration-300 dark:text-slate-100">
        <Sidebar />
        <div className="flex min-h-screen min-w-0 flex-1 flex-col">
          <Navbar />
          <main className="flex min-h-0 flex-1 flex-col overflow-hidden">
            <div className="mx-auto flex w-full max-w-[1600px] flex-1 min-h-0 flex-col overflow-y-auto px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}
