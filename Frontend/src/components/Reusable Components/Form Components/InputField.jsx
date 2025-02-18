import PropTypes from 'prop-types';

export const TextInput = ({ placeholder, type, className }) => {
	return (
		<input
			type={type}
			className={`input ${className}`}
			placeholder={placeholder}></input>
	);
};

//Proptypes Validation
TextInput.propTypes = {
	placeholder: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	className: PropTypes.string.isRequired,
};
