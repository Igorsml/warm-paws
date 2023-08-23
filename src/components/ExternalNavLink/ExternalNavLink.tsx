import { NavLink } from "react-router-dom";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  children: Element;
}>;

export const ExternalNavLink: React.FC = ({ children: }) => (
  <NavLink to="/" {...props} target="_blank" rel="noopener noreferrer">
    {children}
  </NavLink>
);
