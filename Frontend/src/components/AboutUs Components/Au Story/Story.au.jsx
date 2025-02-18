import './Story.au.css';

function Story() {
	return (
		<div className='os-main-container'>
			<h2>Our Story</h2>
			<div className='timeline'>
				<div className='timeline-item'>
					<h3>The Idea</h3>
					<p>
						Momentum was born from a simple realization: building good habits is hard, but it
						doesn&apos;t have to be. We wanted to create a habit tracker that adapts to you, not the
						other way around.
					</p>
				</div>

				<div className='timeline-item'>
					<h3>The First Prototype</h3>
					<p>
						We started developing Momentum with a focus on simplicity, AI-powered insights, and
						personalized habit tracking. The goal was to make habit-building engaging, not
						overwhelming.
					</p>
				</div>

				<div className='timeline-item'>
					<h3>Growth</h3>
					<p>
						What started as a side project quickly turned into a movement. Beta users loved the
						AI-driven insights and community challenges, helping us refine the platform.
					</p>
				</div>

				<div className='timeline-item'>
					<h3>Momentum Goes Live</h3>
					<p>
						Momentum officially launched, empowering thousands of users to take control of their
						habits. With every update, we continue to innovate and improve.
					</p>
				</div>

				<div className='timeline-item'>
					<h3>The Future</h3>
					<p>
						We&apos;re just getting started! More features, deeper insights, and stronger
						communities are coming. Our mission remains the same: helping you build habits that
						last.
					</p>
				</div>
			</div>
		</div>
	);
}

export default Story;
