
import { Link } from 'react-router-dom';
const home = () => {

    return ( 
        <div>
        <h1>Hello from Home page</h1>
        <div className="form-group">
       <Link to="/login">Login</Link>      </div></div>
     );
}
 
export default home;