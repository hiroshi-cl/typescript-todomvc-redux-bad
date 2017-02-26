import * as types from '../constants/ActionTypes'

export const TodoActions = {
    addTodo: (text: string) => ({ type: types.ADD_TODO, text }),
    deleteTodo: (id: number) => ({ type: types.DELETE_TODO, id }),
    editTodo: (id: number, text: string) => ({ type: types.EDIT_TODO, id, text }),
    completeTodo: (id: number) => ({ type: types.COMPLETE_TODO, id }),
    completeAll: () => ({ type: types.COMPLETE_ALL }),
    clearCompleted: () => ({ type: types.CLEAR_COMPLETED })
};
