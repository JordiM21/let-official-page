import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import logoIcon from "../public/Icon.png";
import { NavLink } from "react-router-dom";
import Image from "next/image";

export default function ButtonAppBar() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<IconButton
						href="/"
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 2 }}
					>
						<Image
							src={logoIcon}
							alt="logo"
						/>
					</IconButton>
					<Typography
						variant="h6"
						component="div"
						sx={{ flexGrow: 1 }}
					>
						Learn English Together
					</Typography>
					<NavLink to="/info">
						<i
							style={{
								color: "white",
								fontSize: "1.5rem",
							}}
							className="fa-solid fa-circle-question"
						></i>
					</NavLink>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
