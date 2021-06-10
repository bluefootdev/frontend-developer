const express = require('express')
const morgan = require('morgan')
const { createProxyMiddleware } = require('http-proxy-middleware')

// Create Express Server
const app = express()

// Configuration
const PORT = 3001
const HOST = 'localhost'
const API_SERVICE_URL = 'http://agenciabluefoot.vtexcommercestable.com.br'

// Logging
app.use(morgan('dev'))

// Info GET endpoint
app.get('/info', (req, res, next) => {
  res.send('This is a proxy service which proxies to JSONPlaceholder API.')
})

// Authorization
app.use('', (req, res, next) => {
  if (req.headers.authorization) {
    next()
  } else {
    res.sendStatus(403)
  }
})

// Proxy endpoints
app.use('/api', createProxyMiddleware({
  target: `${API_SERVICE_URL}/api`,
  changeOrigin: true,
  pathRewrite: {
    [`^/api`]: '',
  },
}))

app.use('/buscaautocomplete', createProxyMiddleware({
  target: `${API_SERVICE_URL}/buscaautocomplete`,
  changeOrigin: true,
  pathRewrite: {
    [`^/buscaautocomplete`]: '',
  },
}))

// Start Proxy
app.listen(PORT, HOST, () => {
  console.log(`Starting Proxy at ${HOST}:${PORT}`)
})
