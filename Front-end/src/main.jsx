import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AuthProvider } from "./Context/AuthContext.jsx";
import { LoaderProvider } from "./Context/LoaderContext.jsx";

createRoot(document.getElementById("root")).render(
  <LoaderProvider>
    <AuthProvider>
      <App />
    </AuthProvider>
  </LoaderProvider>
);
