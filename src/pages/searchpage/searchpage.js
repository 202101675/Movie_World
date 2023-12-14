import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./searchpage.css";

const SearchPage = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const handleSearch = () => {
    // 검색어가 비어 있으면 검색을 실행하지 않음
    if (searchText.trim() === "") {
      return;
    }

    const staticSearchResults = [
      { id: 1, title: "Gangs of New York", year: 2002, genre: "스릴러" },
      {
        id: 2,
        title: "Home Alone 2: Lost in New York",
        year: 1992,
        genre: "코미디",
      },
      { id: 3, title: "Escape from New York", year: 1981, genre: "SF" },
      { id: 4, title: "Synecdoche, New York", year: 2008, genre: "코미디" },
      {
        id: 5,
        title: "A Rainy Day in New York",
        year: 2019,
        genre: "로맨틱 코미디",
      },
      {
        id: 6,
        title: "New York, I Love You",
        year: 2008,
        genre: "로맨틱 코미디",
      },
      { id: 7, title: "King of New York", year: 1990, genre: "공포" },
      {
        id: 8,
        title: "67th Street, New York, NY",
        year: 2011,
        genre: "스릴러",
      },
      { id: 9, title: "Autumn in New York", year: 2000, genre: "액션" },
      { id: 10, title: "New York Minute", year: 2004, genre: "로맨스" },
    ];

    const filteredResults = staticSearchResults.filter((result) =>
      result.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setSearchResult(filteredResults);
  };

  const goToStartPage = () => {
    navigate("/");
  };

  return (
    <div className="search-page">
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="검색어를 입력하세요"
      />
      <button onClick={handleSearch}>검색</button>
      {searchResult.length > 0 && (
        <div className="search-results">
          {searchResult.map((result) => (
            <div key={result.id} className="result-item">
              <img src="input.png" alt={result.title} />
              <div className="result-text">
                <p>{result.title}</p>
                <p>{result.year}</p>
                <p>{result.genre}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      {searchResult.length === 0 && searchText.length > 0 && (
        <p>검색 결과가 없습니다.</p>
      )}
      <button onClick={goToStartPage} className="go-back-button">
        돌아가기
      </button>
    </div>
  );
};

export default SearchPage;
