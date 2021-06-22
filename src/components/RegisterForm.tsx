import { InjectedFormProps, reduxForm, Field } from 'redux-form' //Field es el input de redux-form 
 //este componente lo copié tal cual me lo sugirió un compañero de curso y funcionó
import Button from './Button'
import Center from './Center'
import Input from './Input'
 
import { ILogin } from '../ducks/Users'
import { Link } from 'react-router-dom'
 
const RegisterForm: React.FC<InjectedFormProps<ILogin>> = props => {
    const { handleSubmit } = props
    return(
        <form onSubmit={handleSubmit}>
            <Field label='Correo' placeholder='Correo' name='email' type='email' component={Input}/>{/* Field tiene que recibir un stateless component, hay que declararlo pero no con class */}
            <Field label='Contraseña' placeholder='Contraseña' name='password' type='password' component={Input}/>
            <Button block={true}>Enviar</Button>
            <Center>
                 <Link to='/'>Iniciar Sesión</Link>
            </Center>
        </form>
    )
}
 
 
export default reduxForm<ILogin>({
    form: "register"
  })(RegisterForm);