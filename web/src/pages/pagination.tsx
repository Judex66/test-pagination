import { useState } from "react";
interface Pagination {
  currentPage:number;
  usersPerPage: number;
  totalUsers: number;
  paginate: (pageNumber: React.SetStateAction<number>) => void;
}
const Pagination = ({currentPage, usersPerPage, totalUsers, paginate}: Pagination) => {
  let [max, setmax] = useState(10)
  let [min, setmin] = useState(1)
  let pageNumbers = []
  let chunk = 10
  for (let i = min; i <= max; i++) {
      pageNumbers.push(i)
  }
  const prevPage = () => {
      if (currentPage != min) {
          paginate(prev => prev - 1)
      }
  }
  const prevPart = () => {
      if (min > 1) {
          setmax(max - chunk)
          setmin(min - chunk)
      }
  }
  const nextPage = () => {
      if (currentPage != max) {
          paginate(next => next + 1)
      }
  }
  const nextPart = () => {
      if (max < Math.ceil(totalUsers / usersPerPage)) {
          if (max + chunk > Math.ceil(totalUsers / usersPerPage)) {
              console.log(max + chunk - Math.ceil(totalUsers / usersPerPage))
              let res = max + chunk - Math.ceil(totalUsers / usersPerPage)
              setmax(max + chunk - res)
              setmin(min + chunk - res)
          } else {
              setmax(max + chunk)
              setmin(min + chunk)
          }
      }
  }
  return (

  <div className="pagination">
         <div className="page-item">
      <a className="page-link" onClick={() => prevPart()} aria-label="Previous">
      &laquo;
      </a>
    </div>
    <div className="page-item">
      <a className="page-link"  aria-label="prev" onClick={() => prevPage()}>
        	&lsaquo;
      </a>
    </div>
    {pageNumbers.map((number, index) => (
        <div key={index} className={`page-item ${currentPage===number ? 'active' : ''}`} >
            <a onClick={() => paginate(number)} className="page-link" href="#" id={number.toString()}>
                {number}
            </a>
        </div>
    ))}
              <div className="page-item">
      <a className="page-link"  aria-label="prev" onClick={() => nextPage()}>
        	&rsaquo;
      </a>
    </div>
      <div className="page-item">
      <a className="page-link" onClick={() => nextPart()} aria-label="Next">&raquo;</a>
    </div>
          </div>
  );
};

export default Pagination;
