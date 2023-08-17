import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import classes from "./Home.module.classes";
import { VkGroupMessages } from "../VkGroupMessages/VkGroupMessages";

export const Home = () => {
  return (
    <div className={classes.layout}>
      <Header />
      <main className={classes.main}>
        <VkGroupMessages />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
