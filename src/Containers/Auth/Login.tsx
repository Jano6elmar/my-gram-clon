import * as React from 'react';
import {connect} from 'react-redux'

import Card from '../../components/Card'
import Container from '../../components/Container'
import Title from '../../components/Title'
import LoginForm from '../../components/LoginForm'
import {ILogin, login as loginThunk } from '../../ducks/Users'
import { ThunkDispatch } from 'redux-thunk';

interface ILoginProps {
    login: (a: ILogin) => void //a = argumento
}

class Login extends React.Component<ILoginProps> {
    public render(){
        const { login }  = this.props
        return(
            <Container center={true}>
            <Card>
              <Title>Iniciar Sesión</Title>
               <LoginForm onSubmit={login}  /> {/* clase 63  se agrega esto pero no se altera el onSubmit*/}
            </Card>
            </Container>
        )
    }
}

const mapStateToProps = (state:any) => state
const mapDispatchToProps = (dispatch: ThunkDispatch<any,any, any>) => ({
    login: (payload: any) => dispatch(loginThunk(payload)) //payload son todos los datos del formulario
}) 
export default connect(mapStateToProps, mapDispatchToProps)(Login) //(Login)segunda vez que llamo a la función connect