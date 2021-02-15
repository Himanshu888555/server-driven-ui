import {React} from 'react'

export default function Gbutton(props){
    const {action,reason,style} = props
    
    
    return(
        <>
            <a style={style} href={action} target="_blank">{reason}</a>
        </>
    )
}