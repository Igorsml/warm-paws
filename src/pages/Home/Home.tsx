import { Outlet } from "react-router-dom";
import { Header } from "../../Components/Header/Header";
import { Footer } from "../../Components/Footer/Footer";
import scss from "./Home.module.scss";
import { VkGroupMessages } from "../../Components/VkGroupMessages/VkGroupMessages";

export const Home = () => {
  return (
    <div className={scss.layout}>
      <Header />
      <main className={scss.main}>
        <VkGroupMessages />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
