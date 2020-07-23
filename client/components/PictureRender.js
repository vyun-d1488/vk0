import React from "react";
import LazyLoad from "react-lazyload";

export const LoadingSpinner = () => {
      return (
            <img src="https://thumbs.gfycat.com/ElasticHalfAbyssiniancat-size_restricted.gif"></img>
      );
};

export const PictureRender = ({ images }) => {
      return images.map((image, index) => {
            return (
                  <LazyLoad key={index} placeholder={<LoadingSpinner />}>
                        <div key={index}>
                              <img src={image ? image.x : ""}></img>
                        </div>
                  </LazyLoad>
            );
      });
};
