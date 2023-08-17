import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import mainStore from './redux/index.js'
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={mainStore}>
    <App/>
    </Provider>
  </React.StrictMode>,
)
