const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

const { URL_MFE_ORDER, URL_MFE_PRODUCT } = process.env
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
  images: {
    domains: ['catalogo.movistar.com.pe']
  },
  webpack: (config, options) => {
    config.experiments = { topLevelAwait: true, layers: true };
    const { isServer } = options
    config.plugins.push(
      new NextFederationPlugin({
        name: 'app_main',
        filename: 'static/chunks/app-main.js',
        remotes: {
          'mfe-product': `mfe_product@${URL_MFE_PRODUCT}/_next/static/${isServer ? 'ssr' : 'chunks'}/mfe-product.js`,
          'mfe-order': `mfe_order@${URL_MFE_ORDER}/_next/static/${isServer ? 'ssr' : 'chunks'}/mfe-order.js`,
        },
        exposes: {
        },
        extraOptions: {
          exposePages: true
        }
      }),
    )

    return config
  },
}

module.exports = nextConfig
