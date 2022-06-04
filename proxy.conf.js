const PROXY_CONFIG = [
  {
    context: [
      '/apisecure/**'
    ],
    target: "https://localhost:8080",
    secure: false
  }
]

module.exports = PROXY_CONFIG;
