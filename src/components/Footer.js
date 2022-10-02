import React from 'react'

const Footer = ({ current }) => {
	return (
		<div className='hidden lg:flex justify-between mx-3 px-5 bg-slate-600 text-slate-50 rounded-b-xl'>
			<div className='flex-col p-5'>
				<div className='text-base font-semibold text-left pb-5'>Наш адрес:</div>
				<button className='text-base text-left'>{current.adress}</button>
			</div>
			<div className='flex-col p-5'>
				<div className='text-base font-semibold text-left pb-5'>
					Оставьте отзыв:
				</div>
				<div>
					<button className='text-base text-left'>Yandex</button>
				</div>
				<div>
					<button className='text-base text-left'>2GIS</button>
				</div>
			</div>
			<div className='flex-col p-5'>
				<div className='text-base font-semibold text-left pb-5'>Контакты</div>
				{/* <div>&nbsp;&nbsp;</div> */}
				<div>
					<button className='text-base text-left'>
						Телефон : {current.telephone}
					</button>
				</div>
				<div>
					<button className='text-base text-left'>
						E-mail : {current.email}
					</button>
				</div>
			</div>
		</div>
	)
}

export default Footer
