import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faRetweet } from '@fortawesome/free-solid-svg-icons'
import Footer from './Footer'

const style = {
    backgroundColor : '#fff',
    padding:'10px 15px',
    border: '1px solid #ddd',
    marginBottom: '10px',
    width: '300px',
}
interface IPostProps{
    image: string,
    like: () => void
    share: () => void
}
export default class Post extends React.Component<IPostProps> {
    public render() {
        const {image, like, share} = this.props
        
        return (
            <div style={style}>
             <img src={image} alt="" style={{width:'300px'}}  /> 
             <Footer like={like} share={share}/>
             
           </div>    
        )
    }
}