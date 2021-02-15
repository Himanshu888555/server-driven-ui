import './App.css';
import {React, useEffect} from 'react' 
import data from './server.json'
import Carousel from './carousel'
import Text from './text'
import Nav from 'react-bootstrap/Nav'

function App() {

  const drivenData = data.data;

  return (
    <>
    <Nav
  activeKey="/home"
  onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
  > 
  <Nav.Item>
    <Nav.Link href="/home"> Home </Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1"> Profile </Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2"> Contact Us </Nav.Link>
  </Nav.Item>
</Nav>
    {
      drivenData.map(({type},index=0)=>{
        return(
          type === "carousel" ? <Carousel data={drivenData[index]} /> :
          type === "text" ? <Text data={drivenData[index]} />:""
                            
        )
      })
    }

    </>
  );
}

export default App;
