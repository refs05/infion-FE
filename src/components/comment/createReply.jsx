import axios from "axios";
import { useState } from "react";
import "./createReply.css";
import { useCookies } from "react-cookie";

const CreateReply = (props) => {
  const [cookies, setCookies] = useCookies(["id", "token"]);
  const config = {
    headers: { Authorization: `Bearer ${cookies.token}` },
  };
  const [values, setValues] = useState({
    user_id: parseInt(cookies.id),
    comment_id: props?.data,
    reply: "",
    like_count: 0,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios
      .post(`http://localhost:8000/replies/create`, values, config)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="col-11 mb-2" id="reply">
      <form>
        <div className="d-flex bd-highlight mb-1 align-items-center">
          <div className="p-2 bd-highlight">
            <img src={cookies.url_img} className="rounded-circle replyImg" alt="profile-img" />
          </div>
          <input
            className="ms-2 rounded-3 p-2 form-control me-3 text-white bg-dark"
            placeholder="Type something..."
            onChange={handleChange}
            value={values.reply}
            type="text"
            name="reply"
            required
          />
        </div>
        <div className="d-flex justify-content-end me-3">
          <div
            className="send px-4 py-1 rounded-3 mb-2"
            type="submit"
            onClick={handleSubmit}
          >
            Send
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateReply;
