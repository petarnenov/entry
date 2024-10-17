import PropTypes from 'prop-types';

const Button = ({ onClick, children, disabled = false, className = '' }) => {
	return (
		<button
			onClick={onClick}
			disabled={disabled}
			className={`btn ${className}`}
		>
			{children}
		</button>
	);
};

Button.propTypes = {
	onClick: PropTypes.func.isRequired,
	children: PropTypes.node.isRequired,
	disabled: PropTypes.bool,
	className: PropTypes.string,
};

export default Button;
