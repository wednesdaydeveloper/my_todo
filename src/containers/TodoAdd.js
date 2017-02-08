import { connect } from 'react-redux';
import TodoAdd from '../components/TodoAdd.jsx';
import {addTodo} from '../actions/index.js';


function mapStateToProps(state) {
  return { todos: state.todos }
}
function mapDispatchToProps(dispatch) {
  return {
    onAddToDo: (text) => { 
      dispatch(addTodo(text)) 
    },
  };
}


export const TodoAddContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoAdd);
