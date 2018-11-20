import React from "react";
import { RichText, Date, Link } from "prismic-reactjs";
import { Client, linkResolver } from "./prismic";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidUpdate() {
    if (this.state.product) window.prerenderReady = true;
  }

  componentDidMount() {
    Client.getByUID("product", this.props.computedMatch.params.uid)
      .then(product => this.setState({ product }))
      .catch(error => console.error(error));
  }

  render() {
    return (
      <div>
        {RichText.render(this.state.product.data.product_name, linkResolver)}
        {RichText.render(
          this.state.product.data.product_description,
          linkResolver
        )}
        <img src={this.state.product.data.product_illustration.url} />
      </div>
    );
  }
}
