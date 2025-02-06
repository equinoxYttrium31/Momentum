import './About.pages.css';

//components import
import CTASection from '../../components/AboutUs Components/Au CTA/CTASection.au';
import Testimonial from '../../components/AboutUs Components/Au Testimonial/Testimonial.au';
import Story from '../../components/AboutUs Components/Au Story/Story.au';
import Mission from '../../components/AboutUs Components/Au Mission/Mission.au';
import Header from '../../components/AboutUs Components/Au Header/Header.au';

import useScrollAnimation from '../../utils/useScrollAnimation';

function About() {
	const sectionsRef = useScrollAnimation('fade-in');

	return (
		<div className='au-main-container'>
			<section
				className='au-header-section au-sections'
				ref={(el) => (sectionsRef.current[0] = el)}>
				<Header />
			</section>

			<section
				className='au-mission-section au-sections'
				ref={(el) => (sectionsRef.current[1] = el)}>
				<Mission />
			</section>

			<section
				className='au-story-section au-sections'
				ref={(el) => (sectionsRef.current[2] = el)}>
				<Story />
			</section>

			<section
				className='au-testimonial-section au-sections'
				ref={(el) => (sectionsRef.current[3] = el)}>
				<Testimonial />
			</section>

			<section
				className='au-cta-section au-sections'
				ref={(el) => (sectionsRef.current[4] = el)}>
				<CTASection />
			</section>
		</div>
	);
}

export default About;
