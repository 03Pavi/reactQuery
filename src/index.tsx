import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const queryclient = new QueryClient({
  defaultOptions:{
    queries:{
      // staleTime:1000*60
    }
  }
});
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryclient}>
      <App />
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  </React.StrictMode>
);
