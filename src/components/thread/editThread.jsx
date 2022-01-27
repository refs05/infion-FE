import Header from "../../../src/components/header/header";
import style from "./createThread.module.css";
import Footer from "../../../src/components/footer/footer";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useQuill } from "react-quilljs";
// import Editor from "../quillEditor/editor";
import fire from "../firebase/firebase";
import Swal from "sweetalert2";

function EditThread() {
    let { id } = useParams();
    let firstWord = id.split("-")[0];

    const [cookies, getAll] = useCookies(["username", "id", "token"]);
    const config = {
        headers: { Authorization: `Bearer ${cookies.token}` },
    };

    const [stat, setStat] = useState(true);
    const [image, setImage] = useState("");
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});
    const dataDetail = data?.data;
    const [form, setForm] = useState({
        title: dataDetail?.title,
        category: dataDetail?.category,
        img: dataDetail?.img,
        content: dataDetail?.content,
        user_id: dataDetail?.user_id,
    });

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const { data: response } = await axios.get(`http://localhost:8000/threads/${firstWord}`);
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
            setPreview(dataDetail?.img);
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
                .put(`http://localhost:8000/threads/${firstWord}`, form, config)
                .then(function (response) {
                    console.log(response);
                    // Swal.fire("Success Edit Thread!");
                    // window.location.reload();
                })
                .catch(function (error) {
                    console.log(error);
                });
        } else {
            const storageRef = fire.storage().ref();
            const fileRef = storageRef.child(image.name);
            fileRef.put(image).then((e) => {
                e.ref.getDownloadURL()?.then(function (downloadURL) {
                    var form2 = {
                        title: form.title,
                        category: form.category,
                        img: downloadURL,
                        content: "form.content",
                        user_id: form.user_id,
                    };
                    console.log(form2.img);
                    axios
                        .put(`http://localhost:8000/threads/${firstWord}`, form2, config)
                        .then(function (response) {
                            console.log(response);
                            // Swal.fire("Success Edit Profile!");
                            // window.location.reload();
                        })
                        .catch(function (error) {
                            console.log(error);
                        });
                });
            });
        }
    };

    const { quill, quillRef } = useQuill();
    let tesr;

    React.useEffect(() => {
        if (quill) {
            quill.on("text-change", (delta, oldDelta, source) => {
                // setForm({...form,
                //   content:quill.root.innerHTML
                // })
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
                            />
                        </div>
                        <div className="row">
                            <div className="col-lg-8">
                                <h5 className="fw-normal  ms-1  my-2">Upload Image</h5>
                                <input
                                    className={`form-control my-4 bg-dark ${style.form}`}
                                    type="file"
                                    placeholder="No File Choosen"
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
                                    {selectedFile && <img className="img-fluid w-100" src={preview} />}
                                </div>
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
                                        name="ceklis"
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
                                onClick={handleEdit}
                                disabled={stat}
                            >
                                Edit
                            </button>
                            <button type="button" className={`btn btn-secondary float-end rounded-pill mx-auto me-4 ${style.red}`}>
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