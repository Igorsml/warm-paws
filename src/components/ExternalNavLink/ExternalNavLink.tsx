import { NavLink, NavLinkProps } from "react-router-dom";

interface Props {
  title: string;
  children?: JSX.Element | JSX.Element[];
}

const ExternalNavLink = (props: Props) => {
  return (
    <NavLink to="/" {...props} target="_blank" rel="noopener noreferrer">
      {children}
    </NavLink>
  );
};

export default ExternalNavLink;
