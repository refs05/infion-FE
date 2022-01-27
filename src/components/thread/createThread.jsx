import Header from "../../../src/components/header/header";
import style from "./createThread.module.css";
import Footer from "../../../src/components/footer/footer";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useQuill } from "react-quilljs";
import fire from "../firebase/firebase";
import "quill/dist/quill.snow.css";
import { useCookies } from "react-cookie";
import Swal from "sweetalert2";

function CreateThread() {
  const [cookies, getAll] = useCookies(["username", "id", "token"]);
  const [done, setDone] = useState("");
  const [stat, setStat] = useState(true);
  const [image, setImage] = useState("");
  getAll();
  const [form, setForm] = useState({
    user_id: parseInt(cookies.id),
    title: "",
    category: "",
    img: "",
    content: "",
  });

  const { quill, quillRef } = useQuill();
  let tesr;

  React.useEffect(() => {
    if (quill) {
      quill.on("text-change", (delta, oldDelta, source) => {
        tesr = quill.root.innerHTML; // Get innerHTML using quill
        setForm((form) => {
          return {
            ...form,
            content: tesr,
          };
        });
      });
    }
  }, [quill]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const storageRef = fire.storage().ref();
    const fileRef = storageRef.child(image.name);
    const upload = fileRef.put(image).then((e) => {
      e.ref.getDownloadURL()?.then(function (downloadURL) {
        var kirim = {
          user_id: parseInt(cookies.id),
          title: form.title,
          category: form.category,
          img: downloadURL,
          content: form.content,
        };
        getAll();
        axios.defaults.headers.common = {
          Authorization: `bearer ${cookies.token}`,
        };
        axios
          .post(`http://174.129.54.139:8000/threads/create`, kirim)
          .then(function (response) {
            console.log(response.data);
            setDone("berhasil");
          })
          .catch(function (error) {
            console.log(error);
          });
      });
    });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });

    if (e.target.name == "ceklis") {
      if (form.title != "" && form.content != "" && form.category != "") {
        setStat("");
      } else {
        setStat("true");
      }
    }
  };
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

  return (
    <>
      <Header></Header>
      <div className="bg-hitam">
        <div className={`mx-auto ${style.page}`}>
          <h3 className="text-center py-5 fw-bold">
            Make Your <span className={style.yellow}>Thread</span>
          </h3>
          <div className="ms-4">
            <h5>
              Express your opinion about anything with make thread , you can
              find inspiration and{" "}
            </h5>
            <h5> solution from other people with other perspective</h5>
            <br />
            <h5>
              {" "}
              What thing you want to share to our community today ? Let’s start
              writing{" "}
            </h5>
            <br />

            <div>
              <h5 className="fw-normal  ms-1  my-2">Title</h5>
              <input
                className={`form-control my-4 bg-dark ${style.form}`}
                type="text"
                placeholder="Example Title"
                name="title"
                value={form?.title}
                onChange={handleChange}
                maxLength={149}
              />
            </div>
            <div className="row">
              <div className="col-lg-8">
                <h5 className="fw-normal  ms-1  my-2">Upload Image</h5>
                <input
                  className={`form-control my-4 bg-dark ${style.form}`}
                  type="file"
                  placeholder="No File Choosen"
                  // onChange={preview}
                  onChange={onSelectFile}
                />
              </div>
              <div className="col-lg-3 ms-5 ps-3">
                <h5 className="fw-normal  ms-1  my-2">Category</h5>
                <select
                  className={`form-select primary bg-dark my-4 ${style.form}`}
                  id="inputGroupSelect01"
                  name="category"
                  value={form?.category}
                  onChange={handleChange}
                >
                  <option selected>Choose...</option>
                  <option value="Health">Health</option>
                  <option value="Science">Science</option>
                  <option value="Technology">Technology</option>
                  <option value="Lifestyle">Lifestyle</option>
                  <option value="Game">Game</option>
                  <option value="Sport">Sport</option>
                  <option value="Food">Food</option>
                  <option value="Music">Music</option>
                </select>
              </div>
              <div>
                <h5 className="fw-normal  ms-1  my-2">Preview Image</h5>
                <div className={`mx-auto bg-dark ${style.preview}`}>
                  {selectedFile && (
                    <img className="img-fluid w-100" src={preview} />
                  )}
                </div>
                <br />
                {/* <button className={`btn  btn-secondary rounded-pill mx-auto ${style.bru}`} onClick={btnUpload}>Upload</button> */}
              </div>
              <div>
                <h5 className="fw-normal  ms-1  my-5">Description</h5>

                <div className={`mx-auto textBlack ${style.text_editor}`}>
                  <div className={`${style.isian}`} ref={quillRef} />
                </div>
                <div className="my-4 form-check">
                  {" "}
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="defaultCheck1"
                    // name="ceklis"
                    onChange={handleChange}
                  />
                  <label>
                    I have read Infion{" "}
                    <a href="#" className={style.blue}>
                      Terms
                    </a>{" "}
                    about Thread
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              {" "}
              <button
                type="button"
                className={`btn btn-secondary float-end  rounded-pill mx-auto ${style.purple}`}
                // disabled={stat}
                onClick={handleSubmit}
              >
                Post
              </button>
              <button
                type="button"
                className={`btn btn-secondary float-end rounded-pill mx-auto me-4 ${style.red}`}
                onClick={() => window.location.reload()}
              >
                Reset
              </button>
              {/* </div>
          <div className="col"> */}{" "}
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
      <Footer></Footer>
    </>
  );
}
export default CreateThread;
