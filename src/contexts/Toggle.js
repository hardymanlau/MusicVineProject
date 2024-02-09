import React from "react";
import "./Toggle.css";

// Functional component which renders the toggle to change the colour theme of website
function Toggle({ checked, onChange }) {
	// When toggle is toggled, slider moves to right
	const sliderStyle = {
		transform: `translateX(${checked ? "20px" : "0"})`,
	};

	return (
		<div
			data-testid="slider"
			className={`toggle ${checked ? "checked" : ""}`}
			onClick={onChange}
		>
			<div
				className="slider"
				style={sliderStyle}
			></div>
		</div>
	);
}

export default Toggle;
