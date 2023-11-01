import logo from '../assets/logo-bookmark.svg';
import { Button } from './ui/button';

const Header = () => {
	return (
		<div className='flex justify-between items-center px-6 py-12'>
			<div>
				<img src={logo} />
			</div>
			<div className='flex items-center gap-12 text-gray-600 '>
				<a className='hover:text-softred' href='#'>
					FEATURES
				</a>
				<a className='hover:text-softred' href='#'>
					PRICING
				</a>
				<a className='hover:text-softred' href='#'>
					CONTACT
				</a>
				<Button variant={'secondary'}>LOGIN</Button>
			</div>
		</div>
	);
};

export default Header;
