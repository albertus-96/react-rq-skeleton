import { Logo } from 'components/common';

export const Header = () => {
	return (
		<div className="text-center bg-gray-800" data-testid="container">
			<Logo />
		</div>
	);
};
