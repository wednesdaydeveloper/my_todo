import React from 'react';

import TodoAddContainer from '../containers/TodoAdd.js';
import TodoListContainer from '../containers/TodoList.js';
import Footer from '../components/Footer.jsx';



const Todo = () => (
	<div>
		<TodoAddContainer />
		<TodoListContainer />
		<Footer />
	</div>
);

export default Todo;
