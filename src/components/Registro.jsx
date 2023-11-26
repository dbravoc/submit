import SocialButton from './SocialButton';
import Formulario from './Formulario';
import Alert from './Alert';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebook } from 'react-icons/fa';


const Registro = () => {
  return (
    <div>
      <SocialButton icon={<FaFacebook style={{ fontSize: '50px' }}/>} />
      <Formulario />
      <Alert />
    </div>
  );
};

export default Registro;
