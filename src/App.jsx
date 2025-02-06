import "./App.css"
import {
	Route,
	Routes,
} from 'react-router-dom';
import NavigationBar from './components/Fixed Components/navigation-bar/NavigationBar.components';
import Footer from './components/Fixed Components/Footer/Footer.components';

import Homepage from './pages/Homepage/homepage.page';
import About from './pages/About/About.pages';
import ContactUs from './pages/Contact Us/ContactUs.pages';

function App() {
	return (
		<div className='app-container-scroll'>
			<div className='main-app-container'>
				<NavigationBar />
			</div>

			<Routes>
				<Route
					path='/'
					element={<Homepage />}
				/>
				<Route
					path='/about-us'
					element={<About />}
				/>
				<Route
					path='/contact-us'
					element={<ContactUs />}
				/>
			</Routes>

			<div className='footer-app-container'>
				<Footer />
			</div>
		</div>
	);
}

export default App
