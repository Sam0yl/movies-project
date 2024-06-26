import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './layout/App.jsx'
import './index.css'
import 'materialize-css/dist/css/materialize.css'
import Header from './layout/Header.jsx'
import Footer from './layout/Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <App />
    <Footer />
  </React.StrictMode>,
)
