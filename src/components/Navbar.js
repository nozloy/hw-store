import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Navbar = () => {
	return (
		<div className='pt-5 pb-5'>
			<motion.div
				initial={{ y: -100, zIndex: -1 }}
				animate={{ y: 0, zIndex: 1 }}
				exit={{ y: window.innerWidth }}
				transition={{ delay: 0.1, type: 'spring', ease: 'easeOut' }}
			>
				<div className='flex justify-between '>
					<Link to={{ pathname: '/home' }}>
						<button className='h-12 ml-4 rounded-xl p-3 pr-0 text-2xl font-bold'>
							HW-SHOP.
						</button>
						<button className='h-12 rounded-xl pt-3 text-2xl font-bold text-red-600'>
							RU
						</button>
					</Link>
					<div className='hidden lg:block p-0 m-0'>
						<Link to={{ pathname: '/catalog/smartphones' }}>
							<button data-text='Смартфоны' className='navbar'>
								Смартфоны
							</button>
						</Link>
						<Link to={{ pathname: '/catalog/notebooks' }}>
							<button className='navbar'>Ноутбуки</button>
						</Link>
						<Link to={{ pathname: '/catalog/tablets' }}>
							<button className='navbar'>Планшеты</button>
						</Link>
						<Link to={{ pathname: '/catalog/wearables' }}>
							<button className='navbar'>Носимые устройства</button>
						</Link>
						<Link to={{ pathname: '/catalog/audio' }}>
							<button className='navbar'>Аудио</button>
						</Link>
						<Link to={{ pathname: '/catalog/vision' }}>
							<button className='navbar'>Vision</button>
						</Link>
					</div>
					<a href='https://appgallery.huawei.com/#/Featured'>
						<button className=' w-12 h-12 mr-4 rounded-xl neo'>
							<img className='w-10 mx-auto' src={'/Logo.png'} alt='logo'></img>
						</button>
					</a>
				</div>
			</motion.div>
		</div>
	)
}

export default Navbar
