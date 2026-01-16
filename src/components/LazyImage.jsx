import React from "react";

const LazyImage = ({ src, title }) => {
  return (
    <img
      loading="lazy"
      src={src}
      alt={title}
      className="w-full h-56 object-cover object-center hover:scale-105 transition duration-300"
    />
  );
};

export default LazyImage;
