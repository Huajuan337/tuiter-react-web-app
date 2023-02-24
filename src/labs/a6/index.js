import {Link} from 'react-router-dom'; 
import Nav from '../../nav'; 
import Classes from './classes'; 
import Styles from './styles'; 
import ConditionalOutput from './conditional-output'



function Assignment6() {
    return (
      <div>
        <Nav/>
        <h1>Assignment 6</h1>
        <ConditionalOutput/>
        <Styles/>
        <Classes/>
      </div>
    );
   }
   export default Assignment6;