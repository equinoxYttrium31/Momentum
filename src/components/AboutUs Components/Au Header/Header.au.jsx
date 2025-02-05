import './Header.au.css';

function Header() {
	return (
		<div className='au-header-container'>
			<h2 className='au-header-text'>
				More Than Just a Habit Tracker, A Movement Toward Better Living!
			</h2>
			<p className='au-description-text'>
				At <span id='hs-title'>Momentum</span>, we believe that small, consistent actions lead to
				extraordinary transformations. Whether you&apos;re building new habits or breaking old ones,
				we&apos;re here to support your journey every step of the way.
			</p>
		</div>
	);
}

export default Header;
