import TodoList from './pages/ListPage';

function TodoFeature() {
	const data = [
		{ id: 1, title: 'Learn', name: 'Learn' },
		{ id: 2, title: 'Eat', name: 'Eat' },
		{ id: 3, title: 'Sleep', name: 'Sleep' },
	];

	return (
		<div>
			<h3>Todo List</h3>
			<TodoList todoList={data} />
		</div>
	);
}

export default TodoFeature;
