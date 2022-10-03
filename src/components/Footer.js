import React from 'react'

const Footer = ({ current }) => {
	return (
		<div>
			<div className='flex flex-col lg:flex-row lg:justify-between mx-3 px-5 bg-slate-600 text-slate-50 rounded-b-xl'>
				<div className='flex flex-col pt-5 p-2 lg:p-5'>
					<div className='text-base font-semibold text-left pb-1 lg:pb-5'>
						Наш адрес:
					</div>
					<button className='text-base mr-auto'>{current.adress}</button>
				</div>
				<hr className='lg:hidden' />
				<div className='flex flex-col p-2 lg:p-5'>
					<div className='text-base font-semibold text-left pb-1 lg:pb-5'>
						Оставьте отзыв:
					</div>
					<button className='text-base mr-auto'>Yandex</button>
					<button className='text-base mr-auto'>2GIS</button>
				</div>
				<hr className='lg:hidden' />
				<div className='flex flex-col p-2 lg:p-5'>
					<div className='text-base font-semibold text-left pb-1 lg:pb-5'>
						Контакты
					</div>
					{/* <div>&nbsp;&nbsp;</div> */}
					<button className='text-base mr-auto'>
						Телефон : {current.telephone}
					</button>
					<button className='text-base mr-auto'>
						E-mail : {current.email}
					</button>
				</div>
			</div>
			<div className='py-5 text-slate-400'>
				HW-SHOP.RU© 2022 Все права принадлежат их владельцам.
			</div>
		</div>
	)
}

export default Footer
