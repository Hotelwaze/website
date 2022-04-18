module.exports = {
  reactStrictMode: true,
  env: {
    apiUrl: process.env.API_URL,
    apiUrlProd: process.env.API_URL_PROD
  },
  images: {
    domains: [
        'staging.api.hotelwaze.com',
        'api2.hotelwaze.com',
        'localhost'
    ],
  },
}
