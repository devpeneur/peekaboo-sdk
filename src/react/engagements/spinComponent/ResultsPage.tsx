import React from 'react';

interface ResultsPageProps {
	offer: string;
}

const ResultsPage: React.FC<ResultsPageProps> = ({ offer }) => {
	const copyCode = (): void => {
		navigator.clipboard.writeText(`SPINTHEWHEEL${offer}`);
		alert('Code Copied!');
	};

	return (
		<div style={{ fontSize: '24px' }}>
			<p>You've Won</p>
			<div>
				<div>
					<span style={{ color: 'green' }}>{offer} % Off</span>
				</div>
				<div>
					<button onClick={copyCode}>Copy Code</button>
				</div>
			</div>
		</div>
	);
};

export default ResultsPage;
