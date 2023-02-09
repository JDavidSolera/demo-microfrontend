const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    "@phoenix/design-system",
    "@phoenix/core",
    "@phoenix/utils",
    "@phoenix/hooks",
  ],
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["catalogo.movistar.com.pe"],
  },
  webpack: (config) => {
    config.experiments = { topLevelAwait: true };
    // const { isServer } = options
    config.plugins.push(
      new NextFederationPlugin({
        name: "mfe_order",
        filename: "static/chunks/mfe-order.js",
        exposes: {
          "./OrderDetail": "./src/components/OrderDetail.tsx",
        },
        extraOptions: {
          exposePages: true,
        },
      })
    );

    return config;
  },
};

module.exports = nextConfig;
