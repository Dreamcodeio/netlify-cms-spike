import React, { Component } from "react";
import Prismic from "prismic-javascript";
import { Link, RichText, Date } from "prismic-reactjs";
import Image from "./Image";

class Page extends Component {
  state = {
    doc: null
  };

  // Link Resolver
  linkResolver(doc) {
    // Define the url depending on the document type
    if (doc.type === "page") {
      return "/page/" + doc.uid;
    } else if (doc.type === "blog_post") {
      return "/blog/" + doc.uid;
    }

    // Default to homepage
    return "/";
  }

  componentWillMount() {
    const apiEndpoint = "https://netlify-cms-spike.prismic.io/api/v2";

    Prismic.api(apiEndpoint).then(api => {
      api
        .query(Prismic.Predicates.at("document.type", "page2"))
        .then(response => {
          if (response) {
            this.setState({ doc: response.results[0] });
          }
        });
    });
  }

  render() {
    if (this.state.doc) {
      const document = this.state.doc.data;
      return (
        <div>
          {RichText.render(document.title, this.linkResolver)}
          <br />
          {RichText.render(document.body_content, this.linkResolver)}
          <br />
          <br />
          <br />
          <Image />
        </div>
      );
    }
    return <h1>Loading page from prismic...</h1>;
  }
}

export default Page;
