import React, { Suspense, lazy } from "react";
// import SideBar from './SideBar'
// import MainSection from './MainSection'
import { ToastContainer } from "react-toastify";

const SideBar = lazy(() => import("./SideBar"));
const MainSection = lazy(() => import("./MainSection"));

const Master = () => {
  return (
    // <Cursor>
    <Suspense
      fallback={
        <>
          <p>Loading pls</p>
        </>
      }
    >
      <div className="lg:flex">
        <SideBar />
        <MainSection />
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </Suspense>
    // </Cursor>
  );
};

export default Master;
