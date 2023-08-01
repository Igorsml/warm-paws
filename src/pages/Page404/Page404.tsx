import { Link } from "react-router-dom";

export const Page404 = () => {
  return (
    <div>
      <p>
        This page doesn't exist. Go <Link to="/">home</Link>.
      </p>
    </div>
  );
};
