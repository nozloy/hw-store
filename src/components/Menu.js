import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu() {
	return (
		<div>
			<div className='flex flex-col mt-10 py-5 my-5 mx-3 neo rounded-xl bg-white'>
				<Link to={{ pathname: '/catalog/smartphones' }}>
					<button className='menu'>Смартфоны</button>
				</Link>
				<Link to={{ pathname: '/catalog/notebooks' }}>
					<button className='menu'>Ноутбуки</button>
				</Link>
				<Link to={{ pathname: '/catalog/tablets' }}>
					<button className='menu'>Планшеты</button>
				</Link>
				<Link to={{ pathname: '/catalog/wearables' }}>
					<button className='menu'>Носимые устройства</button>
				</Link>
				<Link to={{ pathname: '/catalog/audio' }}>
					<button className='menu'>Аудио</button>
				</Link>
				<Link to={{ pathname: '/catalog/vision' }}>
					<button className='menu'>Vision</button>
				</Link>
			</div>
		</div>
	)
}
