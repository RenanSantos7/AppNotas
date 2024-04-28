import { RouterProvider } from 'react-router-dom'
import DataProvider from './contexts/DataContext.tsx'
import router from './router'
import { AppThemeProvider } from './contexts/ThemeContext.tsx'

export default function App() {
	return (
		<DataProvider>
			<AppThemeProvider>
				<RouterProvider router={router} />
			</AppThemeProvider>
		</DataProvider>
	)
}
