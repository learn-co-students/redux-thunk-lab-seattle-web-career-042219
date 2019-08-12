import React from "react";

function catList({ catPics }) {
  return (
    <div>
      {catPics &&
        catPics.map((catPic, index) => {
          return <img key={index} src={catPic.url} alt="catPic" />;
        })}
    </div>
  );
}

export default catList;
