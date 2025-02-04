import "./Herosection.components.css"
import heroImage from "../../assets/images/hero-image.png"

function HeroSection() {
  return (
		<div className="hs-section-container">
			<div className='hs-main-container'>
				<div className='hs-image-container'>
					<img
                        className="hs-image"
						src={heroImage}
						alt='girl in a table with an idea'
					/>
				</div>

				<div className='hs-text-container'>
					<h1 className='hs-text-main'>
						Build Better Habits, Break the Bad
						Ones!
					</h1>
					<p className='hs-text-subtext'>
						<span id='hs-title'>Momentum </span> 
						helps you develop positive habits,
						stay consistent, and track your
						progress with AI-driven insights and
						community support.
					</p>
				</div>
                <div className="hs-button-container">
                    <button className="hs-btn btn-dark">Start Now!</button>
                </div>
			</div>
		</div>
	);
}

export default HeroSection
