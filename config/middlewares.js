module.exports = [
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        directives: {
          "connect-src": [
            "'self'",
            "https:",
            "blob:",
            "https://fs.impact-media.eu",
            "https://dl.airtable.com",
          ],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            `https://fs.impact-media.eu`,
            "https://dl.airtable.com",
            `strapi.io`,
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            `https://fs.impact-media.eu`,
            "https://dl.airtable.com",
            `strapi.io`,
          ],
          "default-src": [
            "'self'",
            "data:",
            "blob:",
            `https://fs.impact-media.eu`,
            "https://dl.airtable.com",
            `strapi.io`,
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  "strapi::cors",
  "strapi::poweredBy",
  /*   {
    name: "strapi::cors",
    config: {
      enabled: true,
      headers: "*",
      origin: [
        "https://backend.impact-media.eu",
        "https://fs.impact-media.eu",
        "http://localhost:1337",
      ],
    },
  }, */

  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
