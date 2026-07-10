import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavigationBar from './NavigationBar'

const ViewPet = () => {
    const [data,changeData]=useState([])
    const fetchData=()=>{
        axios.get("https://raw.githubusercontent.com/anishpdm/demo-json-api/refs/heads/main/pet.json").then(
            (response)=>{
                changeData(response.data)
            }
        ).catch()
    }
    useEffect(
        ()=>{
            fetchData()
        },[]
    )
  return (
    <div>
        <NavigationBar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    <div className="row g-3">
                        
                       
                        {
                            data.map(
                                (value,index)=>{
                                    return(
                                        
                                     <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">

                           <div className="card shadow h-100">
                        <img
                            src={value.image}
                            className="card-img-top"
                            alt=""
                            height="330px"
                        />

                        <div className="card-body">
                            <h5 className="card-title">
                            {value.brand} {value.model}
                            </h5>

                            <p className="card-text">
                            <strong>petId:</strong> {value.petId}<br />
                            <strong>petName:</strong> {value.petName}<br />
                            <strong>species:</strong> {value.species}<br />
                            <strong>breed:</strong> {value.breed}<br />
                            <strong>age:</strong> {value.age}<br />
                            <strong>gender:</strong> ₹{value.gender}<br />
                            <strong>vaccinated:</strong> {value.vaccinated}<br/>
                             <strong>adoptionFee:</strong> ₹{value.adoptionFee}<br />
                            <strong>BuiltYear:</strong> {value.builtYear}<br/>
                              <strong>Description:</strong> ₹{value.description}<br />
                            
                            </p>

                            <button className="btn btn-dark w-100">
                            View Details
                            </button>
                        </div>
                        </div>


                                                </div>
                                                            )
                                                        }
                                                    )
                                                }

                                                
                                            </div>



                                        </div>
                                    </div>
        </div>


    </div>
  )
}

export default ViewPet