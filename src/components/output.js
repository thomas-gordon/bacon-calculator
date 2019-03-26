
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
			<ul>
				<li>{values.weight}g Boneless, skinless pork belly</li>
				<li>{nitrite}g Prague Powder #1</li>
				<li>{salt}g Kosher/Cooking salt</li>
				<li>{sugar}g Brown or white Sugar</li>
			</ul>
        </div>
    );
};
export default Output;
