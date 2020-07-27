import React from "react";

export const PictureRender = ({ pictures }) => {
      const loadedImages = pictures.map((picture, index) => {
            return (
                  <div
                        style={{
                              overflow: "hidden",
                        }}
                  >
                        <img
                              src={picture}
                              key={index}
                              style={{
                                    width: "200px",
                                    height: "200px",
                              }}
                        ></img>
                  </div>
            );
      });
      return (
            <div
                  style={{
                        display: "flex",
                        flexWrap: "wrap",
                        width: "200%",
                        height: "auto",
                        overflow: "hidden",
                  }}
            >
                  {loadedImages}
            </div>
      );
};
