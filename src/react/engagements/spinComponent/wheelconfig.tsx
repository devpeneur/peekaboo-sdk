export interface Offer {
	label: string;
	value: string;
	color: string;
}

export const wheelData: Offer[] = [
	{ label: '10% Off', value: '10', color: '#FF0000' },
	{ label: '40% Off', value: '40', color: '#00FF00' },
	{ label: '30% Off', value: '30', color: '#0000FF' },
	{ label: '80% Off', value: '80', color: '#FFFF00' },
	{ label: '70% Off', value: '70', color: '#FF00FF' },
	{ label: '60% Off', value: '60', color: '#00FFFF' },
	{ label: '25% Off', value: '25', color: '#800000' },
	{ label: '5% Off', value: '5', color: '#808000' },
	{ label: '85% Off', value: '85', color: '#008000' },
	{ label: '15% Off', value: '15', color: '#800080' },
	{ label: '35% Off', value: '35', color: '#000080' },
	{ label: '50% Off', value: '50', color: '#808080' },
];

// Configurable options for the spin
export const spinConfig = {
	rounds: 3,
	duration: 2,
};

// Configurable styling options
export const styleConfig = {
	wheelTextColor: '#000000',
	arrowColor: '#ff0000',
	buttonBackgroundColor: '#0000ff',
	buttonTextColor: '#ffffff',
	fontFamily: 'Arial, sans-serif',
	fontSize: '16px',
	buttonFontFamily: 'Arial, sans-serif',
	buttonFontSize: '16px',
};
