
import './App.css';
import { Button } from './components/Button';
import { Header, Row } from './components/Row';
import { Col } from './components/Col';
import { Circle } from './components/Circle';


const App = () => {

  const alertfunc = ()=>alert("big alert boi");
  return (
    <>
        <Header growX spread right padding={'0px 40px'}>
          <Col growY middle>
            KNAXEL.NET
          </Col>
          <Circle style={{backgroundColor:'red', width: '50px'}} />
        </Header>

        <Row grow padding={'40px'}> 
          <Col growX center bottom>
            To the left
          </Col>
          <Col grow>
            <Row grow center middle >
              everything should be 
            </Row>
            <Row grow center middle > 
              centereed
            </Row>
          </Col>
        </Row>

        <Button text="button label" onClick={alertfunc}/>
        <Button text="text" onClick={alertfunc} disabled/>
    </>
  );
}

export default App;
