import React from 'react'
import './style.css'

const AppointmentCard = ({handleClick,category,buttonName,price,time,categoryDetails=[],categoryPrecautions=[]}) => {
    const handleButton=()=>{
        handleClick({category,price,time,categoryDetails,categoryPrecautions})
    }
  return (
    <div className='appointmentcard'>
        <div className='appointmentcard-content'>
            <h5>{category}</h5>
            {price && <p style={{marginBottom:'22px'}}>{`A${price}`}</p>}
            {
                time && <div>
                <p>{time}</p>
            </div>
            }
            {
                categoryDetails.length>0 && <div className='category-details'>
                {
                    categoryDetails.map((detail)=>(
                        <p>{detail}</p>
                    ))
                }
            </div>
            }
            {
                categoryPrecautions.length>0 && <div className='category-precautions'>
                {
                    categoryPrecautions.map((precaution)=>(
                        <p>{precaution}</p>
                    ))
                }
            </div>
            }
        </div>
        {
            buttonName && <button onClick={()=>{handleButton()}} className='appointmentcard-btn'>
            {buttonName}
        </button>
        }
    </div>
  )
}

export default AppointmentCard