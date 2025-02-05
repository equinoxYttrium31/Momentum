import './About.pages.css';

//components import
import Testimonial from '../../components/AboutUs Components/Au Testimonial/Testimonial.au';
import Story from '../../components/AboutUs Components/Au Story/Story.au';
import Mission from '../../components/AboutUs Components/Au Mission/Mission.au';
import Header from '../../components/AboutUs Components/Au Header/Header.au';

function About() {
	return (
		<div className='au-main-container'>
			<section className='au-header-section'>
				<Header />
			</section>

			<section className='au-mission-section'>
				<Mission />
			</section>

			<section className='au-story-section'>
				<Story />
			</section>

			<section className='au-testimonial-section'>
				<Testimonial />
			</section>
		</div>
	);
}

export default About;
