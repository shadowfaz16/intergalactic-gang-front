import React from "react";

const Thumbnail = (url, alt) => {
  return (
    <>
      <img
        src={url}
        alt={alt}
        className="rounded-md w-14 h-14 hover:scale-95 hover:shadow-md hover:shadow-slate-500 hover:cursor-pointer"
        // onClick={() => setBackground(Cyan)}
      />
    </>
  );
};

export default Thumbnail;
