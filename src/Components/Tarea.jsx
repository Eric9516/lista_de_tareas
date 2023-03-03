import React from "react";

export const Tarea = ({ tarea, togleTask }) => {
	return (
		<tr>
			<td>
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
