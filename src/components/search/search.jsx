import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./search.css";
import axios from "axios";

const Search = ({ home }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [searchStatus, setSearchStatus] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(
          `http://localhost:8000/threads/list/`
        );
        setData(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  const searchChange = (e) => {
    setSearchTerm(e.target.value);
    setSearchStatus(true);
  };

  const searchStatusChange = () => {
    setSearchStatus(false);
    setSearchTerm("");
  };

  useEffect(() => {
    const titles = data?.data?.map((item) => ({
      id: item.id,
      title: item.title,
    }));
    const results = titles?.filter(function (item) {
      return item.id && item.title.toLowerCase().includes(searchTerm);
    });
    setSearchResult(results);
  }, [searchTerm]);

  return (
    <div className="mb-4">
      <div className="height d-flex align-items-center">
        <div className={home == "home" ? "col-md-5" : "col-md-7 mx-auto"}>
          <div className="search position-relative">
            <div className="d-flex position-relative">
              <input
                type="text"
                className="form-control"
                placeholder="Search something here..."
                onChange={searchChange}
                value={searchTerm}
              />
              <div
                type="button"
                className={
                  searchStatus
                    ? "position-absolute top-50 end-0 translate-middle-y me-2"
                    : "resultHidden"
                }
                style={{ color: "red" }}
                onClick={searchStatusChange}
              >
                Clear
              </div>
            </div>
            <div className={searchStatus ? "resultDisplay" : "resultHidden"}>
              {searchResult?.map((item, index) => (
                <Link
                  to={`/forum/${item.id}-${item.title
                    .toLowerCase()
                    .replace(/\s/g, "-")}`}
                  style={{ textDecoration: "none" }}
                >
                  <div key={index} className="result">
                    {item.title}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
