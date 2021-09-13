const path = require("path");
const pathPrefix = "/";
const siteMetadata = {
  title: "Everything I Know by Owen",
  shortName: "Wiki",
  description:
    "Personal wiki, share everything I learned, and spend a lifetime updating it. I hope it'll be a good gift for my grandchildren.",
  twitterName: "theowenyoung",
  imageUrl: "/graph-visualisation.jpg",
  siteUrl: "https://wiki.owenyoung.com",
};
module.exports = {
  siteMetadata,
  pathPrefix,
  flags: {
    DEV_SSR: true,
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: `${__dirname}/..`,
        ignore: [`**/\.*/**/*`],
      },
    },
    {
      resolve: "gatsby-theme-primer-wiki",
      options: {
        defaultIndexLatestPostCount: 15,
        nav: [
          {
            title: "Latest",
            url: "/latest/",
          },
          {
            title: "Now",
            url: "/now/",
          },
          {
            title: "Twitter",
            url: "https://twitter.com/theowenyoung",
          },
          {
            title: "Blog",
            url: "https://blog.owenyoung.com/",
          },
        ],
        editUrl: "https://github.com/theowenyoung/wiki/tree/main/",
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: siteMetadata.title,
        short_name: siteMetadata.shortName,
        start_url: pathPrefix,
        background_color: `#f7f0eb`,
        display: `standalone`,
        icon: path.resolve(__dirname, "./static/logo.png"),
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: siteMetadata.siteUrl,
        sitemap: `${siteMetadata.siteUrl}/sitemap/sitemap-index.xml`,
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: ["G-76F1LR70FY"],
      },
    },
  ],
};
