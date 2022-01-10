import { useState } from "react"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import './search.css'

const Search = (props)=> {
    const[searchTerm, setSearchTerm] = useState("")
    const[searchResult, setSearchResult] = useState([])
    const[searchStatus, setSearchStatus] = useState(false)

    const searchChange = (e)=> {
        setSearchTerm(e.target.value)
        setSearchStatus(true)
    }

    const searchStatusChange = ()=> {
        setSearchStatus(false)
        setSearchTerm("");
    }

    console.log(props?.data?.data)

    useEffect(() => {
        const titles = props?.data?.data?.map(item => ({id: item.id, title: item.title}))
        const results = titles?.filter(function (item) {
            return item.id && item.title.toLowerCase().includes(searchTerm)
        })
        setSearchResult(results)
    }, [searchTerm])

    console.log(searchResult)

    return (
        <div class="container mb-4">
                <div class="row height d-flex justify-content-center align-items-center">
                    <div class="col-md-7">
                        <div class="search">
                            <div className="d-flex position-relative">
                                <input type="text" class="form-control" placeholder="Search something here..." onChange={searchChange} value={searchTerm}/> 
                                <div type="button" className={searchStatus ? "position-absolute top-50 end-0 translate-middle-y me-2" : "resultHidden"}style={{color: "red"}} onClick={searchStatusChange}>Close</div>
                            </div>
                            <div className={searchStatus ? "resultDisplay" : "resultHidden"}>
                                {searchResult?.map((item, index) => (
                                    <Link to={`/forum/${item.id}-${item.title.toLowerCase().replace(/\s/g, "-")}`} style={{textDecoration: "none"}}>
                                        <div key={index} className="result">{item.title}</div>
                                    </Link>
                                ))
                                }
                            </div>  
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Search