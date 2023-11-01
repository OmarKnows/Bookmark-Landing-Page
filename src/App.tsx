import React from 'react';
import { Button } from './components/ui/button';
import Header from './components/Header';

const App = () => {
	return (
		<div className='bg-g'>
			<Header />
			<Button>test</Button>
			<Button variant={'primary'}>get it on chrome</Button>
			<Button variant={'secondary'}>test</Button>
		</div>
	);
};

export default App;
