import { useState } from "react";
import { TodoItemProps } from "../models/TodoItem";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import TodoItems from "./TodoItems";

const TodoApp = () => {
	const [todos, setTodos] = useState<TodoItemProps[]>([
		{
			id: 1,
			text: "Get Groceries",
		},
		{
			id: 2,
			text: "Go to dentist",
		},
	]);
	const [newTodoText, setNewTodoText] = useState<string>("");

	const handleAddTodo = () => {
		if (newTodoText.trim() !== "") {
			const newTodo = {
				id: todos.length + 1,
				text: newTodoText,
			};
			setTodos([...todos, newTodo]);
			setNewTodoText("");
		}
	};

	const handleDeleteTodo = (id: number) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	return (
		<Box
			component="main"
			sx={{ m: "5px", p: "5px", border: "1px solid black" }}
		>
			<Typography>Tasks</Typography>
			<Stack spacing={2} direction="row">
				<TextField
					fullWidth
					label="My daily task"
					variant="outlined"
					value={newTodoText}
					onChange={(e) => setNewTodoText(e.target.value)}
				/>
				<Button onClick={handleAddTodo} size="small" variant="outlined">
					Add
				</Button>
			</Stack>
			<TodoItems todos={todos} onDeleteTodo={handleDeleteTodo} />
		</Box>
	);
};

export default TodoApp;
