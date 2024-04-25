import { useState } from "react";
import { TodoItemProps } from "../models/TodoItem";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import TodoItems from "./TodoItems";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Custom colors
const theme = createTheme({
	palette: {
		primary: {
			main: "#c84263",
		},
		secondary: {
			main: "#DF2929",
		},
	},
});

const TodoApp = () => {
	const [todos, setTodos] = useState<TodoItemProps[]>([]);
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
		<ThemeProvider theme={theme}>
			<Box
				component="main"
				sx={{
					p: "0px 150px",
					height: "100vh",
					overflow: "auto",
				}}
			>
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
					}}
				>
					<Typography sx={{ fontSize: "2.5rem" }}>Tasks</Typography>
				</Box>
				<Stack
					sx={{ justifyContent: "center" }}
					direction={{ xs: "column", sm: "row" }}
				>
					<TextField
						sx={{ minWidth: "70%" }}
						label="Add your todos here"
						value={newTodoText}
						onChange={(e) => setNewTodoText(e.target.value)}
						onKeyDown={(e) => {
							if (e.key === "Enter") {
								handleAddTodo();
							}
						}}
					/>
					<Button variant="contained" color="primary" onClick={handleAddTodo}>
						Add
					</Button>
				</Stack>
				{todos.length > 0 ? (
					<TodoItems
						todos={todos}
						onDeleteTodo={handleDeleteTodo}
						onEditTodo={handleEditTodo}
					/>
				) : (
					<Typography
						sx={{
							fontSize: "2rem",
							padding: "8px",
							color: "#DF2929", // Change color to stand out
						}}
					>
						Please enter a task before adding.
					</Typography>
				)}
			</Box>
		</ThemeProvider>
	);
};

export default TodoApp;
