import DeleteIcon from "@mui/icons-material/Delete";
import EditNoteIcon from "@mui/icons-material/EditNote";
import SaveIcon from "@mui/icons-material/Save";
import { Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";

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
		<Paper
			variant="outlined"
			sx={{
				mb: 1,
				p: 2,
				display: "flex",
				flexDirection: "row",
				alignItems: "center",
				justifyContent: "space-between",
			}}
		>
			{editing ? (
				<TextField
					fullWidth
					sx={{ height: "100%" }}
					size="small"
					value={editedText}
					onChange={(e) => setEditedText(e.target.value)}
					onKeyDown={(e) => {
						if (e.key === "Enter") {
							handleSave();
						}
					}}
				/>
			) : (
				<Typography display="flex" alignItems="center">
					<Checkbox />
					{text}
				</Typography>
			)}
			<Stack direction="row" spacing={2}>
				{editing ? (
					<SaveIcon onClick={handleSave} />
				) : (
					<EditNoteIcon onClick={handleEdit} />
				)}
				<DeleteIcon onClick={handleDeleteTodo} />
			</Stack>
		</Paper>
	);
};

export default TodoItem;
