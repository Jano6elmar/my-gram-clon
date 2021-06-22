import * as React from 'react'

const style = {
    backgroundColor : '#fff',
    padding:'10px 15px',
    border: '1px solid #eee',
}

export default class Card extends React.Component {
    public render() {
        const {children} = this.props
        return (
            <div style={style}>
             {children}   
           </div>    
        )
    }
}