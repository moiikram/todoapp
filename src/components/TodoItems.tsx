import TodoItem from "./TodoItem";
import { TodoItemProps } from "../models/TodoItem";
import { Typography } from "@mui/material";

interface TodoItemsProps {
	todos: TodoItemProps[];
	onDeleteTodo: (id: number) => void;
	onEditTodo: (id: number, newText: string) => void;
}

const TodoItems = ({ todos, onDeleteTodo, onEditTodo }: TodoItemsProps) => {
	return (
		<>
			<Typography
				sx={{ borderBottom: "1px solid black", mt: "20px", mb: "20px" }}
			>
				{" "}
				My Added Tasks
			</Typography>
			{todos.map((todo: TodoItemProps) => (
				<TodoItem
					key={todo.id}
					id={todo.id}
					text={todo.text}
					onDelete={() => onDeleteTodo(todo.id)}
					onEdit={(id: number, newText: string) => onEditTodo(todo.id, newText)}
				/>
			))}
		</>
	);
};

export default TodoItems;
