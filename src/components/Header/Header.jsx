import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "./Nav";
import Logo from "../../assets/images/logo.jpg";
import classes from "./Header.module.scss";
import { CgClose } from "react-icons/cg";
import { TbMenuDeep } from "react-icons/tb";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleBurger = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <header className={classes.header}>
        <div className={classes.layoutMaxWidth}>
          <div className={classes.headerLayout}>
            <NavLink to="/" className={classes.logoLayout}>
              <img className={classes.logo} src={Logo} alt="logo" />
            </NavLink>
            <Nav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          </div>
        </div>
        <button onClick={handleBurger} className={classes.headerBurgerButton}>
          {isMenuOpen ? <CgClose /> : <TbMenuDeep />}
        </button>
      </header>
    </>
  );
};
