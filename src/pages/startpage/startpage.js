import React from "react";
import "./startpage.css";
import { Link } from "react-router-dom";

const StartPage = () => {
  return (
    <div className="start-page">
      <span className="title-text">Movie World</span>
      <Link to="/movie/start/search">
        <button>Go!</button>
      </Link>
    </div>
  );
};

export default StartPage;
