import ListComment from "../../components/comment/listComment"
import Footer from "../../components/footer/footer"
import {Header, HeaderLogged} from "../../components/header/header"
import back from '../../assets/img/back.svg'
import axios from "axios"
import React, { useEffect, useState } from "react"
import upArrow from '../../assets/img/upArrow.svg'
import bullet from '../../assets/img/bullet.svg'
import './detailPage.css'

//temporary
import likeThread from '../../assets/img/likeThread.svg'
import commentThread from '../../assets/img/commentThread.svg'
import followThread from '../../assets/img/followThread.svg'

//dummy data
import imgThread from '../../assets/img/imgThreadEg.svg'

//mockRank
import { mockRank } from "../../mockData/mockRankUser"
import Leaderboard from "../../components/leaderboard/leaderboard"
import { mockThreadsSide } from "../../mockData/mockSideThread"


const DetailPage = ()=> {
    console.log(mockRank)
    let role = "moderator"

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([])

    useEffect(()=> {
        const fetchData = async () =>{
            setLoading(true);
            try {
              const {data: response} = await axios.get('http://localhost:8000/threads/1');
              setData(response);
            } catch (error) {
              console.error(error.message);
            }
            setLoading(false);
          }
      
          fetchData();
    }, [])

    console.log(data?.data)
    return (
        <>
            <Header />
            <div className="d-flex align-items-center back">
                <img src={back} alt="" className="me-1"/>
                <div type="button">Back</div>
            </div>
            <div className="container row m-auto">
                <div className="detail col-sm-9">
                    <div className="title fs-3 mb-3">{data?.data?.title}</div> 
                    <div className="headThread d-flex justify-content-between mb-3">
                        <div className="first">
                            <div className="date fs-8">09 December 2020</div>
                            <div className="follower fs-8">199 Followers</div>
                        </div>
                        <div className="second d-flex flex-column align-items-end">
                            <div className="creator fs-8">Oleh : Valez Fuera</div>
                            <div className="follower fs-8" type="button">Follow</div>
                        </div>
                    </div>
                    <div className="mb-3 rounded-2">
                        <img src={imgThread} alt="" className="img-fluid w-100"/>
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                        <div className="action d-flex">
                            <div className="ms-2 me-2 info">
                                <img src={likeThread} alt="" className="img-fluid" type="button"/>
                            </div>
                            <div className="ms-2 me-2 info">
                                <img src={commentThread} alt="" className="img-fluid" type="button"/>
                            </div>
                            <div className="ms-2 me-2 info">
                                <img src={followThread} alt="" className="img-fluid" type="button"/>
                            </div>
                        </div>
                        <div className="moderator">
                            <div className={ role == 'common' ? `reportHide d-flex align-items-center justify-content-center rounded-circle` : `report d-flex align-items-center justify-content-center rounded-circle`} type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Report
                            </div>
                            <div class="modal fade textBlack " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog ">
                                    <div class="modal-content borderReport">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Report Thread</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="d-flex align-items-center mb-2">
                                                <div className="me-4 reportContent">ID Thread</div>
                                                <input type="text" className="bg-input rounded-3 px-1" value="2" readOnly/>
                                            </div>
                                            <div className="d-flex align-items-center mb-2">
                                                <div className="me-4 reportContent">ID Reporter</div>
                                                <input type="text" className="bg-input rounded-3 px-1" value="20" readOnly/>
                                            </div>
                                            <div className="d-flex align-items-center mb-2">
                                                <div className="me-4 reportContent">Reporter</div>
                                                <input type="text" className="bg-input rounded-3 px-1" value="andi_23" readOnly/>
                                            </div>
                                            <div className="">
                                                <div className="me-4">Reason for report this thread</div>
                                                <textarea name="" id="" cols="55" rows="4" className="rounded-3 px-1"></textarea>
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <button type="button" class="btn btn-primary bg-send">Send</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mb-3">Liputan6.com, Jakarta Pemerintah melalui Badan Geologi Kementerian Energi dan Sumber Daya Mineral (ESDM)  menurunkan tim ahli untuk memperbarui peta Kawasan Rawan Bencana Gunung Semeru di Jawa Timur.
                    Tim Badan Geologi yang tengah berada di lokasi terdampak bencana melakukan pengambilan gambar dengan pesawat tanpa awak untuk mendapatkan gambaran terkini bukaan kawah Semeru yang mengarah ke selatan dan tenggara. "Hingga beberapa hari ke depan kegiatan ini masih kita lakukan, terutama di sekitar bukaan kawah yang ke arah selatan dan tenggara," kata Kepala Pusat Vulkanologi dan Mitigasi Bencana Geologi, Andiani dalam keterangan yang dikutip di Jakarta, Kamis (9/12/2021). Andiani mengungkapkan bahwa Badan Geologi akan menerjunkan ahli untuk melakukan pemetaan dan penelitian guna identifikasi awal dalam memperbarui peta kawasan rawan bencana Gunung Semeru. Badan Geologi juga akan menurunkan tim untuk melakukan pemetaan dalam rangka memperbaharui peta kawasan rawan bencana pada pekan depan. "Ini menjadi concern Badan Geologi, sehingga banyak ahli yang akan kami turunkan, mulai dari ahli geologi lingkungan hingga ahli kebencanaan, semua akan diturunkan, sekitar 10-15 orang. Kami akan all out," ujar Andiani. Dia juga mengimbau agar peta-peta yang dikeluarkan oleh Badan Geologi, termasuk peta kawasan rawan bencana dijadikan acuan agar masyarakat memahami karakter geologi suatu tempat, karena apa yang digambarkan di dalam peta tersebut merupakan prediksi. "Gambaran di dalam peta geologi itu tidak pernah ingkar janji. Jadi, mohon peta-peta yang sudah dikeluarkan Badan Geologi betul-betul dijadikan acuan, karena peta itu bercerita banyak," pungkas Andiani.
                    </div>
                    <div className="titleComment fs-4">Comment</div>
                    <ListComment />
                </div>
                <div className="sideContent col-sm-3 mt-5">
                    <Leaderboard data={mockRank}/>
                    <div className="border rounded-3 p-1 mt-4 d-none d-sm-block">
                        <div className="title d-flex justify-content-center fs-6 mb-1">Newest</div>
                        <div className="wrap">
                            {mockThreadsSide.map((item, index)=> (
                                <React.Fragment key={index}>
                                    <div className="d-flex align-items-start side">
                                        <img className=" me-1" src={bullet} alt="" /> 
                                        <div className="content fst-italic fs-8" type="button">{item.title}</div>
                                    </div>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                    <div className="border rounded-3 p-1 mt-4">
                        <div className="title d-flex justify-content-center fs-6 mb-1">See Also</div>
                        <div className="wrap">
                            {mockThreadsSide.map((item, index)=> (
                                <React.Fragment key={index}>
                                    <div className="d-flex align-items-start side">
                                        <img className=" me-1" src={bullet} alt=""/> 
                                        <div className="content fst-italic fs-8" type="button">{item.title}</div>
                                    </div>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                    {/* <div className="toUp border border-white">
                        <img src={upArrow} alt=""/>
                    </div> */}
                </div>
            </div>  
            <Footer />
        </>
    )  
}

export default DetailPage