import Title from './components/Title'
import Input from './components/Input'

const App = () => {
	const template = `
		<div class='wrapper'>
			${Title('My TODO App')}
			${Input()}
		</div>
	`
	return template
};

export default App
