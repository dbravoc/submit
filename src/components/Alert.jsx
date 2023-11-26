import PropTypes from 'prop-types';

const Alert = ({ message, type }) => {
  return <div className={`alert alert-${type}`}>{message}</div>;
};

Alert.propTypes = {
  message: PropTypes.string.isRequired, 
  type: PropTypes.string.isRequired,
};

export default Alert;
