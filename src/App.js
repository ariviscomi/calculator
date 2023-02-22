import './styles/css/style.css';

function App() {
	return (
		<main id='calcContainer'>
			<textarea className='textarea' rows="3" cols="15" />
			<section id='numContainer'>
				<span>9</span>
				<span>8</span>
				<span>7</span>
				<span>6</span>
				<span>5</span>
				<span>4</span>
				<span>3</span>
				<span>2</span>
				<span>1</span>
				<span>0</span>
				<span>,</span>
			</section>
			<section id='controlContainer'>
				<span>←</span>
				<span>÷</span>
				<span>x</span>
				<span>-</span>
				<span>+</span>
				<span>=</span>
			</section>
		</main>
	);
}

export default App;
