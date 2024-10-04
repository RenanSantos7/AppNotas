import { createBrowserRouter } from 'react-router-dom';
import Base from './pages/Base.tsx';
import Home from './pages/Home/index.tsx';
import Erro404 from './pages/Erro404/Erro404.tsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Base />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: '*',
				element: <Erro404 />,
			},
		],
	},
]);

export default router;
