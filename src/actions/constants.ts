export interface Actions {
    addTodo: (text: string) => void;
    deleteTodo: (id: number) => void;
    editTodo: (id: number, text: string) => void;
    completeTodo: (id: number) => void;
    completeAll: () => void;
    clearCompleted: () => void;
}

export interface Action {
    type: string;
    id?: number;
    text?: string;
}
