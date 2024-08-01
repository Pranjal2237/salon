import React, { useState } from 'react'
import './style.css'
import AppointmentCard from '../cards/appointment'
import {appointmentCategory, colouringCategory, cuttingCategory, newAppointment, othersAppointment, permCategory, stylingCategory, treatmentCategory} from '../../constants'
import Schedular from '../schedular'

const Appointment = () => {
    const[isCategory,setIsCategory]=useState({category:""})
    const[isAppointment,setIsAppointment]=useState({category:""});
    console.log(isCategory);
  return (
    <div>
        {/* {
            isCategory.category.length==0?<><p>choose a category....</p>
        <div>
            {
                appointmentCategory.map((category)=>(
                    <AppointmentCard handleClick={setIsCategory} category={category} buttonName="Select"/>
                ))
            }
        </div></>:<>
            <p style={{marginBottom:'2rem',cursor:'pointer',fontSize:'14px',fontWeight:'600'}} onClick={()=>{setIsCategory({category:""})}} >VIEW ALL CATEGORIES</p>
            <AppointmentCard category={isCategory.category} />
        </>
        }
        <div className='appointments-selection-box'>
        {
            isAppointment.category.length==0?<>
            {
            isCategory.category.length>0 && <p>I would like to schedule...</p>
        }
        {
            isCategory.category=="'Others" && <div>
            {
                othersAppointment.map(({category,price})=>(
                    <AppointmentCard handleClick={setIsAppointment} category={category} price={price} buttonName="Book"  />
                ))
            }
        </div>
        }
        {
            isCategory.category=="**New" && <div>
            {
                newAppointment.map(({category,price,categoryDetails})=>(
                    <AppointmentCard handleClick={setIsAppointment} category={category} categoryDetails={categoryDetails} price={price} buttonName="Book"  />
                ))
            }
        </div>
        }
        {
            isCategory.category=="**New" && <div>
            {
                newAppointment.map(({category,price,categoryDetails})=>(
                    <AppointmentCard handleClick={setIsAppointment} category={category} categoryDetails={categoryDetails} price={price} buttonName="Book"  />
                ))
            }
        </div>
        }
        {
            isCategory.category=="Hair colouring" && <div>
            {
                colouringCategory.map(({category,price,categoryDetails,categoryPrecautions,time})=>(
                    <AppointmentCard handleClick={setIsAppointment} category={category} categoryDetails={categoryDetails} categoryPrecautions={categoryPrecautions} time={time} price={price} buttonName="Book"  />
                ))
            }
        </div>
        }
        {
            isCategory.category=="Haircut" && <div>
            {
                cuttingCategory.map(({category,price,categoryDetails,categoryPrecautions,time})=>(
                    <AppointmentCard handleClick={setIsAppointment} category={category} categoryDetails={categoryDetails} categoryPrecautions={categoryPrecautions} time={time} price={price} buttonName="Book"  />
                ))
            }
        </div>
        }
        {
            isCategory.category=="Perm" && <div>
            {
                permCategory.map(({category,price,categoryDetails,categoryPrecautions,time})=>(
                    <AppointmentCard handleClick={setIsAppointment} category={category} categoryDetails={categoryDetails} categoryPrecautions={categoryPrecautions} time={time} price={price} buttonName="Book"  />
                ))
            }
        </div>
        }
        {
            isCategory.category=="Styling" && <div>
            {
                stylingCategory.map(({category,price,categoryDetails,categoryPrecautions,time})=>(
                    <AppointmentCard handleClick={setIsAppointment} category={category} categoryDetails={categoryDetails} categoryPrecautions={categoryPrecautions} time={time} price={price} buttonName="Book"  />
                ))
            }
        </div>
        }
        {
            isCategory.category=="Treatment" && <div>
            {
                treatmentCategory.map(({category,price,categoryDetails,categoryPrecautions,time})=>(
                    <AppointmentCard handleClick={setIsAppointment} category={category} categoryDetails={categoryDetails} categoryPrecautions={categoryPrecautions} time={time} price={price} buttonName="Book"  />
                ))
            }
        </div>
        }
            </>:<>
                {
                    isCategory.category.length>0 && <><p style={{marginBottom:'2rem',cursor:'pointer',fontSize:'14px',fontWeight:'600'}} onClick={()=>{setIsAppointment({category:""})}}>VIEW ALL APPOINTMENTS</p>
                    <AppointmentCard category={isAppointment.category} categoryDetails={isAppointment.categoryDetails} categoryPrecautions={isAppointment.categoryPrecautions} time={isAppointment.time} price={isAppointment.price} /></>
                }
            </>
        }
        </div> */}
        <Schedular />
    </div>
  )
}

export default Appointment