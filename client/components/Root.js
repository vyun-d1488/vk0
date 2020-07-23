import React from "react";
import axios from "axios";
import { PictureRender, LoadingSpinner } from "./PictureRender";

class Root extends React.Component {
      constructor(props) {
            super(props);
            this.state = {
                  pics: [],
            };
      }
      componentDidMount() {
            axios.get("/api/get_img").then((res) => {
                  this.setState({ pics: res.data });
            });
      }

      render() {
            return this.state.pics.length === 0 ? (
                  <LoadingSpinner />
            ) : (
                  <PictureRender images={this.state.pics} />
            );
      }
}

export default Root;
