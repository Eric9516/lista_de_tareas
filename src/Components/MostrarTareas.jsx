export const MostrarTareas = ({ setShowCompleted, borrar, isChecked }) => {
	const handleDelete = () => {
		if (window.confirm("Estas seguro de querer eliminarlo??")) {
			borrar();
		}
	};

	return (
		<div>
			<input
				type="checkbox"
				checked={isChecked}
				onChange={(e) => setShowCompleted(e.target.checked)}
			/>
			<label>Tareas copletadas</label>
			<button onClick={handleDelete}>Limpiar</button>
		</div>
	);
};
