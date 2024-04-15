import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

interface TodoItemProps {
	id: number;
	text: string;
	onDelete: (id: number) => void;
}

const TodoItem = ({ id, text, onDelete }: TodoItemProps) => {
	const handleDeleteTodo = () => {
		onDelete(id);
	};

	return (
		<Box sx={{ m: "5px", border: "1px solid black" }}>
			<Card>
				<CardContent sx={{ display: "flex", flexDirection: "row" }}>
					<Typography>This is my todo item:{text}</Typography>
					<Button onClick={handleDeleteTodo} variant="outlined">
						delete
					</Button>
					<Button variant="outlined">edit</Button>
				</CardContent>
			</Card>
		</Box>
	);
};

export default TodoItem;
