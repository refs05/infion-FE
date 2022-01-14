import { Header } from "../header/header";
import logo from "../../assets/img/illustration.svg";
import style from "./home.module.css";
import Footer from "../footer/footer";
function HomeVisitor() {
  return (
    <>
      <Header></Header>

      <div class={`container-fluid  ${style.content}`}>
        <div class="row">
          <div class="col ms-5 ps-5">
            <div className="d-grid gap-2">
              <h6 className={style.infion}>INFION</h6>
              <h2 className={`fw-bolder ${style.infinity}`}>Infinity</h2>
              <div className={style.box}>
                <h2 className={`fw-bold ${style.discuss}`}>Discussion</h2>
              </div>

              <div className={`mt-3 ${style.h}`}>
                <p>Welcome to Infion , </p>
                <p>Infinity Discussion</p>
                <p>Place where you can express your idea to </p>
                <p className={style.highlight}> large count of people</p>
              </div>
              <br />
              <h5>What You Want to search Today ?</h5>
              <div className={`${style.search}`}>
                <div class="input-group mb-3">
                  <input
                    className={`form-control rounded-pill ${style.input}`}
                    type="search"
                    placeholder="search something here"
                    aria-label="Search"
                  />
                </div>

                <button
                  type="button"
                  className={`btn btn-lg btn-secondary rounded-pill my-1 ${style.btn}`}
                >
                  Check Now !
                </button>
              </div>
            </div>
          </div>
          <div class="col">
            <img src={logo} />
          </div>
        </div>
      </div>
      <br/>
      <br/>
      <Footer></Footer>
    </>
  );
}
export default HomeVisitor;
