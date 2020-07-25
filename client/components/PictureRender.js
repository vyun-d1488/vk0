import React from "react";
import LazyLoad from "react-lazyload";

export const LoadingSpinner = () => {
      return (
            <div
                  style={{
                        margin: "200px auto",
                        justifyContent: "center",
                        textAlign: "center",
                  }}
            >
                  <img
                        src="https://i.gifer.com/g0R5.gif"
                        style={{ width: "100px" }}
                  ></img>
            </div>
      );
};

export const PictureRender = ({ images }) => {
      const loadedImages = images.map((image, index) => {
            return (
                  <LazyLoad
                        key={index}
                        height={100}
                        offset={[-100, 100]}
                        placeholder={<LoadingSpinner />}
                  >
                        <img
                              src={image ? image.x : ""}
                              style={{
                                    maxWidth: "100%",
                                    maxHeight: "100%",
                                    display: "block",
                              }}
                        ></img>
                  </LazyLoad>
            );
      });
      return (
            <div style={{ display: "flex", flexWrap: "wrap", width: "990px" }}>
                  {loadedImages}
            </div>
      );
};
