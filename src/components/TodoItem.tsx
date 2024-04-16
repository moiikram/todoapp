import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditNoteIcon from "@mui/icons-material/EditNote";
import SaveIcon from "@mui/icons-material/Save";
import { Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";

interface TodoItemProps {
	id: number;
	text: string;
	onDelete: (id: number) => void;
	onEdit: (id: number, newText: string) => void;
}

const TodoItem = ({ id, text, onDelete, onEdit }: TodoItemProps) => {
	const [editing, setEditing] = useState(false);
	const [editedText, setEditedText] = useState(text);

	const handleDeleteTodo = () => {
		onDelete(id);
	};

	const handleEdit = () => {
		setEditing(true);
	};
	const handleSave = () => {
		onEdit(id, editedText);
		setEditing(false);
	};

	return (
		<Box sx={{ m: "5px", border: "1px solid black", borderRadius: "5px" }}>
			<Card>
				<CardContent
					sx={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-between",
					}}
				>
					{editing ? (
						<TextField
							fullWidth
							value={editedText}
							onChange={(e) => setEditedText(e.target.value)}
						/>
					) : (
						<Typography>{text}</Typography>
					)}
					<Stack direction="row" spacing={2}>
						{editing ? (
							// <Button variant="outlined">
							// 	Save
							// </Button>
							<SaveIcon onClick={handleSave} />
						) : (
							// <Button variant="outlined">
							// 	edit
							// </Button>
							<EditNoteIcon onClick={handleEdit} />
						)}

						<DeleteIcon onClick={handleDeleteTodo} />
					</Stack>
				</CardContent>
			</Card>
		</Box>
	);
};

export default TodoItem;
