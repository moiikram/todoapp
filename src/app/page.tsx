import { Button, Stack, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
export default function Home() {
	return (
		<Box
			component="main"
			sx={{ m: "5px", p: "5px", border: "1px solid black" }}
		>
			<Typography>Tasks</Typography>
			<Stack spacing={2} direction="row">
				<TextField fullWidth label="My daily task" variant="outlined" />
				<Button size="small" variant="outlined">
					Add
				</Button>
			</Stack>
		</Box>
	);
}
