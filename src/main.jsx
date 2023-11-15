import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './styles.css'
import { AnimeApp } from './AnimeApp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<AnimeApp />
		</BrowserRouter>
	</React.StrictMode>,
)
