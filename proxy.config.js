const proxyConfig = {
  '/api': {
    target: 'https://api.mapacovid19.com/api/v1/api',
    secure: false,
    pathRewrite: {
      '^/api': ''
    }
  }
}

module.exports = proxyConfig;
