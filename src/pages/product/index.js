import React from "react";
import './product.scss'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
export class Product extends React.Component {
    state = {
        isModalShow: false
    }

    render() {
        let { isModalShow } = this.state;
        return (
            <div className="product-page">
                <div className="row">
                    <div className="col-md-6 ">
                        <h4 className="page-titel mb-4"> Product</h4>
                    </div>
                    <div className="col-md-6 text-right">
                        <button type="button" className="btn btn-primary" onClick={() => this.setState({ isModalShow: true })}>Add New</button>
                    </div>
                </div>




                <div className="row mb-5">
                    {[1, 2, 3, 4, 5, 6].map((number) =>
                        <div className="col-md-3 ">
                            <div className="card mb-4" >
                                <img className="card-img-top" src="https://nrs.vercel.app/img/product/chicken.png" alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <h5 className="text-right">1KG 100.00₹</h5>
                                </div>
                            </div>
                        </div>
                    )}
                </div>



                <Modal isOpen={isModalShow} toggle={() => this.setState({ isModalShow: false })} >
                    <ModalHeader toggle={() => this.setState({ isModalShow: false })}>Add Product</ModalHeader>
                    <ModalBody>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Product Name</label>
                                    <input type="text" className="form-control" placeholder="Enter" />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Distribution</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                            </div>


                            <div className="col-md-12">
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Price</label>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <select className="custom-select mb-3">
                                                <option selected>KG</option>
                                            </select>
                                        </div>
                                        <input type="text" className="form-control" placeholder="Enter Price" />
                                    </div>
                                </div>

                            </div>

                            <div className="col-md-12">
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Image</label>
                                    <div class="input-group mb-3">
                                        <div className="custom-file">
                                            <input type="file" className="custom-file-input" id="inputGroupFile01" />
                                            <label className="custom-file-label" for="inputGroupFile01">Choose file</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-12">
                            <img className="img-thumbnail" width="200" height="200" src="https://nrs.vercel.app/img/product/chicken.png" alt="Card image cap" />
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={() => this.setState({ isModalShow: false })}>Save</Button>{' '}
                        <Button color="secondary" onClick={() => this.setState({ isModalShow: false })}>Cancel</Button>
                    </ModalFooter>
                </Modal>

            </div>
        );
    }
}
