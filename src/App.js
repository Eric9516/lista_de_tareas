import "./App.css";
import { useState, useEffect } from "react";
import { CreadorDeTareas } from "./Components/CreadorDeTareas";
import { TablaTareas } from "./Components/TablaTareas";
import { MostrarTareas } from "./Components/MostrarTareas";

const App = () => {
	const [listaDeTareas, setListaDeTareas] = useState([
		{
			name: "tarea 1",
			done: true,
		},
	]);
	const [showCompleted, setShowCompleted] = useState(false);

	const crearNuevaTarea = (nombre) => {
		if (!listaDeTareas.find((tarea) => tarea.name === nombre)) {
			setListaDeTareas([...listaDeTareas, { name: nombre, done: false }]);
		}
	};

	const togleTask = (tarea) => {
		setListaDeTareas(
			listaDeTareas.map((t) => {
				return t.name === tarea.name ? { ...t, done: !t.done } : t;
			})
		);
	};

	useEffect(() => {
		let data = localStorage.getItem("tareas");
		if (data) setListaDeTareas(JSON.parse(data));
		console.log(data);
	}, []);

	const borrar = () => {
		setListaDeTareas(listaDeTareas.filter((tareas) => !tareas.done));
		setShowCompleted(false);
	};

	useEffect(() => {
		localStorage.setItem("tareas", JSON.stringify(listaDeTareas));
	}, [listaDeTareas]);

	return (
		<>
			<CreadorDeTareas crearNuevaTarea={crearNuevaTarea} />
			<TablaTareas listaDeTareas={listaDeTareas} togleTask={togleTask} />
			<MostrarTareas
				isChecked={showCompleted}
				setShowCompleted={(chequed) => setShowCompleted(chequed)}
				borrar={borrar}
			/>
			{showCompleted && (
				<TablaTareas
					listaDeTareas={listaDeTareas}
					togleTask={togleTask}
					showCompleted={showCompleted}
				/>
			)}
		</>
	);
};

export default App;
