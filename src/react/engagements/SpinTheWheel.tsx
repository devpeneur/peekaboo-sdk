import React, { useState } from 'react';
import './spinComponent/SpinTheWheel.css';
import ResultsPage from './spinComponent/ResultsPage';
import SpinButton from './spinComponent/SpinButton';
import {
	wheelData,
	spinConfig,
	styleConfig,
} from './spinComponent/wheelconfig';

const App: React.FC = () => {
	const [status, setStatus] = useState<string>('phase1');
	const [offer, setOffer] = useState<string>('');
	const [state, setState] = useState<boolean>(false);

	const handleSpin = (): void => {
		if (!state) {
			const element = document.getElementById('circle') as HTMLElement;
			let deg = 0;
			element.style.pointerEvents = 'none';
			// Calculate total degrees including configurable rounds
			deg = Math.floor(360 * spinConfig.rounds + Math.random() * 360);
			element.style.transition = `all ${spinConfig.duration}s ease-out`;
			element.style.transform = `rotate(${deg}deg)`;
			const num =
				wheelData.length - ((deg % 360) / 360) * wheelData.length;
			console.log(num);
			setTimeout(() => showCode(num), spinConfig.duration * 1000); // Keep the timeout duration the same as transition duration
			setState(true);
		} else {
			alert('Spin in Progress! Please Wait.');
		}
	};

	const showCode = (num: number): void => {
		const index = Math.floor(num) % wheelData.length;
		setOffer(wheelData[index].value);
		setStatus('phase2');
	};

	return (
		<div className="outerDiv">
			<div className="innerDiv">
				<h1
					style={{
						fontFamily: styleConfig.fontFamily,
						fontSize: styleConfig.fontSize,
					}}
				>
					Spin The Wheel
				</h1>
				<div className="innerContent">
					<div className="wheel">
						<div className="theWheel">
							<div className="arrow"></div>
							<ul
								className="circle"
								id="circle"
								style={{
									fontFamily: styleConfig.fontFamily,
									fontSize: styleConfig.fontSize,
								}}
							>
								{wheelData.map((item, index) => (
									<li
										key={index}
										style={{ backgroundColor: item.color }}
									>
										<div className="text">{item.label}</div>
									</li>
								))}
							</ul>
						</div>
					</div>
					<div className="textContent">
						{status === 'phase1' ? (
							<SpinButton handleSpin={handleSpin} />
						) : (
							<ResultsPage offer={offer} />
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
