import { type FC } from 'react'

const phoneModels: string[] = [
	'POCO F9 Ultra',
	'POCO F9 Pro',
	'POCO X8',
	'POCO X8 Pro Max',
	'POCO X8 Pro',
	'POCO M8 Pro 5G',
	'POCO M8 5G',
	'ALL PRODUCTS',
]

export const Header: FC = () => {
	return (
		<header className='flex gap-10 w-4/5'>
			<div>
				<img src='./logo.svg' />
			</div>
			<div className='flex flex-col w-full'>
				<div className='flex justify-between items-center gap-5 my-4 text-[12px]'>
					<div className='flex justify-center items-center gap-5'>
						<a href='' className='hover:text-amber-300 transition-all'>
							GLOBAL
						</a>
						<a href='' className='hover:text-amber-300 transition-all'>
							POCO COMMUNITY
						</a>
					</div>
					<div className='flex justify-center items-center gap-5'>
						<a href='' className='hover:text-amber-300 transition-all'>
							SIGN IN
						</a>
						<a href='' className='hover:text-amber-300 transition-all'>
							SIGN UP
						</a>
					</div>
				</div>
				<div className='my-8'>
					<ul className='flex justify-between text-custom-gray font-bold cursor-default'>
						{phoneModels.map(phone => (
							<li className='hover:text-amber-300 transition-all'>
								<a href=''>{phone}</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</header>
	)
}
