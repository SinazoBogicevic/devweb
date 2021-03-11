import React, { useState, useContext, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./pages/Header/Header";
import Services from "./pages/Services/Services";
import HostingPlans from "./pages/HostingPlans/HostingPlans";
import Info from "./pages/Info/Info";
import Footer from "./components/Footer/Footer";
import Modal from "./components/Modal/Modal";
import Loading from "./components/Loading/Loading";
import ScrollTop from "./components/ScrollTop/ScrollTop";
import { NavbarProvider } from "./NavbarContext";
import { ModalProvider } from "./ModalContext";

function App() {
  const [loading, isLoading] = useState(true);

  useEffect(() => {
    isLoading(false);
  }, [loading, isLoading]);

  return (
    <NavbarProvider>
      <ModalProvider>
        {loading ? (
          <Loading />
        ) : (
          <>
            <Navbar />
            <Sidebar />
            <Header />
            <Services />
            <ScrollTop />
            <Info />
            <HostingPlans />
            <Footer />
            <Modal />
          </>
        )}
      </ModalProvider>
    </NavbarProvider>
  );
}

export default App;
