import './TestimonialCard.css';

function TestimonialCard({ name, role, feedback, avatar }) {
	return (
		<div className='ts-card'>
			<img
				src={avatar}
				alt={`${name}'s avatar`}
				className='ts-avatar'
			/>
			<p className='ts-feedback'>"{feedback}"</p>
			<h3 className='ts-name'>{name}</h3>
			<p className='ts-role'>{role}</p>
		</div>
	);
}

export default TestimonialCard;
