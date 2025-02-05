import './Mission.au.css';
import missionImage from '../../../assets/images/missions-image.jpg';

function Mission() {
	return (
		<div className='au-mission-container'>
			<div className='au-mission-text-container'>
				<h2 className='mission-header-text'>Momentum&apos;s Mission</h2>
				<p className='mission-paragraph-text'>
					To help you create meaningful, lasting habits that align with your personal goals. We
					leverage smart tracking, AI-powered insights, and community-driven accountability to make
					habit-building easy, engaging, and effective.
				</p>
			</div>
			<div className='au-mission-image-container'>
				<img
					src={missionImage}
					alt='mission image'
					className='mission-image'
				/>
			</div>
		</div>
	);
}

export default Mission;
