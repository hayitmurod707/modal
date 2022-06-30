import { useState } from 'react';
import Modal from './Modal';
const App = () => {
	const [visible, setVisible] = useState(false);
	return (
		<div className='App'>
			<button onClick={() => setVisible(!visible)}>open</button>
			<Modal
				onClose={() => setVisible(!visible)}
				visible={visible}
				size={'small, medium, large, extra-large'}>
				<h1>Modal</h1>
				<h1>Modal</h1>
				<h1>Modal</h1>
				<h1>Modal</h1>
				<h1>Modal</h1>
				<h1>Modal</h1>
				<h1>Modal</h1>
				<h1>Modal</h1>
				<h1>Modal</h1>
				<h1>Modal</h1>
				<h1>Modal</h1>
				<h1>Modal</h1>
				<h1>Modal</h1>
				<h1>Modal</h1>
			</Modal>
		</div>
	);
};
export default App;
