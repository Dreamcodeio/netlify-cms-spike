import PrismicLib from "prismic-javascript";
import PrismicConfig from "./prismic-configuration.json";

const options = {
  accessToken: PrismicConfig.accessToken
};
export const Prismic = PrismicLib.client(PrismicConfig.apiEndpoint, options);

export const linkResolver = doc => {
  if (doc.type === "homepage") return "/";
  else if (doc.type === "products") return "/products";
  else if (doc.type === "product") return "/products/" + doc.uid;
  else if (doc.type === "blog_home") return "/blog";
  else if (doc.type === "blog_post") return "/blog/" + doc.uid;
  else return "/";
};
