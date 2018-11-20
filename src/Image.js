import React, { Component } from "react";
import Prismic from "prismic-javascript";
import { Link, RichText, Date } from "prismic-reactjs";

class Image extends Component {
  state = {
    doc: null
  };

  componentWillMount() {
    const apiEndpoint = "https://netlify-cms-spike.prismic.io/api/v2";

    Prismic.api(apiEndpoint).then(api => {
      api
        .query(Prismic.Predicates.at("document.type", "image"))
        .then(response => {
          if (response) {
            this.setState({ doc: response.results[0] });
          }
        });
    });
  }

  render() {
    console.log("this.state:::", this.state);

    if (this.state.doc) {
      const document = this.state.doc.data;
      return (
        <div className="content">
          <img
            alt=""
            src={document.image.url}
            style={{
              with: document.image.dimensions.width,
              height: document.image.dimensions.height
            }}
          />
          <h5>{RichText.asText(document.image_text)}</h5>
        </div>
      );
    }
    return <h1>Loading image from prismic...</h1>;
  }
}

export default Image;
