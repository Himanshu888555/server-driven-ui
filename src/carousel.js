import {React} from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Gbutton from './gbutton'
import Rbutton from './rbutton'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Text(props){
    
    const {data} = props
    const carouselData = Object.assign([],data)
    console.log(carouselData)

    return(
        <>
        <Carousel>
            {
                carouselData.data.map(({imgs,alt,text,text1,actions,style})=>{
                    return(
                        <Carousel.Item interval={1000}>
                            <img
                                className="d-block w-100"
                                style={style}
                                src={imgs}
                                alt={alt}
                            />
                            <Carousel.Caption>
                                <h3>{text}</h3>
                                <p>{text1}</p>
                                    {
                                    actions.type === "G-button" ? <Gbutton style={actions.style} reason={actions.reason} action={actions.action.url}/> : 
                                    actions.type === "R-button" ? <Rbutton style={actions.style} reason={actions.reason} action={actions.action.url}/> : ""
                                    }
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })
            }
        </Carousel>

        </>
    )
}