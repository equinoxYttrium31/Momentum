import './Form.cu.css';

import { TextInput } from '../../Reusable Components/Form Components/InputField';

function Form() {
	return (
		<div className='f-main-container'>
			<div className='f-transparent-container'>
				<div className='f-inputField-container'>
					<label htmlFor=' '>Email:</label>
					<TextInput
						type={'email'}
						className={'f-input'}
						placeholder={''}
					/>
				</div>
				<div className='f-inputField-container'>
					<label htmlFor=' '>Body:</label>
					<textarea name="" id=""></textarea>
				</div>
				<div className='f-inputField-container'>
					<button className='btn-dark'>Submit</button>
				</div>
			</div>
		</div>
	);
}

export default Form;
