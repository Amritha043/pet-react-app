import React from 'react'
import NavigationBar from './NavigationBar'

const AddPet = () => {
  return (
    <div>
        <NavigationBar/>
         <div className="container">
            
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-4">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label"><b> Pet ID</b></label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                             <label htmlFor="" className="form-label"> <b>Pet Name</b></label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                             <label htmlFor="" className="form-label"><b> Species</b> </label>

                            <select name="" id="" className="form-control">
                                <option value="">----select---- </option>
                                <option value="">Budget </option>
                                <option value="">Deluxe</option>
                                <option value="">Premium </option>
                                <option value=""> Luxury</option>
                            </select>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                             <label htmlFor="" className="form-label me-3 ms-1"><b>Breed</b> </label>
                               <select name="" id="" className="form-control">
                                <option value="">----select---- </option>
                                <option value="">Budget </option>
                                <option value="">Deluxe</option>
                                <option value="">Premium </option>
                                <option value=""> Luxury</option>
                            </select>
                            </div>
                            

                        
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                             <label htmlFor="" className="form-label"><b>Age</b></label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                             <label htmlFor="" className="form-label me-3 ms-1">Gender   </label>
                                <input type="radio" name="radio" id="radio1" checked/>
                                <label for="radio1" class="me-3 ms-1">Male</label>

                                <input type="radio" name="radio" id="radio2"/>
                                <label for="radio2" class="me-3 ms-1">Female</label>

                                <input type="radio" name="radio" id="radio3"/>
                                <label for="radio3" class="ms-1">Other</label>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label me-3 ms-1"><b>Vaccinated</b></label>
                             <input type="radio" name="radio" id="radio2" checked/>
                                <label for="radio2" class="me-3 ms-1">YES </label>

                                <input type="radio" name="radio" id="radio3"/>
                                <label for="radio3" class="ms-1">NO</label>
                           
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label"> <b>Adoption Fee</b></label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label"> <b>Image URL</b></label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label"><b>Description</b></label>
                            <input type="text" className="form-control" />
                        </div>
                        
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-dark"><b>Add Pet</b></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddPet