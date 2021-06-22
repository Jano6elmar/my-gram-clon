import * as React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faNewspaper} from '@fortawesome/free-solid-svg-icons'

const style = {
    navbar:{
        borderBottom: 'solid 1px #aaea',
        padding:'10px 15px'
    },
    Link:{
        color: '#555', 
        textDecoration:'none'

    }
    
}

export default class Navbar extends React.Component {
    public render() {
        return(
            <div style={style.navbar}>
               <Link to='/app/newsfeed' style={style.Link}><FontAwesomeIcon icon={faNewspaper} />PolyGram</Link>
               <div style={{float: 'right'}}><Link style={style.Link} to='/app/profile'><FontAwesomeIcon icon={faUser} />Perfil</Link>
                   </div> 

            </div>
        )
    }
}