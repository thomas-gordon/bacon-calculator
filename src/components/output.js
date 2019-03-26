
import React from "react";

function round(val, weight) {
	return (val/100 * weight).toFixed(2);
}

const Output = props => {

	const {values} = props;

	if (values.weight === 0 || values.weight === '') {
		return null
	}

	const sugar = round(values.sugar, values.weight)
	const salt = round(values.salt, values.weight)
	const nitrite = round(values.nitrite, values.weight)

    return (
        <div>
			<hr />
            <h2>Recipe:</h2>
			<dl>
				<dt>
					Prague Powder #1
				</dt>
				<dd>
					{nitrite}g
				</dd>
				<dt>
					Salt (Kosher/Cooking - non iodized)
				</dt>
				<dd>
					{salt}g
				</dd>
				<dt>
					Brown Sugar
				</dt>
				<dd>
					{sugar}g
				</dd>
			</dl>
        </div>
    );
};
export default Output;
