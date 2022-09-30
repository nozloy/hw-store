import React from 'react'
import { motion } from 'framer-motion'

const Banner = () => {
	return (
		<div className='mx-3 mt-10 neo rounded-xl max-w-full'>
			<div className='flex flex-col lg:flex-row m-5 p-5 pb-0 mb-0 lg:m-10 lg:p-10 lg:pb-0 lg:mb-0'>
				<div className='flex flex-col'>
					<div className='flex flex-row justify-center'>
						<div className='text-3xl lg:text-5xl font-bold'>Huawei</div>
						<div className='text-3xl lg:text-5xl font-medium pl-2'>
							MatePad 11
						</div>
					</div>
					<div className='py-5 my-auto'>
						<div className='lg:text-2xl'>Частота обновления экрана 120Гц</div>
						<div className='lg:text-2xl'>Безрамочный экран HUAWEI FullView</div>
						<div className='lg:text-2xl'>Стилус HUAWEI M-Pencil</div>
					</div>
				</div>
				{/* <div className='text-5xl font-medium'>MatePad 11</div> */}
				<div className='flex-1 relative justify-end'>
					<motion.div
						initial={{ x: '10%', zIndex: 30 }}
						animate={{ x: 0, zIndex: 30 }}
						transition={{ delay: 0.8, type: 'spring', ease: 'easeOut' }}
					>
						<img
							src='img/HUAWEI-MatePad-11-1@2x.webp'
							alt='img'
							className='z-30 w-2/3 h-auto mx-auto scale-75'
						></img>
					</motion.div>

					<motion.div
						initial={{ x: '-10%', y: '-70%', zIndex: 20 }}
						animate={{ x: '10%', y: '-50%', zIndex: 20 }}
						transition={{ delay: 0.8, type: 'spring', ease: 'easeOut' }}
					>
						<img
							src='img/HUAWEI-MatePad-11-2@2x.webp'
							alt='img'
							className='z-20 w-2/3 h-auto mx-auto scale-125'
						></img>
					</motion.div>
				</div>
			</div>
			<div className='p-10'>
				<button className='px-3 py-2 rounded-lg bg-red-600 text-white font-semibold'>
					Подробнее
				</button>
			</div>
		</div>
	)
}

export default Banner
