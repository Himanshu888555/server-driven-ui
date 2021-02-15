import {React} from 'react'
import Gbutton from './gbutton'
import Rbutton from './rbutton'

export default function Text(props){
    
    const {data} = props
    const textData = Object.assign([],data)
    console.log(textData.action)

    return(
        <div style={{margin:"50px"}}>
            {
                textData.data.map(({para,parastyle})=>{
                        return(
                            <div>
                                <p style={parastyle}>{para}</p>
                            </div>
                        )
                })
            }
            {

                textData.action.map(({type,action,reason,style})=>{
                    return (
                            type === "G-button" ? <Gbutton style={style} reason={reason} action={action.url}/> : 
                            type === "R-button" ? <Rbutton style={style} reason={reason} action={action.url}/> : ""
                        )
                })
            }
        </div>
    )
}
