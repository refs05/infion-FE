import art from "../../assets/img/ilustration.svg";
import "./style.css";
function Ld_page() {
  return (
    <div className="body">
      <div className="container">
        <div className="row">
          <div className="col align-self-start">
            <p className=" text-1">INFION</p>
            <p className=" text-2">Infinity</p>
            <div className="yellow">
              <p className="text-3">Discussion</p>
            </div>
            <br/>
            <div className="desc_text">
            <p>Welcome to Infion ,</p>
            <p>Infinity Discussion</p>
            <p>Place where you can express your idea to </p>
            <p id="highlight">large count of people</p>
            </div>
            <br/>
            <p className="text-4"> What You Want to search Today ?</p>
            <input className="form-control" type="search" placeholder="Search something here" aria-label="default input example"/>
            <br/>
            <button type="button" className="btn btn-primary btn-lg rounded-pill tombol">Check Now !</button>
          </div>
          <div className="col align-self-end">
            <img className="img-fluid" src={art} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Ld_page;
