import { useState } from "react";
import { TodoItemProps } from "../models/TodoItem";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import TodoItems from "./TodoItems";
import AddIcon from "@mui/icons-material/Add";

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

	const handleEditTodo = (id: number, newText: string) => {
		setTodos(
			todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
		);
	};
	return (
		<Box
			component="main"
			sx={{
				p: "15px",
				border: "1px solid black",
				height: "100vh",
			}}
		>
			<Typography sx={{ textAlign: "center" }}>Tasks</Typography>
			<Stack spacing={2} direction="row" alignItems="center">
				<TextField
					fullWidth
					label="My daily task"
					variant="outlined"
					value={newTodoText}
					onChange={(e) => setNewTodoText(e.target.value)}
				/>
				<AddIcon onClick={handleAddTodo} fontSize="large" />
			</Stack>
			<TodoItems
				todos={todos}
				onDeleteTodo={handleDeleteTodo}
				onEditTodo={handleEditTodo}
			/>
		</Box>
	);
};

export default TodoApp;
