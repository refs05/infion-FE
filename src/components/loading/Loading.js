import logo from './logo.svg';
import './loading.css';

function Loading(){
return(
    <div>
       <div className="Head">
        <img src={logo} className="load-logo" alt="logo" />
        <p>
         loading ......
        </p>
        </div>
      
    </div>
)
}
export default Loading