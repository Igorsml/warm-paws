import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import classes from "./Home.module.scss";

export const Home = () => {
  return (
    <div className={classes.layout}>
      <Header />
      <main className={classes.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
