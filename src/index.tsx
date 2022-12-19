import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./store/ThemeContext";
import { JobsProvider } from "./store/JobsContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <JobsProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </JobsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
