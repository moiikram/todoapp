import TodoItem from "./TodoItem";
import { TodoItemProps } from "../models/TodoItem";

interface TodoItemsProps {
	todos: TodoItemProps[];
	onDeleteTodo: (id: number) => void;
}

const TodoItems = ({ todos, onDeleteTodo }: TodoItemsProps) => {
	return (
		<>
			{todos.map((todo: TodoItemProps) => (
				<TodoItem
					key={todo.id}
					id={todo.id}
					text={todo.text}
					onDelete={() => onDeleteTodo(todo.id)}
				/>
			))}
		</>
	);
};

export default TodoItems;
