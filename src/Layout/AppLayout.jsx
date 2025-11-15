import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Services } from "../pages/Service";
import { Projects } from "../pages/Projects";
import { OurTeam } from "../pages/Team";
import { Contact } from "../pages/Contact";
import { Footer } from "./Footer";

const AppLayout = () => {
  return (
    <>
      <Header />
      {/* <Outlet /> */}
      <Home />
      <About />
      <Services />
      <Projects />
      <OurTeam />
      <Contact />
      <Footer />
    </>
  );
};

export default AppLayout;
