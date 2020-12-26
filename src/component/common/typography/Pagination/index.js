import React, { Component } from "react";
import './pagination.scss'
export class Pagination extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentPage:0
    }
  }
  handlePagination = (data,page) => {
    console.log(JSON.stringify(page))
    this.setState({currentPage:page})
    this.props.change(data);

  };
  render() {
    let { length, data } = this.props;
    let {currentPage}=this.state;
    console.log("pagination------->" + length);
    return (
      <nav className=" custom-pagination">
        <ul className="pagination">
          <li className="page-item">
            <a
              className={`page-link ${currentPage ===0?'disabled':''}`}
              href="#Previous"
              onClick={() => this.handlePagination(data[currentPage-1],currentPage-1)}
            >
              Previous
            </a>
          </li>
          {data.map((data, i) => (
            <li className="page-item" key={i}>
              <a
                className={`page-link ${i === currentPage?'active':''}`}
                href={`#${i + 1}`}
                onClick={() => this.handlePagination(data,i)}
              >
                
                {i + 1}
              </a>
            </li>
          ))}
          <li className="page-item">
            <a   className={`page-link ${data.length-1 ===currentPage?'disabled':''}`} href={`#${currentPage}`}  onClick={() => this.handlePagination(data[currentPage+1],currentPage+1)}>
              Next
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
