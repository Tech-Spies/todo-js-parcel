import Input from "./components/Input";
import Title from "./components/Title";

const App = () => {
	const template = `
	<div class="card">
		${Title('Todo List')}
		${Input({placeholder: 'Add a todo', icon: 'far fa-calendar-plus'})}
		<div class="items">
			<h3>Lorem ipsum dolor sit amet.</h3>
		</div>
	</div>
	`
	return template
};

export default App
