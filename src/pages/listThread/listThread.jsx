import Footer from "../../components/footer/footer"
import Header from "../../components/header/header"
import Leaderboard from "../../components/leaderboard/leaderboard"
import orderBullet from "../../assets/img/bulletFilter.svg"
import like from "../../assets/img/love.svg";
import comment from "../../assets/img/comment.svg";
import './listThread.css'

//mockRank
import { mockRank } from "../../mockData/mockRankUser"

//dummyData
import imgThread from '../../assets/img/imgThreadEg.svg'

const ListThread = ()=> {
    return (
        <>
            <Header/>
            <div class="container mb-4">
                <div class="row height d-flex justify-content-center align-items-center">
                    <div class="col-md-7">
                        <div class="search d-flex">
                            <input type="text" class="form-control" placeholder="Search here..."/> 
                        </div>
                    </div>
                </div>
            </div>
            <div className="container m-auto row">
                <div className="leftContent col-sm-2">
                    <div className="filter border rounded-3 p-3 mb-4">
                        <div className="title d-flex justify-content-center mb-1">Filter</div>
                        <div className="content">
                            <div className="isi d-flex align-items-center mb-1 bullet">
                                <img src={orderBullet} alt="" className="me-2"/>
                                None
                            </div>
                            <div className="isi d-flex align-items-center mb-1 bullet">
                                <img src={orderBullet} alt="" className="me-2"/>
                                Oldest
                            </div>
                            <div className="isi d-flex align-items-center mb-1 bullet">
                                <img src={orderBullet} alt="" className="me-2"/>
                                Newest
                            </div>
                            <div className="isi d-flex align-items-center mb-1 bullet">
                                <img src={orderBullet} alt="" className="me-2"/>
                                Top Threads
                            </div>
                            <div className="isi d-flex align-items-center mb-1 bullet">
                                <img src={orderBullet} alt="" className="me-2"/>
                                By Like
                            </div>
                            <div className="isi d-flex align-items-center mb-1 bullet">
                                <img src={orderBullet} alt="" className="me-2"/>
                                By Comment
                            </div>
                            <div className="isi d-flex align-items-center mb-1 bullet">
                                <img src={orderBullet} alt="" className="me-2"/>
                                By Follower
                            </div>
                        </div>
                    </div>
                    <div className="category border rounded-3 p-3">
                        <div className="title d-flex justify-content-center mb-1">Category</div>
                        <div className="content">
                            <div className="isi d-flex align-items-center mb-1 bullet active">
                                <img src={orderBullet} alt="" className="me-2"/>
                                Health
                            </div>
                            <div className="isi d-flex align-items-center mb-1 bullet">
                                <img src={orderBullet} alt="" className="me-2"/>
                                Science
                            </div>
                            <div className="isi d-flex align-items-center mb-1 bullet">
                                <img src={orderBullet} alt="" className="me-2"/>
                                Technology
                            </div>
                            <div className="isi d-flex align-items-center mb-1 bullet">
                                <img src={orderBullet} alt="" className="me-2"/>
                                Lifestyle
                            </div>
                            <div className="isi d-flex align-items-center mb-1 bullet">
                                <img src={orderBullet} alt="" className="me-2"/>
                                Game
                            </div>
                            <div className="isi d-flex align-items-center mb-1 bullet">
                                <img src={orderBullet} alt="" className="me-2"/>
                                Sport
                            </div>
                            <div className="isi d-flex align-items-center mb-1 bullet">
                                <img src={orderBullet} alt="" className="me-2"/>
                                Food
                            </div>
                            <div className="isi d-flex align-items-center mb-1 bullet">
                                <img src={orderBullet} alt="" className="me-2"/>
                                Music
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mainContent col-sm-7">
                    <div className="bag mb-4">
                        <div className="head d-flex justify-content-between align-items-end mb-1 px-2">
                            <div className="title fs-5">Top Threads</div>
                            <div className="viewmore">View more...</div>
                        </div>
                        <div class="card-group">
                            <div class="card bg-transparent p-2 border-0">
                                <img src={imgThread} class="card-img-top" alt="..." className="mb-1"/>
                                <p class="card-text cardText" >This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <div className="d-flex justify-content-between">
                                    <div className="d-flex">
                                        <div className="like d-flex align-items-center me-3">
                                            <img src={like} alt=""/>
                                            18
                                        </div>
                                        <div className="comment d-flex align-items-center">
                                            <img src={comment} alt=""/>
                                            18
                                        </div>
                                    </div>
                                    <div className="follow d-flex align-items-center">Follow</div>
                                </div>
                                <p class="card-text text-end"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                            <div class="card bg-transparent p-2 border-0">
                                <img src={imgThread} class="card-img-top" alt="..." className="mb-1"/>
                                <p class="card-text cardText" >This card has supporting text below as a natural lead-in to additional content.sssssssssssssssssssssssssssssssssssss</p>
                                <div className="info d-flex justify-content-between">
                                    <div className="detail d-flex">
                                        <div className="like d-flex align-items-center me-3">
                                            <img src={like} alt="" />
                                            18
                                        </div>
                                        <div className="comment d-flex align-items-center">
                                            <img src={comment} alt="" />
                                            18
                                        </div>
                                    </div>
                                    <div className="follow d-flex align-items-center">Follow</div>
                                </div>
                                <p class="card-text text-end"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                            <div class="card bg-transparent p-2 border-0">
                                <img src={imgThread} class="card-img-top" alt="..." className="mb-1"/>
                                <p class="card-text cardText" >This is a wider card with supporting text below as a natural lead-in to additional content.sssssssssssssssss</p>
                                <div className="info d-flex justify-content-between">
                                    <div className="detail d-flex">
                                        <div className="like d-flex align-items-center me-3">
                                            <img src={like} alt="" />
                                            18
                                        </div>
                                        <div className="comment d-flex align-items-center">
                                            <img src={comment} alt="" />
                                            18
                                        </div>
                                    </div>
                                    <div className="follow d-flex align-items-center">Follow</div>
                                </div>
                                <p class="card-text text-end"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                    <div className="bag mb-4">
                        <div className="head d-flex justify-content-between align-items-end mb-1 px-2">
                            <div className="title fs-5">Newest Threads</div>
                            <div className="viewmore">View more...</div>
                        </div>
                        <div class="card-group">
                            <div class="card bg-transparent p-2 border-0">
                                <img src={imgThread} class="card-img-top" alt="..." className="mb-1"/>
                                <p class="card-text cardText" >This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <div className="info d-flex justify-content-between">
                                    <div className="detail d-flex">
                                        <div className="like d-flex align-items-center me-3">
                                            <img src={like} alt="" />
                                            18
                                        </div>
                                        <div className="comment d-flex align-items-center">
                                            <img src={comment} alt="" />
                                            18
                                        </div>
                                    </div>
                                    <div className="follow d-flex align-items-center">Follow</div>
                                </div>
                                <p class="card-text text-end"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                            <div class="card bg-transparent p-2 border-0">
                                <img src={imgThread} class="card-img-top" alt="..." className="mb-1"/>
                                <p class="card-text cardText" >This card has supporting text below as a natural lead-in to additional content.sssssssssssssssssssssssssssssssssssss</p>
                                <div className="info d-flex justify-content-between">
                                    <div className="detail d-flex">
                                        <div className="like d-flex align-items-center me-3">
                                            <img src={like} alt="" />
                                            18
                                        </div>
                                        <div className="comment d-flex align-items-center">
                                            <img src={comment} alt="" />
                                            18
                                        </div>
                                    </div>
                                    <div className="follow d-flex align-items-center">Follow</div>
                                </div>
                                <p class="card-text text-end"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                            <div class="card bg-transparent p-2 border-0">
                                <img src={imgThread} class="card-img-top" alt="..." className="mb-1"/>
                                <p class="card-text cardText">This is a wider card with supporting text below as a natural lead-in to additional content.sssssssssssssssss</p>
                                <div className="info d-flex justify-content-between">
                                    <div className="detail d-flex">
                                        <div className="like d-flex align-items-center me-3">
                                            <img src={like} alt="" />
                                            18
                                        </div>
                                        <div className="comment d-flex align-items-center">
                                            <img src={comment} alt="" />
                                            18
                                        </div>
                                    </div>
                                    <div className="follow d-flex align-items-center">Follow</div>
                                </div>
                                <p class="card-text text-end"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                    <div className="bag mb-4">
                        <div className="head d-flex justify-content-between align-items-end mb-1 px-2">
                            <div className="title fs-5">Recommendation Threads</div>
                            <div className="viewmore">View more...</div>
                        </div>
                        <div class="card-group">
                            <div class="card bg-transparent p-2 border-0">
                                <img src={imgThread} class="card-img-top" alt="..." className="mb-1"/>
                                <p class="card-text cardText" >This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <div className="info d-flex justify-content-between">
                                    <div className="detail d-flex">
                                        <div className="like d-flex align-items-center me-3">
                                            <img src={like} alt="" />
                                            18
                                        </div>
                                        <div className="comment d-flex align-items-center">
                                            <img src={comment} alt="" />
                                            18
                                        </div>
                                    </div>
                                    <div className="follow d-flex align-items-center">Follow</div>
                                </div>
                                <p class="card-text text-end"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                            <div class="card bg-transparent p-2 border-0">
                                <img src={imgThread} class="card-img-top" alt="..." className="mb-1"/>
                                <p class="card-text cardText" >This card has supporting text below as a natural lead-in to additional content.sssssssssssssssssssssssssssssssssssss</p>
                                <div className="info d-flex justify-content-between">
                                    <div className="detail d-flex">
                                        <div className="like d-flex align-items-center me-3">
                                            <img src={like} alt="" />
                                            18
                                        </div>
                                        <div className="comment d-flex align-items-center">
                                            <img src={comment} alt="" />
                                            18
                                        </div>
                                    </div>
                                    <div className="follow d-flex align-items-center">Follow</div>
                                </div>
                                <p class="card-text text-end"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                            <div class="card bg-transparent p-2 border-0">
                                <img src={imgThread} class="card-img-top" alt="..." className="mb-1"/>
                                <p class="card-text cardText" >This is a wider card with supporting text below as a natural lead-in to additional content.sssssssssssssssss</p>
                                <div className="info d-flex justify-content-between">
                                    <div className="detail d-flex">
                                        <div className="like d-flex align-items-center me-3">
                                            <img src={like} alt="" />
                                            18
                                        </div>
                                        <div className="comment d-flex align-items-center">
                                            <img src={comment} alt="" />
                                            18
                                        </div>
                                    </div>
                                    <div className="follow d-flex align-items-center">Follow</div>
                                </div>
                                <p class="card-text text-end"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rightContent col-sm-3">
                    <Leaderboard data={mockRank}/>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ListThread