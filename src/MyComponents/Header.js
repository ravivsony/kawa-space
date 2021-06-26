import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <ul className="nav justify-content-end ">
        <li className="nav-item">
          <Link className="nav-link active " aria-current="page" to="/">
            Product
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/download">
            Download
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/pricing">
            Pricing
          </Link>
        </li>
      </ul>
    </>
  );
};
