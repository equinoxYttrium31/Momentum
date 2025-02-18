import './ContactUs.pages.css';

import Form from '../../components/ContactUs Components/Cu Form/Form.cu';
import Paragraph from '../../components/ContactUs Components/Cu Paragraph/Paragraph.cu';

function ContactUs() {
	return (
		<div className='cu-main-container'>
			<div className='cu-header-container'>
				<h2 className='cu-header-text'>Contact Us</h2>
			</div>
			<div className='cu-paragraph-container'>
				<Paragraph />
			</div>
			<div className='cu-form-container'>
				<Form />
			</div>
		</div>
	);
}

export default ContactUs;
