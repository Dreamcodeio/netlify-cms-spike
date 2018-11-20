import React, { Component } from "react";
import Prismic from "prismic-javascript";
import { Link, RichText, Date } from "prismic-reactjs";

class Product extends Component {
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
        .query(Prismic.Predicates.at("document.type", "page"))
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
          <h1>{RichText.asText(document.title)}</h1>
          <img alt="cover" src={document.image.url} />
          {RichText.render(document.description, this.linkResolver)}
        </div>
      );
    }
    return <h1>Loading...</h1>;
  }

  // componentDidUpdate() {
  //   if (this.state.product) window.prerenderReady = true;
  //   console.log("componentDidUpdate::", this.state);
  // }

  // componentDidMount() {
  //   Client.getByUID("product", this.props.computedMatch.params.uid)
  //     .then(product => this.setState({ product }))
  //     .catch(error => console.error(error));

  //   console.log("componentDidMount::", this.state);
  // }

  // render() {
  //   return (
  //     <div>
  //       {RichText.render(this.state.product.data.product_name, linkResolver)}
  //       {RichText.render(
  //         this.state.product.data.product_description,
  //         linkResolver
  //       )}
  //       <img src={this.state.product.data.product_illustration.url} />
  //     </div>
  //   );
  // }
}

export default Product;
