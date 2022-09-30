import React from 'react'
import { Route, Routes, useLocation, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import { AnimatePresence } from 'framer-motion'
import NotFound from './NotFound'
import Catalog from '../pages/Catalog'

const AnimatedRoutes = () => {
	const location = useLocation()

	return (
		<AnimatePresence mode='wait'>
			<Routes location={location} key={location.pathname}>
				<Route path='/' element={<Navigate to='/home' replace />} />
				<Route path='/home' element={<Home />} />
				<Route path='*' element={<NotFound />} />
				<Route path='/catalog/:catalog' element={<Catalog />} />
			</Routes>
		</AnimatePresence>
	)
}

export default AnimatedRoutes
