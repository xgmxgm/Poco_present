import { Header } from '../widgets/header'

function App() {
	return (
		<>
			<div className='flex flex-col items-center'>
				<Header />
				<div className='bg-black flex justify-center w-full py-4'>
					<div className='w-4/5 flex justify-between items-center'>
						<div className='flex gap-5 items-end'>
							<span className='font-bold text-2xl'>POCO X6 Pro</span>
							<span className='text-custom-gray'>POCO X6</span>
						</div>
						<div className='flex items-center gap-5'>
							<a href='' className='text-custom-gray'>
								Overview
							</a>
							<a href='' className='text-custom-gray'>
								Specs
							</a>
							<a href='' className='bg-amber-300 text-black px-3 py-1'>
								Buy Now
							</a>
						</div>
					</div>
				</div>
				<main>hello world</main>
			</div>
		</>
	)
}

export default App
