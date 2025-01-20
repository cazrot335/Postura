// next.config.js
module.exports = {
  async redirects() {
    return [
      {
        source: '/page',
        destination: '/',
        permanent: true,
      },
    ];
  },
};
