import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Footer from "../components/Footer/footer.js";
import StartPage from "../pages/startpage/startpage";
import SearchPage from "../pages/searchpage/searchpage";

function App() {
  useEffect(() => {
    // diaryDeleteAPI()
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/movie/start" element={<StartPage />} />
          <Route path="/movie/start/search" element={<SearchPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
