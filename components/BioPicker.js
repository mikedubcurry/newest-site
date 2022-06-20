import { useState } from 'react';

const BioPicker = () => {
	const [bioLength, setBioLength] = useState('short');

	return (
		<div>
			<label htmlFor="bio-length">Bio Length</label>
			<select
				onChange={(e) => {
					setBioLength(e.target.value);
				}}
				id="bio-length"
				value={bioLength}
			>
				<option value="short">Short</option>
				<option value="medium">Medium</option>
				<option value="long">Long</option>
			</select>
			{bioLength === 'short' && <p>short bio</p>}
			{bioLength === 'medium' && <p>medium bio</p>}
			{bioLength === 'long' && <p>long bio</p>}
		</div>
	);
};

export default BioPicker;
