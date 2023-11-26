import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

const SocialButton = ({ icon }) => {
  return <button className='btn btn-primary rounded-circle icon-size'>{icon}</button>;
};

SocialButton.propTypes = {
  icon: PropTypes.string.isRequired, // Define 'icon' como una prop de tipo string y requerida
};

export default SocialButton;
