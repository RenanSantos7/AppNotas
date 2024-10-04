import React, { ReactNode } from 'react';

export interface TituloProps {
	children: ReactNode;
	style?: React.CSSProperties;
	className?: React.HTMLAttributes<HTMLHeadingElement>;
}
