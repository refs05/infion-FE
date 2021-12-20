import logo from '../../assets/img/logo.svg';
import './Loading.css';

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