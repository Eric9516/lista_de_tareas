import { useState, useEffect } from "react";

export const CreadorDeTareas = (props) => {
	const [tarea, setTarea] = useState("");

	const handleClick = () => {
		const tareas = localStorage.getItem("tareas");
		if (tareas) {
			props.crearNuevaTarea(tarea);
			setTarea("");
		} else localStorage.setItem("tarea", tarea);
		setTarea("");
	};

	return (
		<div>
			<input
				type="text"
				placeholder="Nueva tarea"
				onChange={(e) => setTarea(e.target.value)}
				value={tarea}
			/>
			<button onClick={handleClick}>Agregar</button>
		</div>
	);
};
