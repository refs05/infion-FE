import { Header } from "../../../src/components/header/header";
import style from "./createThread.module.css";
import Editor from "../quillEditor/editor";
import Footer from "../../../src/components/footer/footer";
import React, { useState } from 'react';


function createThread() {
  // const [image,setImage] = useState()
  // function preview(e){
  
  // }
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
            Express your opinion about anything with make thread , you can find
            inspiration and{" "}
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
              <div className={`mx-auto border bg-dark ${style.preview}`}></div>
            </div>
            <div>
              <h5 className="fw-normal  ms-1  my-5">Description</h5>

              <div className="mx-auto textBlack">
                <Editor></Editor>
              </div>
              <div className="my-4 form-check">
                {" "}
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="defaultCheck1"
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
            >
              Post
            </button>
            <button
              type="button"
              className={`btn btn-secondary float-end rounded-pill mx-auto me-4 ${style.red}`}
            >
              Reset
            </button>
            {/* </div>
          <div className="col"> */}{" "}
          </div>
        </div>
      </div>
      <br/>
      <br/>
      </div>
      <Footer></Footer>
    </>
  );
}
export default createThread;
