import React from "react";
import "./footer.css";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <div className="copyright">
      <Link to={"https://www.omdbapi.com/"}>© 2023 db-project</Link>
    </div>
  );
}

export default Footer;
