import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Boy from "../public/Boy.jpg";
import Girl from "../public/Girl.jpg";
import Yessica from "../public/Yessica.jpg";
import Patricia from "../public/Patricia.jpg";
import Image from "next/image";

export default function StudentsCards() {
	return (
		<div>
			<Card sx={{ maxWidth: 345, marginBottom: "30px" }}>
				<CardMedia>
					<Image
						className="Image"
						src={Boy}
						alt="Boy"
					/>
				</CardMedia>
				<CardContent>
					<Typography
						gutterBottom
						variant="h5"
						component="div"
					>
						Manuel{" "}
						<i
							style={{
								color: "yellow",
							}}
							className="fa-solid fa-star"
						></i>
						<i
							style={{
								color: "yellow",
							}}
							className="fa-solid fa-star"
						></i>
						<i
							style={{
								color: "yellow",
							}}
							className="fa-solid fa-star"
						></i>
						<i
							style={{
								color: "yellow",
							}}
							className="fa-solid fa-star"
						></i>
						<i
							style={{
								color: "yellow",
							}}
							className="fa-solid fa-star"
						></i>
					</Typography>
					<Typography
						variant="body2"
						color="text.secondary"
					>
						Soy Desarrollador Web pero nunca
						había entendido el inglés, pero
						desde que tomé el curso hablo
						inglés fluidamente y he
						incrementado mi salario 3 veces
						gracias a que trabajo en una
						grande multinacional,
						recomendadísimo!
					</Typography>
				</CardContent>
			</Card>
			<Card sx={{ maxWidth: 345, marginBottom: "30px" }}>
				<CardMedia>
					<Image
						className="Image"
						src={Yessica}
						alt="Yessica"
					/>
				</CardMedia>
				<CardContent>
					<Typography
						gutterBottom
						variant="h5"
						component="div"
					>
						Yessica{" "}
						<i
							style={{
								color: "yellow",
							}}
							className="fa-solid fa-star"
						></i>
						<i
							style={{
								color: "yellow",
							}}
							className="fa-solid fa-star"
						></i>
						<i
							style={{
								color: "yellow",
							}}
							className="fa-solid fa-star"
						></i>
						<i
							style={{
								color: "yellow",
							}}
							className="fa-solid fa-star"
						></i>
						<i
							style={{
								color: "yellow",
							}}
							className="fa-solid fa-star"
						></i>
					</Typography>
					<Typography
						variant="body2"
						color="text.secondary"
					>
						Mi hijo ha mejorado muchísimo en
						inglés desde que empezó el
						curso, incluso le enseña a sus
						compañeritos de colegio, lo
						recomiendo 100%
					</Typography>
				</CardContent>
			</Card>
			<Card sx={{ maxWidth: 345, marginBottom: "30px" }}>
				<CardMedia>
					<Image
						className="Image"
						src={Girl}
						alt="Girl"
					/>
				</CardMedia>
				<CardContent>
					<Typography
						gutterBottom
						variant="h5"
						component="div"
					>
						Sofía{" "}
						<i
							style={{
								color: "yellow",
							}}
							className="fa-solid fa-star"
						></i>
						<i
							style={{
								color: "yellow",
							}}
							className="fa-solid fa-star"
						></i>
						<i
							style={{
								color: "yellow",
							}}
							className="fa-solid fa-star"
						></i>
						<i
							style={{
								color: "yellow",
							}}
							className="fa-solid fa-star"
						></i>
						<i
							style={{
								color: "yellow",
							}}
							className="fa-solid fa-star"
						></i>
					</Typography>
					<Typography
						variant="body2"
						color="text.secondary"
					>
						Tomé el curso hace 6 meses y
						ahora soy asistente virtual de
						una multinacional en Canadá, los
						profesores son muy prácticos!
					</Typography>
				</CardContent>
			</Card>
			<Card sx={{ maxWidth: 345, marginBottom: "30px" }}>
				<CardMedia>
					<Image
						className="Image"
						src={Patricia}
						alt="Patricia"
					/>
				</CardMedia>
				<CardContent>
					<Typography
						gutterBottom
						variant="h5"
						component="div"
					>
						Patricia{" "}
						<i
							style={{
								color: "yellow",
							}}
							className="fa-solid fa-star"
						></i>
						<i
							style={{
								color: "yellow",
							}}
							className="fa-solid fa-star"
						></i>
						<i
							style={{
								color: "yellow",
							}}
							className="fa-solid fa-star"
						></i>
						<i
							style={{
								color: "yellow",
							}}
							className="fa-solid fa-star"
						></i>
						<i
							style={{
								color: "yellow",
							}}
							className="fa-solid fa-star"
						></i>
					</Typography>
					<Typography
						variant="body2"
						color="text.secondary"
					>
						Lo tomé porque me iba de
						vacaciones a Estados Unidos y me
						ayudó un montón a perder el
						miedo a hablar en inglés con
						otras personas
					</Typography>
				</CardContent>
			</Card>
		</div>
	);
}
