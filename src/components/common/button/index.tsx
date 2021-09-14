import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: string;
}

export const Button = ({ variant = 'main', className = '', children, ...rest }: ButtonProps) => {
	return (
		<button
			className={`font-sub py-2 px-4 rounded bg-main hover:bg-main focus:outline-none ring-opacity-75 ring-main focus:ring text-white text-lg ${className}`}
			{...rest}
		>
			{children}
		</button>
	);
};
