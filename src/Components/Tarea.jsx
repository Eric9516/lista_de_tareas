import React from "react";

export const Tarea = ({ tarea, togleTask }) => {
	return (
		<tr>
			<td className="d-flex justify-content-between">
				{tarea.name}
				<input
					type="checkbox"
					checked={tarea.done}
					onChange={() => togleTask(tarea)}
				/>
			</td>
		</tr>
	);
};
