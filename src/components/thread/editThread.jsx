import Header from "../../../src/components/header/header";
import style from "./createThread.module.css";
import Editor from "../quillEditor/editor";
import Footer from "../../../src/components/footer/footer";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function EditThread() {
  let { id } = useParams();
  let firstWord = id.split("-")[0];

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const dataDetail = data?.data;
  const [form, setForm] = useState({
    title: dataDetail?.title,
    category: dataDetail?.category,
    img: dataDetail?.img,
    content: dataDetail?.content,
  });

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(
          `http://localhost:8000/threads/${firstWord}`
        );
        setData(response);
        setForm(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, [firstWord]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleEdit = async (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:8000/threads/${firstWord}`, form)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <Header></Header>
      <div className="bg-hitam">
        <div className={`mx-auto ${style.page}`}>
          <h3 className="text-center py-5 fw-bold">
            Edit Your <span className={style.yellow}>Thread</span>
          </h3>
          <div className="ms-4">
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
                <div
                 
                
                >
                    <img src={form?.img} className={` ${style.previewImg}`} alt="" />
                </div>
              </div>
              <div>
                <h5 className="fw-normal  ms-1  my-5">Description</h5>
                <div className="mx-auto textBlack">
                  <Editor value={form?.content}></Editor>
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
                onClick={handleEdit}
              >
                Edit
              </button>
              <button
                type="button"
                className={`btn btn-secondary float-end rounded-pill mx-auto me-4 ${style.red}`}
              >
                Reset
              </button>
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
export default EditThread;
