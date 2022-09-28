import { BrowserRouter as Router } from 'react-router-dom'
import AnimatedRoutes from './components/AnimatedRoutes.js'
import Navbar from './components/Navbar'
// import { motion, AnimatePresence } from 'framer-motion'
import './App.css'

function App() {
	return (
		<div className='App'>
			<div className='w-screen h-screen'>
				<Router>
					<Navbar />
					<AnimatedRoutes />
				</Router>
			</div>
		</div>
	)
}

export default App
