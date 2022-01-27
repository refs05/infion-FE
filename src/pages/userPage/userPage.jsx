import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./userPage.css";
import { useParams } from "react-router-dom";
import fire from "../../components/firebase/firebase";
import { useCookies } from "react-cookie";
import Swal from "sweetalert2";

const DetailPage = () => {
  let { id } = useParams();
  const passRegex =
    /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/;

  const [errMsg, setErrMsg] = useState({
    password: "",
    passwordConf: "",
  });
  //   const [errMsg, setErrMsg] = useState();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const dataDetail = data?.data;
  const [edit, setEdit] = useState(false);
  const [cookies, setCookies] = useCookies(["token", "role_id"]);
  const [stat,setStat] = useState("true");
  const [form, setForm] = useState({
    username: dataDetail?.username,
    email: dataDetail?.email,
    // password: "",
    role_id: cookies?.role_id,
    url_img: dataDetail?.url_img,
  });
  const [image, setImage] = useState("");

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
    if (e.target.name == "password") {
      setForm({ ...form, password: e.target.value });
      if (e.target.value === "") {
       
        setErrMsg({
          ...errMsg,
          password: "",
        });
        setStat("true");
        
      } else if (!passRegex.test(e.target.value)) {
        setErrMsg({
          ...errMsg,
          password: "Wrong Password Format. Must contain at least one alphabetical and numberical characters. Must at least 8 characters long.",
        });
        setStat("true");
      } else {
        setErrMsg({
          ...errMsg,
          password: "",
        });
        if(form.passwordConf != ""  && form.email != "" && errMsg.password== ""){ setStat("");}
      }
    } else if (e.target.name == "passwordConf") {
        setForm({ ...form, passwordConf: e.target.value });
      if (e.target.value === "") {
        setErrMsg({
          ...errMsg,
          passwordConf: "",
        });
        setStat("true");
      } else if (e.target.value == form.password) {
        setErrMsg({
          ...errMsg,
          passwordConf: "",
        });
        if(form.password != "" && form.email != ""   && errMsg.password== ""){ setStat("");}
       
      } else {
        setErrMsg({
          ...errMsg,
          passwordConf: "Password does   not Match.",
        });
        setStat("true");
      }
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
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
    setImage(e.target.files[0]);
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    if (image === "") {
      setForm({ ...form, url_img: dataDetail?.image });
      axios
        .put(`http://localhost:8000/user/${id}`, form, config)
        .then(function (response) {
          if(response?.data){
          Swal.fire(
            "Success Edit Profile!"
           
          );}
          window.location.reload();
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      e.preventDefault();
      const storageRef = fire.storage().ref();
      const fileRef = storageRef.child(image.name);
      fileRef.put(image).then((e) => {
        e.ref.getDownloadURL()?.then(function (downloadURL) {
          console.log("image: ", downloadURL);
          console.log("form: ", form);
          var form2 = {
            username: form.username,
            email: form.email,
            password: form.password,
            passwordc: form.passwoordc,
            role_id: form.role,
            url_img: downloadURL,
          };
          console.log("password form2:", form2.password);
          console.log("image form2:", form2.url_img);
          axios
            .put(`http://localhost:8000/user/${id}`, form2, config)
            .then(function (response) {
              console.log(response);
              Swal.fire(
                "Success Edit Profile!"
               
              );
              window.location.reload();
            })
            .catch(function (error) {
              console.log(error);
            });
        });
      });
    }
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
              <img
                src={data?.data?.url_img}
                alt="profile-img"
                className="photoProfile"
              />
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
                  type="password"
                  className="editInput border rounded-3 mb-2 px-2 py-1"
                  required
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                />
                <label className="merah">{errMsg.password}</label>
                <label>Password Confirmation</label>
                <input
                  type="password"
                  className="editInput border rounded-3 mb-2 px-2 py-1"
                  required
                  name="passwordConf"
                  onChange={handleChange}
                />
                <label className="merah">{errMsg.passwordConf}</label>
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
                    name="photo"
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
                    disabled={stat}
                  >
                    Save
                  </button>
                </div>
              </div>
            ) : (
              // className="editButton px-3 py-1 border rounded-3"
              <button
                onClick={changeEdit}
                className={
                  id !== cookies.id
                    ? "hiddenButton"
                    : "editButton px-3 py-1 border rounded-3"
                }
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
