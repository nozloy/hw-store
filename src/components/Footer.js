import React from 'react'

const Footer = ({ current }) => {
	return (
		<div className='hidden lg:flex justify-end mx-3 p-5 neo rounded-xl'>
			<div className='flex-col p-5'>
				<div className='text-xl'>Наш адресс : {current.adress}</div>
				<div>&nbsp;&nbsp;</div>
				<div className='text-xl'>Телефон : {current.telephone}</div>
				<div className='text-xl'>E-mail : {current.email}</div>
			</div>
		</div>
	)
}

export default Footer
