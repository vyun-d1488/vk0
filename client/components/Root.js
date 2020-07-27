import React from "react";
import axios from "axios";
import debounce from "lodash.debounce";
import { PictureRender } from "./PictureRender";

class Root extends React.Component {
      constructor(props) {
            super(props);

            this.state = {
                  error: false,
                  hasMore: true,
                  isLoading: false,
                  pictures: [],
            };
      }
      componentDidMount() {
            window.onscroll = debounce(() => {
                  const {
                        state: { error, isLoading, hasMore },
                  } = this;

                  if (error || isLoading || !hasMore) return;

                  if (
                        window.innerHeight +
                              document.documentElement.scrollTop ===
                        document.documentElement.offsetHeight
                  ) {
                        this.loadPictures();
                  }
            }, 100);
            this.loadPictures();
      }
      loadPictures() {
            this.setState({ isLoading: true }, () => {
                  axios.get("/api/get_img").then((res) => {
                        this.setState({
                              hasMore: this.state.pictures.length < 100,
                              isLoading: false,
                              pictures: res.data,
                        });
                  });
            });
      }
      render() {
            const { error, hasMore, isLoading, pictures } = this.state;
            return (
                  <div
                        style={{
                              position: "relative",
                              overflow: "hidden",
                              width: "100%",
                        }}
                  >
                        {isLoading ? (
                              <div>Loading...</div>
                        ) : (
                              <PictureRender pictures={pictures} />
                        )}
                        {!hasMore && <div>end</div>}
                        {error && <div style={{ color: "#900" }}>{error}</div>}
                  </div>
            );
      }
}

export default Root;
