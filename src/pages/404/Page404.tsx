import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div>
      <p>
        This page doesn't exist. Go <Link to="/">home</Link>.
      </p>
    </div>
  );
};

export default Page404;
