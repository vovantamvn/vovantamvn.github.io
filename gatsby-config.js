module.exports = {
    siteMetadata: {
        siteUrl: `https://vovantamvn.github.io`,
        title: `Tâm's Blog`,
        description: `Đây là blog chia sẻ kiến thức`,
        author: `Võ Văn Tâm`,
    },
    plugins: [
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-image`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        `gatsby-plugin-gatsby-cloud`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `markdown-pages`,
                path: `${__dirname}/src/markdown-pages`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/markdown-pages`,
                name: `markdown-pages`,
            },
        },
        `gatsby-transformer-remark`,
        {
          resolve: `gatsby-plugin-google-gtag`,
          options: {
            // You can add multiple tracking ids and a pageview event will be fired for all of them.
            trackingIds: [
              "G-M0EM3PWHD1", // Google Analytics / GA
              "AW-CONVERSION_ID", // Google Ads / Adwords / AW
              "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
            ],
          },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
