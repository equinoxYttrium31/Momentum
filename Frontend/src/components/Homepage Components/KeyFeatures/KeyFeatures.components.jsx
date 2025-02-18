import './KeyFeature.components.css';
import { calendar, notificationBell, artificial, communities } from '../../../assets/icons/Icons';

function KeyFeatures() {
	return (
		<div className='kf-main-container'>
			<div className='kf-heading-container'>
				<h2 className='kf-heading-text'>Key Features</h2>
			</div>
			<div className='kf-card-item'>
				<img
					src={calendar}
					alt='calendar with check'
					className='kf-card-icon'
				/>
				<h2 className='kf-card-title'>Custom Habit Tracking</h2>
				<p className='kf-card-subtext'>
					Set personal goals, track habits, and visualize your progress.
				</p>
			</div>

			<div className='kf-card-item'>
				<img
					src={artificial}
					alt='human with chip-set-brain'
					className='kf-card-icon'
				/>
				<h2 className='kf-card-title'>AI-Driven Insights</h2>
				<p className='kf-card-subtext'>Get smart recommendations based on your habit patterns.</p>
			</div>

			<div className='kf-card-item'>
				<img
					src={communities}
					alt='group of people'
					className='kf-card-icon'
				/>
				<h2 className='kf-card-title'>Community Challenges</h2>
				<p className='kf-card-subtext'>Join groups and stay accountable with friends.</p>
			</div>

			<div className='kf-card-item'>
				<img
					src={notificationBell}
					alt='phone with bell'
					className='kf-card-icon'
				/>
				<h2 className='kf-card-title'>Smart Reminders & Streaks</h2>
				<p className='kf-card-subtext'>
					Never miss a day with our intelligent notification system.
				</p>
			</div>
		</div>
	);
}

export default KeyFeatures;
