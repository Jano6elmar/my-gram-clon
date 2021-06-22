import * as React from 'react'

const style = {
    color: 'blue',
    fontSize: '14px', 
    padding: '15px',
}

export default class Card extends React.Component {
    public render() {
        const {children} = this.props
        return (
           <a  {...this.props} style={style} />   
        )
    }
}