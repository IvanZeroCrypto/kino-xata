import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { store } from "./redux/store/store.js";
import { Provider } from "react-redux";
import { CssBaseline } from "@mui/material";
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <CssBaseline />
    <App />
  </Provider>
);