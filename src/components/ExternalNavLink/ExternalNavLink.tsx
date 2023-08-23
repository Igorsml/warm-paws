import { NavLink } from "react-router-dom";

export const ExternalNavLink = ({ children }: { children: JSX.Element }) => (
  <NavLink to="/" target="_blank" rel="noopener noreferrer">
    {children}
  </NavLink>
);
