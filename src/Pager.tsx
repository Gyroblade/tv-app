import React from 'react';

const calculateRange = (pageNumber, pagesCount, radiusSize) => {
  const start = pageNumber - radiusSize;
  if (start < 1) {
    return {
      start: 1,
      stop: Math.min(2 * radiusSize + 1, pagesCount),
    };
  }
  const stop = pageNumber + radiusSize;
  if (stop > pagesCount) {
    return {
      start: Math.max(1, pagesCount - 2 * radiusSize),
      stop: pagesCount,
    };
  }
  return { start, stop };
};

const pagerStyle = {
  padding: "8px 4px",
};

const buttonStyle = {
  margin: "2px",
  padding: "5px 10px",
  border: "1px solid",
  borderRadius: "3px",
  textDecoration: "none",
  fontFamily: "Arial",
  fontSize: "16px",
  cursor: "pointer",
};

const selectedButtonStyle = {
  ...buttonStyle,
  borderColor: "black",
  backgroundColor: "grey",
  color: "white",
};
const defaultButtonStyle = {
  ...buttonStyle,
  borderColor: "black",
  backgroundColor: "white",
  color: "black",
};

const Button = ({ value, selected, children, onClick }) => {
  const buttonStyle = selected ? selectedButtonStyle : defaultButtonStyle;
  const handleClick = () => {
    if (!selected) {
      onClick(value);
    }
  };
  return (
    <a href="/#" style={buttonStyle} onClick={handleClick}>
      {children}
    </a>
  );
};

const Pager = ({ pageNumber, pagesCount, radiusSize, onPageClick }) => {
  const range = calculateRange(pageNumber, pagesCount, radiusSize);
  const buttons = [] as any;
  for (let i = range.start; i <= range.stop; ++i) {
    buttons.push(
      <Button
        key={i}
        value={i}
        selected={i === pageNumber}
        onClick={onPageClick}
      >
        {i}
      </Button>
    );
  }
  return (
    <div style={pagerStyle}>
      <Button value={1} selected={pageNumber === 1} onClick={onPageClick}>
        First
      </Button>
      {buttons}
      <Button
        value={pagesCount}
        selected={pageNumber === pagesCount}
        onClick={onPageClick}
      >
        Last
      </Button>
    </div>
  );
};

export default Pager;