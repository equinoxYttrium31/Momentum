import './homepage.page.css';

import HeroSection from '../../components/Homepage Components/HeroSection/Herosection.components';
import KeyFeatures from '../../components/Homepage Components/KeyFeatures/KeyFeatures.components';

function Homepage() {
	return (
		<div className='hp-main-container'>
			<section id='hero-section'>
				<HeroSection />
			</section>
			<section id='key-feature-section'>
				<KeyFeatures />
			</section>
		</div>
	);
}

export default Homepage;
