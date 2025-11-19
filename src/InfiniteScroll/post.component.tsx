import React, { useEffect } from "react";
import "./style.css";
const Post = ({ data, setPage }) => {
  useEffect(() => {
    const imageObserver = new IntersectionObserver(
      (params) => {
        if (params[0].isIntersecting && lastImage) {
          imageObserver.unobserve(lastImage);
          setPage((page: number) => page + 1);
        }
      },
      { threshold: 0.5 }
    );
    const lastImage = document.querySelector(".image-post:last-child");
    if (!lastImage) return;
    imageObserver.observe(lastImage);
    return () => {
      imageObserver.unobserve(lastImage);
      imageObserver.disconnect();
    };
  }, [data]);
  return (
    <div className="image-grid">
      {data.map((item, index) => {
        return (
          <img className="image-post" key={item.id} src={item.download_url} />
        );
      })}
    </div>
  );
};

export default Post;
