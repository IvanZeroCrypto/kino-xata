import React from "react";
import Header from "./components/header/Header";
import { Outlet } from "react-router-dom";
import Container from "./components/ui/container/Container";

const Layout = () => {
  return (
    <div>
      <Header />
      <Container className="fixed flex flex-col min-h-screen">
        <main>
          <Outlet />
        </main>
      </Container>
    </div>
  );
};

export default Layout;
