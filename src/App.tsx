import React from "react";
import Tv from "./Tv";
import Pager from "./Pager";
import "./Style.css";

function App() {
  const [currentPageNumber, SetCurrentPageNumber] = React.useState(1);
  const [pagesCount, setPagesCount] = React.useState(1);
  const handlePageClick = (currentPageNumber) => {
    SetCurrentPageNumber(currentPageNumber);
    window.scrollTo(0, 0);
  };
  return (
    <div className="App">
      <Tv currentPageNumber={currentPageNumber} setPagesCount={setPagesCount} />
      <div id="pager">
        <Pager
          pageNumber={currentPageNumber}
          pagesCount={pagesCount}
          radiusSize={5}
          onPageClick={handlePageClick}
        />
      </div>
    </div>
  );
}

export default App;