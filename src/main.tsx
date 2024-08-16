import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PersistGate } from "redux-persist/integration/react";
import { Spinner } from "./components/ui/spinner";
import Loading from "./components/common/Loading";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Suspense fallback={<Loading/>}>
          <RouterProvider router={router} />
        </Suspense>
      </PersistGate>
      <ToastContainer />
    </Provider>
  </React.StrictMode>
);
