import * as React from 'react'
import {WrappedFieldsProps} from 'redux-form' //propiedades de un componente envuelte

const style = {
    backgroundColor : '#fff',
    padding:'10px 15px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    width: 'calc(100% - 30px)',
    marginBottom: '10px',
}
const spanStyle = {
    color: '#888',
    fontSize: '11px',
    textTransform: 'uppercase',
    fontWeight: 900,
} as React.CSSProperties

interface IInputProps {
    placeholder?: string
    label: string
}
//queremos que este componente (stateless component) nos devuelve un componente puro, y así nosotros poder 
//aprovechar de tomar las propiedades que nosotros declaramos y tambien las props que recibe
//un componente el cual se le pasa a la prop de compoenente del componente de alto orden "Field" 
const Input: React.FC<WrappedFieldsProps & IInputProps> = props => {
    const {label} = props
    
    return(
        <div>
            <span style={spanStyle}>{label}</span>
            <input {...props} {...props.input} style={style} />
        </div>
    )
}

export default Input;

/* en la clase 64 sugiere cmbiar esto por lo de arriba
//export default class Input extends React.Component<IInputProps> {
    public render() {
        const {label} = this.props
        return (
            <div>
                <span style={spanStyle}>{label}</span>
                <input {...this.props} style={style} />
                
            </div>
        )
    }
} */
