import React from 'react';

export default class TodoList extends React.Component {
	_onDeleteToDo(i){
	  this.props.onDelToDo(i);
	}
	toDate(date) {
	  return date === null ? "" : date.toLocaleString();
	}

	render () {
		return (
			<ul>
				{this.props.todos.map((todo,i)=>{
					if(todo.flag){
						return  <li key={i} onClick={this._onDeleteToDo.bind(this,i )}>
						    <div>
								<p>{todo.todo}</p>
								<p>{this.toDate(todo.createAt)}</p>
						    </div>
						  </li>
					} else {
						return <li key={i}>
						    <div>
						      <s>
                    			<p>{todo.todo}</p>
								<p>{this.toDate(todo.deleteAt)}</p>
						      </s>
						    </div>
						  </li>
					}
				})}
			</ul>
		)
	}
}
