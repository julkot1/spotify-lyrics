module.exports = {
  images: {
    loader: 'imgix',
    path: '',
    domains: [
      'i.scdn.co',
      'mosaic.scdn.co',
      'lineup-images.scdn.co',
      'newjams-images.scdn.co',
      'i.imgur.com',
    ],
  },
  env: {
    CLIENT_ID: '54e67f91696d428f9ac106a1ce6bbc73',
    CLIENT_SECRET: 'cf995a8bc0f545ac803b9665782ad9c9',
    REDIRECT_URI: 'http://localhost:3000/api/auth/callback',
    API_URL: 'http://localhost:3000/api/',
    NEXTAUTH_URL: 'http://localhost:3000/',
    GENIUS_ACCESS_TOKEN:
      '3snUpEiMPM4AdNo0azhNHLpLuzKdaHd1rzGFNDI11ehTXXr4uhneAC1QBqqrihdi',
  },
}
