import { useState, useEffect } from "react";

export const CreadorDeTareas = (props) => {
	const [tarea, setTarea] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		const tareas = localStorage.getItem("tareas");
		if (tareas) {
			props.crearNuevaTarea(tarea);
			setTarea("");
		} else localStorage.setItem("tarea", tarea);
		setTarea("");
	};

	return (
		<form onSubmit={handleSubmit} className="my-2 row">
			<div className="col-9">
				<input
					type="text"
					placeholder="Nueva tarea"
					onChange={(e) => setTarea(e.target.value)}
					value={tarea}
					className="form-control"
				/>
			</div>
			<div className="col-3">
				<button className="btn btn-primary btn-sm">Agregar tarea</button>
			</div>
		</form>
	);
};
