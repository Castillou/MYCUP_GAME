import GlobalStyles from './styles/GlobalStyles';
import { RouterProvider } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './util/loader/eventsLoader';

import router from './util/router';

function App() {
	return (
		<>
			<GlobalStyles />
			<QueryClientProvider client={queryClient}>
				<RouterProvider router={router} />
			</QueryClientProvider>
		</>
	);
}

export default App;
