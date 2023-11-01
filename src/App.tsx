import React from 'react';
import { Button } from './components/ui/button';

const App = () => {
	return (
		<div className='bg-g'>
			<Button>test</Button>
			<Button variant={'primary'}>get it on chrome</Button>
			<Button variant={'secondary'}>test</Button>
		</div>
	);
};

export default App;
