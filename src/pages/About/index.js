import React from "react";
import './About.scss'

export class About extends React.Component {
    render() {
        return (
            <div className="banner-page">
                <h4 className="page-titel mb-4">
                    About
        </h4>



                <div className="row">
                    <div className="col-md-7 ">
                        <div className="form-group">
                            <label for="exampleInputEmail1">About Distribution</label>
                            <textarea  type="email" className="form-control" rows="3"  placeholder="Enter" />
                           
                        </div>
                    </div>
                </div>
                <div className="row  mb-5">
                    <div className="col-md-7 text-right">
                    <button type="button" class="btn btn-outline-primary">Update</button>
                    </div>
                </div>
            </div>
        );
    }
}
