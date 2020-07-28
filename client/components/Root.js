import React from "react";
import axios from "axios";
import { PictureRender } from "./PictureRender";
import InfiniteScroll from "react-infinite-scroll-component";

class Root extends React.Component {
      constructor(props) {
            super(props);

            this.state = {
                  pictures: [],
            };
      }

      componentDidMount() {
            this.loadPictures();
      }

      loadPictures = () => {
            axios.get("/api/get_img").then((res) => {
                  this.setState({
                        pictures: res.data,
                  });
            });
      };

      render() {
            const { pictures } = this.state;
            return (
                  <InfiniteScroll
                        dataLength={pictures.length}
                        next={this.loadPictures()}
                        hasMore={true}
                        loader={<h4>Loading...</h4>}
                        style={{
                              overflow: "hidden",
                        }}
                  >
                        <PictureRender pictures={pictures} />
                  </InfiniteScroll>
            );
      }
}

export default Root;
