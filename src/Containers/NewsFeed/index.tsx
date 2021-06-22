import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import Container from '../../components/Container';
import Post from '../../components/Post'
import * as postsDuck from '../../ducks/Posts'

interface INewsFeedProps {
    fetchPosts: () => void
    fetched: boolean
    loading: boolean
    data: postsDuck.IDataposts
    like: (a: string) => void // necesitamos la refercias de cual es el posta al cual le damos like, por esto recibe un argumento, el cual es u string y es el id, el cual no retorna cosa alguna
    share: (a: string) => void //estos dos son thunks//estan definido en posts.ts
    
}

class NewsFeed extends React.Component<INewsFeedProps>{
constructor(props: INewsFeedProps ){//para despachar esta acción
    super(props)
    const {fetchPosts, fetched} = props 
    if(fetched){
        return
    }
    fetchPosts()
}   

public render(){
    const {data} = this.props
    return (
        <Container>      
                {Object.keys(data).map(x => {
                    const post = data[x]
                    return  <div key={x} style={{margin: '0 auto'}}>
                        <Post
                        share={this.handleShare(x)} 
                        like={this.handleLike(x)}//llamo a handleLike ... le paso el id que es x, pero esto no se ejecuta, ya que me retorna una función, se va a quedar esperando al que el usuario la pinche
                         image={post.imageURL}
                         />
                         </div>
                })}         
            </Container>
        )
    }
    private handleLike = (id:string)=> () => { //esto no se ejecuta hasta que pinchemos el boton//devuelve una función
        const {like} = this.props //destructuring del thunk de like desde las props
        like(id) //llamo a like con el id que defini antes
    }
    private handleShare = (id:string)=> () => {
        const {share} = this.props
        share(id)
    }
}

const mapStateToProps = (state: any) =>{
    const {Posts: {data, fetched, fetching}} = state
    const loading = fetching || !fetched
    return {
        data, 
        fetched, 
        loading,
    }
}
const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, any>) => bindActionCreators(postsDuck, dispatch) 

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed) 