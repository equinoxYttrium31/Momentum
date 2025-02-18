import './Testimonial.au.css';
import TestimonialCard from './TestimonialCard/TestimonialCard';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function Testimonial() {
	const testimonials = [
		{
			name: 'John Doe',
			role: 'Entrepreneur',
			feedback:
				'Momentum has completely transformed how I build habits. The streaks and reminders keep me on track!',
			avatar: 'https://i.pravatar.cc/300',
		},
		{
			name: 'Sarah Smith',
			role: 'Software Engineer',
			feedback:
				'The AI insights are super helpful in identifying patterns and optimizing my routine.',
			avatar: 'https://i.pravatar.cc/300',
		},
		{
			name: 'Michael Lee',
			role: 'Fitness Coach',
			feedback:
				'The community challenges keep me accountable. It’s amazing to see progress over time!',
			avatar: 'https://i.pravatar.cc/300',
		},
		{
			name: 'Emma Wilson',
			role: 'Designer',
			feedback:
				'Momentum’s clean UI and easy-to-use features help me stay consistent with my goals!',
			avatar: 'https://i.pravatar.cc/300',
		},
	];

	const CustomPrevArrow = ({ onClick }) => (
		<button
			className='ts-arrow ts-prev'
			onClick={onClick}>
			<FaChevronLeft />
		</button>
	);

	const CustomNextArrow = ({ onClick }) => (
		<button
			className='ts-arrow ts-next'
			onClick={onClick}>
			<FaChevronRight />
		</button>
	);

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: true,
		prevArrow: <CustomPrevArrow onClick={() => {}} />, // Ensure function is passed
		nextArrow: <CustomNextArrow onClick={() => {}} />,
	};

	return (
		<div className='ts-main-container'>
			<h2 className='ts-heading'>What Our Users Say</h2>
			<Slider
				{...settings}
				className='ts-carousel'>
				{testimonials.map((testimonial, index) => (
					<TestimonialCard
						key={index}
						{...testimonial}
					/>
				))}
			</Slider>
		</div>
	);
}

export default Testimonial;
