import React from "react";
import { Tarea } from "./Tarea";

export const TablaTareas = ({
	listaDeTareas,
	togleTask,
	showCompleted = false,
}) => {
	const filas = (doneStatus) => {
		return listaDeTareas
			.filter((tareas) => tareas.done === doneStatus)
			.map((tarea) => (
				<Tarea tarea={tarea} key={tarea.name} togleTask={togleTask} />
			));
	};

	return (
		<table>
			<thead>
				<tr>
					<th>Tareas</th>
				</tr>
			</thead>
			<tbody>{filas(showCompleted)}</tbody>
		</table>
	);
};
