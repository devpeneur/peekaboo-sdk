import React from 'react';

interface SpinButtonProps {
	handleSpin: () => void;
}

const SpinButton: React.FC<SpinButtonProps> = ({ handleSpin }) => {
	return (
		<div className="spinPage">
			<button id="spinButton" onClick={handleSpin}>
				SPIN
			</button>
		</div>
	);
};

export default SpinButton;
