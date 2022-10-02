import React from 'react'
import { useParams } from 'react-router-dom'
import { useDeviceStore } from '../data/stores/DeviceStore.tsx'

const Catalog = () => {
	const { catalog } = useParams()
	const devices = useDeviceStore((state) => state.devices)
	let filtered = devices.filter((device) => device.type === catalog)
	return (
		<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 2xl:xl:grid-cols-6 gap-4 px-10 pt-5'>
			{filtered.map((device, i, arr) => {
				return (
					<div className='flex flex-col neo rounded-xl rounded-t-none p-5 mb-20 w-full lg:w-auto bg-white'>
						<div className='p-3 text-2xl font-bold text-slate-800'>
							{device.captionName}
						</div>
						<div
							// className={`mx-auto w-3/4 p-3 pt-5 ${
							// 	device.type === 'smartphones' ? 'h-56' : 'h-56'
							// } `}
							className='mx-auto h-fit p-3 pt-5'
						>
							<img src={`/img/${device.image}`} alt='img'></img>
						</div>
						<div className='grow p-3 pb-10 text-xl text-slate-600 font-semibold'>
							{device.description}
						</div>
						<div className='flex flex-row justify-between h-auto'>
							<div className='p-3 text-xl text-slate-600 font-semibold'>
								{device.price}₽
							</div>
							<button className='px-3 py-1 neo bg-red-600 text-white rounded-xl text-xl font-semibold'>
								Купить
							</button>
						</div>
					</div>
				)
			})}{' '}
		</div>
	)
}

export default Catalog
