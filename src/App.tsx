import React from 'react';
import './App.css';
import {Route} from 'react-router'
import { History } from 'history';
import Register from './Containers/Auth/Register';
import Login from './Containers/Auth/Login';
import NewsFeed from './Containers/NewsFeed';
import Profile from './Containers/Profile';
import Navbar from './components/Navbar';
import services from './services'

interface IAppProps {
  history: History
}
class App extends React.Component<IAppProps>{
  public state = {
    loading: true,
  }
 
  public componentDidMount(){
    const {auth} = services 
    auth.onAuthStateChanged(user => {
      if (user){
        if (['/', '/register'].indexOf(window.location.pathname) > -1 ) {          
          const {history} = this.props
          history.push('/app/newsfeed')
        }      
      }else {
        //formato de la ruta /app/anystring, eso es lo que quiere decir la expresion regular de abajo
        if(/\app\/./.test(window.location.pathname)){// aqui pregunto por una expresión regular (regex) el backslash quiere decir, utilizame el slash, 
        //hazme un escapado del caracter pra que me tome slash como parte de los caracteres qe yo quiero validar 
        const {history} = this.props
        history.push('/')
      } 
       
      }      
      this.setState({
        loading: false,
      })
    })
  }
   public render() {
     const {loading} = this.state //obtengo el atributo de loading desde state
      return (
        loading ? 'Loading...' :  
      <div>
        <Route exact={true} path='/' component={Login} />
        <Route exact={true} path="/register" component={Register} />
        <Route path="/app" component={Navbar} />
        <Route exact={true} path="/app/newsfeed" component={NewsFeed} />
        <Route exact={true} path="/app/profile" component={Profile} />
      

        
        
      </div>
      )
    }
  }

export default App;
