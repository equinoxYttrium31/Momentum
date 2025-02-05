import './NavigationBar.components.css';
import Logo from '../../../assets/images/momentum-logo.png';

import { Link } from 'react-router-dom';

function NavigationBar() {
	return (
		<>
			<div className='nb-main-container'>
				<div className='nb-logo-container'>
					<img
						src={Logo}
						alt='momentum logo'
						className='nb-logo-image'
					/>
					<h2 className='nb-logo-text'>Momentum</h2>
				</div>
				<div className='nb-links-container'>
					<ul className='nb-links-group'>
						<li className='nb-links-item'>
							<Link
								to='/'
								className='item-link'>
								Home
							</Link>
						</li>
						<li className='nb-links-item'>
							<Link
								to='/about-us'
								className='item-link'>
								About
							</Link>
						</li>
						<li className='nb-links-item'>
							<Link
								to='/contact-us'
								className='item-link'>
								Contact Us
							</Link>
						</li>
						<li className='nb-links-item'>
							<Link
								to='/help'
								className='item-link'>
								Help
							</Link>
						</li>
					</ul>
				</div>
				<div className='nb-buttons-container'>
					<button className='nb-btn btn-light'>Sign Up</button>
					<button className='nb-btn btn-light'>Login</button>
				</div>
			</div>
		</>
	);
}

export default NavigationBar;
