import "./App.css"
import {
	Route,
	Routes,
} from 'react-router-dom';
import NavigationBar from "./components/navigation-bar/NavigationBar.components"

import Homepage from "./pages/Homepage/homepage.page";

function App() {
  return (
		<>
			<div className='main-app-container'>
				<NavigationBar />
			</div>

      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
		</>
	);
}

export default App
