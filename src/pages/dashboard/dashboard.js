import React from "react";
import './banner.scss'

export class Dashboard extends React.Component {
  render() {
    return (
      <div className="banner-page">
        <h4 className="page-titel mb-4">
          Banner
        </h4>



        <div className="row justify-content-md-center mb-5">
          <div className="col-md-7 text-center">
            <div class="input-group mb-3">
              <div class="custom-file">
                <input type="file" class="custom-file-input" id="inputGroupFile02" />
                <label class="custom-file-label" for="inputGroupFile02">Choose file</label>
              </div>
              <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="button">Update</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-md-center mb-5">
          <div className="col-md-7 text-center">
            <img src="https://nrs.vercel.app/img/product/chickenBG.jpg" />
          </div>
        </div>
      </div>
    );
  }
}
