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

export const PictureRender = ({ pictures }) => {
      const loadedImages = pictures.map((picture, index) => {
            return (
                  <img
                        src={picture}
                        ket={index}
                        style={{
                              margin: "-2px",
                              width: "auto",
                              height: "auto",
                        }}
                  ></img>
            );
      });
      return (
            <div
                  style={{
                        display: "flex",
                        flexWrap: "wrap",
                        width: "200%",
                        height: "auto",
                  }}
            >
                  {loadedImages}
            </div>
      );
};
