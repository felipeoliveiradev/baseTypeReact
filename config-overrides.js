const { override, addWebpackAlias } = require("customize-cra");
const path = require('path');

const rootImport = {
    assets: path.join(__dirname, './src/assets'),
    raiz: path.join(__dirname, './src'),
    configs: path.join(__dirname, './src/configs'),
    styles: path.join(__dirname, './src/styles'),
    helper: path.join(__dirname, './src/helper'),
    pages: path.join(__dirname, './src/pages'),
    router: path.join(__dirname, './src/router'),
    components: path.join(__dirname, './src/components'),
    images: path.join(__dirname, './src/assets/images'),
    icons: path.join(__dirname, './src/assets/icons'),
}

module.exports = override(addWebpackAlias(rootImport))