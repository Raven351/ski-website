import React from 'react';
import './App.css';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'
import MainNavigation from './components/navigation/MainNavigation'
import HomePage from './pages/Home'
import SlopesPage from './pages/Slopes'

function App() {
  return(
<>    
    <BrowserRouter>
    <MainNavigation/>
    <Switch>
      <Redirect from ="/" to = "/home" exact/>
      <Route path = "/home" component = {HomePage}/>
      <Route path = "/slopes" component = {SlopesPage}/>
    </Switch>
    </BrowserRouter>
    {/* <Container>
      <Row>
        <Col lg={1}></Col>
        <Col lg={20}><Carousel/></Col>
        <Col lg={1}></Col>
      </Row>
    </Container> */}
    
</>
  )
}

export default App;
