import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./userPage.css";
import { useParams } from "react-router-dom";

//dummy
import userImg from "../../assets/img/userImg.svg";
import { useCookies } from "react-cookie";

const DetailPage = () => {
  let { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const dataDetail = data?.data;
  const [edit, setEdit] = useState(false);
  const [cookies, setCookies] = useCookies(["token"]);
  const [form, setForm] = useState({
    username: dataDetail?.username,
    email: dataDetail?.email,
    password: "",
    passwordc: "",
    role_id: 1,
    url_img: dataDetail?.url_img,
  });

  const config = {
    headers: { Authorization: `Bearer ${cookies.token}` },
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(
          `http://localhost:8000/user/${id}`,
          config
        );
        setData(response);
        setForm(response.data);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const changeEdit = () => {
    setEdit(!edit);
  };

  //Preview Img
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    setSelectedFile(e.target.files[0]);
  };

  const handleEdit = async (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:8000/user/${id}`, form, config)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <Header />
      <div className="bg-hitam">
        <div className="d-flex justify-content-center fs-4">
          Your <span className="yellow ms-2">Profile</span>
        </div>
        <div className="row container m-auto sectionHeight">
          <div className="col-2 d-flex flex-column align-items-center">
            <div className="mb-3">
              {/* {data?.data?.url_img}*/}
              <img src={userImg} alt="photo-profile" className="photoProfile" />
            </div>
            <div className="fs-5 nameProfile mb-4">{data?.data?.username}</div>
            {edit ? (
              <div className="col">
                <label>Email</label>
                <input
                  type="text"
                  className="editInput border rounded-3 mb-2 px-2 py-1"
                  name="email"
                  value={form?.email}
                  onChange={handleChange}
                />
                <label>Password</label>
                <input
                  type="text"
                  className="editInput border rounded-3 mb-2 px-2 py-1"
                  required
                  name="password"
                  value={form?.password}
                  onChange={handleChange}
                />
                <label>Password Confirmation</label>
                <input
                  type="text"
                  className="editInput border rounded-3 mb-2 px-2 py-1"
                  required
                  name="passwordc"
                  value={form?.passwordc}
                  onChange={handleChange}
                />
                <label>Edit Profile Picture</label>
                <div className="position-relative upload border rounded-3 mb-3">
                  <label
                    htmlFor="uploadPhoto"
                    className="px-3 py-1 border rounded-3"
                  >
                    Select
                  </label>
                  <input
                    type="file"
                    className="hideUpload position-absolute"
                    id="uploadPhoto"
                    name="url_img"
                    value={form?.url_img}
                    onChange={onSelectFile}
                  />
                </div>
                <div className="d-flex justify-content-center">
                  {selectedFile && (
                    <img
                      src={preview}
                      alt="profile"
                      className="previewProfile rounded-circle mb-2"
                    />
                  )}
                </div>
                <div className="row d-flex justify-content-between m-auto">
                  <button
                    onClick={changeEdit}
                    className="cancel col-5 btn btn-danger"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleEdit}
                    className="save col-5 btn btn-primary"
                  >
                    Save
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={changeEdit}
                className="editButton px-3 py-1 border rounded-3"
              >
                Edit Profile
              </button>
            )}
          </div>
          <div className="col-10">
            <div className="row d-flex justify-content-evenly">
              <div className="border rounded-3 p-3 mt-4 d-none d-sm-block col-5">
                <div className="border rounded-3 box-title px-1 ms-3">
                  Account
                </div>
                <div className="row mt-2">
                  <div className="col d-flex justify-content-center">
                    <div className="d-flex flex-column">
                      <div className="d-flex justify-content-center fs-4">
                        Follower
                      </div>
                      <div className="d-flex justify-content-center fs-5">
                        {data?.data?.follower_count}
                      </div>
                    </div>
                  </div>
                  <div className="col d-flex justify-content-center">
                    <div className="d-flex flex-column">
                      <div className="d-flex justify-content-center fs-4">
                        Like
                      </div>
                      <div className="d-flex justify-content-center fs-5">
                        {data?.data?.like_count}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border rounded-3 p-3 mt-4 d-none d-sm-block col-5">
                <div className="title border rounded-3 box-title px-1 ms-3">
                  Thread
                </div>
                <div className="row mt-2">
                  <div className="col d-flex justify-content-center">
                    <div className="d-flex flex-column">
                      <div className="d-flex justify-content-center fs-4">
                        Follower
                      </div>
                      <div className="d-flex justify-content-center fs-5">
                        {data?.data?.thread_follower_count}
                      </div>
                    </div>
                  </div>
                  <div className="col d-flex justify-content-center">
                    <div className="d-flex flex-column">
                      <div className="d-flex justify-content-center fs-4">
                        Following
                      </div>
                      <div className="d-flex justify-content-center fs-5">
                        {data?.data?.thread_following_count}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row d-flex justify-content-evenly">
              <div className="border rounded-3 p-3 mt-4 d-none d-sm-block col-5">
                <div className="title border rounded-3 box-title px-1 ms-3">
                  Thread
                </div>
                <div className="row mt-2">
                  <div className="col d-flex justify-content-center">
                    <div className="d-flex flex-column">
                      <div className="d-flex justify-content-center fs-4">
                        Your Thread
                      </div>
                      <div className="d-flex justify-content-center fs-5">
                        {data?.data?.thread_count}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col d-flex justify-content-center">
                    <div className="d-flex flex-column">
                      <div className="d-flex justify-content-center fs-4">
                        Like
                      </div>
                      <div className="d-flex justify-content-center fs-5">
                        {data?.data?.like_count}
                      </div>
                    </div>
                  </div>
                  <div className="col d-flex justify-content-center">
                    <div className="d-flex flex-column">
                      <div className="d-flex justify-content-center fs-4">
                        Your Comment
                      </div>
                      <div className="d-flex justify-content-center fs-5">
                        {data?.data?.comment_count}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border rounded-3 p-3 mt-4 d-none d-sm-block col-5">
                <div className="title border rounded-3 box-title px-1 ms-3">
                  Rank
                </div>
                <div className="mt-2">
                  <div className="d-flex justify-content-center">
                    <div className="d-flex flex-column mt-3">
                      <div className="d-flex justify-content-center fs-4">
                        Your Rank
                      </div>
                      <div className="d-flex justify-content-center fs-5">
                        {data?.data?.rank}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DetailPage;
