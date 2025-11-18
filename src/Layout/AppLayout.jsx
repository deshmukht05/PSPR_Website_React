import { Outlet, useNavigation } from "react-router-dom";
import { Header } from "./Header";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Services } from "../pages/Service";
import { Projects } from "../pages/Projects";
import { OurTeam } from "../pages/Team";
import { Contact } from "../pages/Contact";
import { Footer } from "./Footer";

const AppLayout = () => {
const navigation = useNavigation();

if(navigation.state === "loading") return <h1 className="loader">Loading.....</h1>

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default AppLayout;

{
  /* <Home />
      <About />
      <Services />
      <Projects />
      <OurTeam />
      <Contact /> */
}
