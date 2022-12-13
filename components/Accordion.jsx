import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
	FaUserGraduate,
	FaChalkboardTeacher,
	FaMobileAlt,
	FaAward,
} from "react-icons/fa";
import { AiOutlineRight } from "react-icons/ai";

export default function SimpleAccordion() {
	return (
		<div>
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<h3>
						Apoyo Académico{" "}
						<FaUserGraduate className="i" />{" "}
					</h3>
				</AccordionSummary>
				<AccordionDetails style={{ color: "grayText" }}>
					Sabemos lo dificíl que es para un
					estudiante resolver tareas sin ayuda, es
					por eso que ofrecemos este servicio de
					apoyo para estudiantes lo cual les
					facilitará el aprendizaje y la
					comprensión del idioma de la mano de
					orientación profesional personalizada
					vía whatsapp.
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel2a-content"
					id="panel2a-header"
				>
					<h3>
						Método Interáctivo{" "}
						<FaChalkboardTeacher className="i" />
					</h3>
				</AccordionSummary>
				<AccordionDetails style={{ color: "GrayText" }}>
					La mayoría de las veces los métodos de
					enseñanza de idioma que usan las
					instituciones educativas regulares no
					son el camino más apropiado para muchos
					estudiantes, lo cual los lleva a
					aburrirse, estancarse o incluso tenerle
					miedo a el inglés, lo cual cambia por
					completo con nuestra propuesta
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel2a-content"
					id="panel2a-header"
				>
					<h3>
						App Móvil y Offline{" "}
						<FaMobileAlt className="i" />{" "}
					</h3>
				</AccordionSummary>
				<AccordionDetails>
					No te limites a aprender el idioma sino
					tienes un computador o una buena
					conexión a internet, nuestro programa
					ofrece una aplicación móvil en la cual
					podrás también descargar las clases para
					verlas donde quieras y sin internet,
					Awesome!
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel2a-content"
					id="panel2a-header"
				>
					<h3>
						Garantía de Satisfacción{" "}
						<FaAward className="i" />{" "}
					</h3>
				</AccordionSummary>
				<AccordionDetails>
					Confiamos tanto en nuestro programa y en
					los resultados que tiene que te
					ofrecemos una garantía de satisfacción o
					periodo de prueba en el cual tendrás
					acceso a las clases y los profesores por
					15 días, dentro de los cuales si el
					programa no te convence simplemente
					puedes pedir un reembolso y nos
					encargaremos de devolverte la totalidad
					de tu dinero sin hacerte una sola
					pregunta
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<a href="/info">
					<button>
						ver todos los beneficios{" "}
						<AiOutlineRight className="next" />
					</button>
				</a>
			</Accordion>
		</div>
	);
}
