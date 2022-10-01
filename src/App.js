import { BrowserRouter as Router } from 'react-router-dom'
import AnimatedRoutes from './components/AnimatedRoutes.js'
import Navbar from './components/Navbar'
import Footer from './components/Footer.js'
import { useLocationStore } from './data/stores/LocationStore.tsx'
// import { motion, AnimatePresence } from 'framer-motion'
import './App.css'

function App() {
	let subdomain
	let current
	const locations = useLocationStore((state) => state.locations)
	const host = window.location.host
	const hostarr = host.split('.').slice(0, host.includes('localhost') ? -1 : -2)
	if (hostarr.length > 0) {
		subdomain = hostarr[0]
		let filtered = locations.filter(
			(location) => location.routerLink === subdomain
		)
		current = filtered[0]
	}
	return (
		<div className='App'>
			<div className='w-screen h-screen'>
				<Router>
					<Navbar />
					<AnimatedRoutes />
					{current ? <Footer current={current} /> : <div></div>}
				</Router>
			</div>
		</div>
	)
}

export default App
