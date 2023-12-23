import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ThemeProvider from './Context/ThemeContext.jsx'
import AllCoinsContextProvider from './Context/AllCoinsContext.jsx'
import UserProvider from './Context/UserContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <UserProvider>
    <AllCoinsContextProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </AllCoinsContextProvider>
  </UserProvider>
)
