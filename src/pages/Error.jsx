import { NavLink, useNavigate, useRouteError } from "react-router-dom";
import "../css/Error.css";
import { useEffect } from "react";

export const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    console.log(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  if (error.status === 404) {
    return (
      <section className="error-section">
        <div id="error-text">
          <figure>
            <img
              src="https://cdn.dribbble.com/userupload/20420676/file/original-aac8f7f838812fa53cd92617fad5f892.gif"
              alt="404 Page"
            />
          </figure>
          <div className="text-center">
            <p className="p-a">
              The page you are looking for could not be found.
            </p>
            <p className="p-b">...Back to previous page</p>
          </div>
        </div>
        {/* <NavLink to="/" className="btn">
          Go Back to Home
        </NavLink> */}

        <button onClick={handleGoBack} className="btn">
          Go Back
        </button>
      </section>
    );
  }
};
