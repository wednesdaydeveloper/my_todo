import { handleActions } from 'redux-actions';
import { ADD_TODO, DEL_TODO } from '../actions/index.js';


const initState = {
  todos: [
    {todo:"foo", flag:true , createAt: null, deleteAt: null},
    {todo:"bar", flag:false, createAt:null, deleteAt: null}
  ]
};

const reducer = handleActions(
  {
    ADD_TODO: (state, action) => {
      return { 
          todos: [
            ...state.todos,
            {todo:action.payload, flag:true, createAt: new Date(), deleteAt: null }
          ] 
        };
    },
    DEL_TODO: (state, action) => {
      state.todos[action.payload].flag = false;
      state.todos[action.payload].deleteAt = new Date();
      return { todos: state.todos.slice(0) };
    }
  }, initState);
  
export default reducer;