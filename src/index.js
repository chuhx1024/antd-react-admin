import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import './style/index.less'
import App from './App'

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root'),
)
