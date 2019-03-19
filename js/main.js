//alert('hello');
let todos = [ 'Bring Vegges', 'bring kitkat', 'bring chocolate' ];

function renderList() {
	let todoHtml = '';

	for (let i = 0; i < todos.length; i++) {
		todoHtml += ` <li class="list-group-item">${todos[i]}</li>`;
	}
	document.getElementById('todoList').innerHTML = todoHtml;
}

renderList();

document.getElementById('addTodo').addEventListener('submit', function(e) {
	e.preventDefault();
	todos.push(e.target.todoItem.value);
	renderList();
});
