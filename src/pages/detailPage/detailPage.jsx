import ListComment from "../../components/comment/listComment"
import Footer from "../../components/footer/footer"
import Header from "../../components/header/header"
import back from '../../assets/img/back.svg'
import axios from "axios"
import React, { useEffect, useState } from "react"
import upArrow from '../../assets/img/upArrow.svg'
import bullet from '../../assets/img/bullet.svg'
import './detailPage.css'
import { useParams } from "react-router-dom"

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
    // console.log(mockRank)
    let { id } = useParams()
    console.log(id)
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([])

    const [loadingComment, setLoadingComment] = useState(true);
    const [dataComment, setDataComment] = useState([])

    const [loadingSubComment, setLoadingSubComment] = useState(true);
    const [dataSubComment, setDataSubComment] = useState([])

    useEffect(()=> {
        const fetchData = async () =>{
            setLoading(true);
            try {
              const {data: response} = await axios.get(`http://localhost:8000/threads/${id}`);
              setData(response);
            } catch (error) {
              console.error(error.message);
            }
            setLoading(false);
          }
      
          fetchData();
    }, [])


    useEffect(()=> {
        const fetchData = async () =>{
            setLoadingComment(true);
            try {
              const {data: response} = await axios.get(`http://localhost:8000/comments/listbythread/${id}`);
              setDataComment(response   );
            } catch (error) {
              console.error(error.message);
            }
            setLoadingComment(false);
          }
      
          fetchData();
    }, [])

    useEffect(()=> {
        const fetchData = async () =>{
            setLoadingSubComment(true);
            try {
              const {data: response} = await axios.get(`http://localhost:8000/replies/listbycomment/${id}`);
              setDataSubComment(response   );
            } catch (error) {
              console.error(error.message);
            }
            setLoadingSubComment(false);
          }
      
          fetchData();
    }, [])


    const dataDetail = data?.data
    const dataComments = dataComment?.data 
    const dataSubComments = dataSubComment?.data
    console.log(data?.data)
    console.log(dataComment?.data)
    console.log(dataSubComment?.data)
    return (
        <>
            <Header />
            <div className="d-flex align-items-center back">
                <img src={back} alt="" className="me-1"/>
                <div type="button">Back</div>
            </div>
            <div className="container row m-auto">
                <div className="detail col-sm-9">
                    <div className="title fs-3 mb-3">{dataDetail?.title}</div> 
                    <div className="headThread d-flex justify-content-between mb-3">
                        <div className="first">
                            <div className="date fs-8">{dataDetail?.created_at}</div>
                            <div className="follower fs-8">199 Followers</div>
                        </div>
                        <div className="second d-flex flex-column align-items-end">
                            <div className="creator fs-8">Oleh : {dataDetail?.username}</div>
                            <div className="follower fs-8" type="button">Follow</div>
                        </div>
                    </div>
                    <div className="mb-3 rounded-2">
                        <img src={data?.data?.img} alt="" className="img-fluid w-100"/>
                    </div>
                    <div className="d-flex mb-3">
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
                    <div className="mb-3">{dataDetail?.content}
                    </div>
                    <div className="titleComment fs-4">Comment</div>
                    <ListComment data={{comment: dataComments, subComment: dataSubComments}}/>
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