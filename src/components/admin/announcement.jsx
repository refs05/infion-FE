import { useState } from "react";
import "./announcement.css";
import axios from "axios";

const Announcement = () => {
  const [announcement, SetAnnouncement] = useState({
    moderatorId: 0,
    moderatorName: "",
    message: "",
  });

  const handleChange = (e) => {
    SetAnnouncement({ ...announcement, [e.target.name]: e.target.value });
  };

  const handleAnnnouncement = async (e) => {
    e.preventDefault();

    axios
      .post(`http://localhost:8000/announcement/create`, announcement)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  console.log(announcement.message);
  return (
    <div className="col-sm-5 mx-auto announ">
      <div className="title d-flex justify-content-center mb-3 fs-3">
        Create Announcement
      </div>
      <div className="content">
        <div className="d-flex align-items-center mb-3">
          <div className="me-4 reportContent fs-7">ID Moderator</div>
          <input
            type="text"
            className="bg-input rounded-3 px-1 fs-7"
            value="andi_23"
            readOnly
          />
        </div>
        <div className="d-flex align-items-center mb-3">
          <div className="me-4 reportContent fs-7">Moderator</div>
          <input
            type="text"
            className="bg-input rounded-3 px-1 fs-7"
            value="andi_23"
            readOnly
          />
        </div>
        <div className="">
          <div className="me-4 fs-6">Message</div>
          <textarea
            name="message"
            onChange={handleChange}
            id=""
            rows="7"
            className="rounded-3 px-1 w-100 fs-7"
          ></textarea>
        </div>
      </div>
      <div className="w-100 d-flex justify-content-end mt-2">
        <button
          type="button"
          class="btn btn-primary bg-send"
          onClick={handleAnnnouncement}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Announcement;
