import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { BrowserRouter } from "react-router-dom";
import { apiSlice } from "app/features/api/apiSlice";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <ApiProvider api={apiSlice}>
        <App />
      </ApiProvider>
    </BrowserRouter>
  </StrictMode>
);
