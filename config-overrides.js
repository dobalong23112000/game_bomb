const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
    alias({
        '@pages': 'src/pages',
        '@components': 'src/components',
        '@assets':'src/assets'
    })(config);

    return config;
};