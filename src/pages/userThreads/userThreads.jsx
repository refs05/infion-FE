import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import "./userThreads.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import like from "../../assets/img/love.svg";
import comment from "../../assets/img/comment.svg";
import logo1 from "../../assets/img/logoWithText.svg";
import { useCookies } from "react-cookie";

const UserThreads = () => {
  let { id } = useParams();

  const [cookies, setCookies] = useCookies(["token"]);

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [status, setStatus] = useState("");

  const config = {
    headers: { Authorization: `Bearer ${cookies.token}` },
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(
          `http://174.129.54.139:8000/threads/listbyuser/${id}`
        );
        setData(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  const [threadId, setThreadId] = useState(0);

  const sendThreadId = (idThread) => {
    return function () {
      setThreadId(idThread);
    };
  };

  const deleteThread = () => {
    // DELETE request using axios with error handling

    axios
      .delete(
        `http://174.129.54.139:8000/threads/${parseInt(threadId)}`,
        config
      )
      .then((response) => setStatus("Delete successful"))
      .catch((error) => {
        setErrorMessage(error.message);
        console.error("There was an error!", error);
      });
    window.location.reload();
  };

  return (
    <>
      <Header />
      <div className="bg-hitam">
        <div className="container sectionHeight1">
          <div className="bag pb-2">
            <div className="head d-flex justify-content-center align-items-end mb-1 px-2">
              <div className="title fs-4 mb-2">Your Threads</div>
            </div>
            <div class="d-flex flex-wrap">
              {data?.data?.map((item, index) => (
                <div class="card bg-transparent p-2 border-0" key={index}>
                  <Link
                    to={`/forum/${item.id}-${item.title
                      .toLowerCase()
                      .replace(/\s/g, "-")}`}
                    className="link"
                  >
                    <img
                      src={item.img}
                      alt="..."
                      className="card-img-top adjust mb-1"
                    />
                    <div className="wrapText my-2 fs-6">
                      {item.title.length >= 68
                        ? item.title.slice(0, 68) + "...."
                        : item.title}
                    </div>
                  </Link>

                  <div className="d-flex justify-content-between">
                    <div className="d-flex">
                      <div className="like d-flex align-items-center me-3">
                        <img src={like} alt="" />
                        {item.like_count}
                      </div>
                      <div className="comment d-flex align-items-center">
                        <img src={comment} alt="" />
                        {item.comment_count}
                      </div>
                    </div>
                  </div>
                  <p class="card-text text-end">
                    <small class="text-muted">
                      {new Date(item.created_at).toDateString()}
                    </small>
                  </p>
                  <div className="action d-flex justify-content-end">
                    <div className="editThread me-5" type="button">
                      <Link to={`/editThread/${item.id}`} className="linkEdit">
                        Edit
                      </Link>
                    </div>
                    <div
                      type="button"
                      className="deleteThread"
                      data-bs-toggle="modal"
                      data-bs-target="#ModalDelete"
                      onClick={sendThreadId(item.id)}
                    >
                      Delete
                    </div>
                  </div>
                  <div
                    className={`modal fade textBlack `}
                    id="ModalDelete"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-dialog-centered">
                      <div className={`modal-content mx-auto radius`}>
                        <div className="modal-header">
                          <h4
                            className="modal-title mx-auto fw-bolder"
                            id="exampleModalLabel"
                          >
                            Delete
                          </h4>
                        </div>
                        <div className="modal-body mx-4 d-flex flex-column align-items-center">
                          <div className="mb-3">Are you sure ?</div>
                          <div>
                            <button
                              type="button"
                              className={`btn btn-danger rounded-pill mx-auto me-2`}
                              onClick={deleteThread}
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            >
                              Yes
                            </button>
                            <button
                              type="button"
                              className={`btn btn-primary rounded-pill mx-auto`}
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                        <img
                          className={`mx-auto size mb-3`}
                          src={logo1}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserThreads;
