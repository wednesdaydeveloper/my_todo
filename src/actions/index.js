import { createAction } from 'redux-actions';


export const ADD_TODO = 'ADD_TODO';
export const DEL_TODO = 'DEL_TODO';

export const addTodo = createAction(ADD_TODO, text => text);
export const delTodo = createAction(DEL_TODO, index => index);
