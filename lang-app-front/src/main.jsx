import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Router from "@/app/Router.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@/index.css";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  </StrictMode>,
);
