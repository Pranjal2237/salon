import React, { useEffect, useState } from 'react'
import './style.css'
import axios from 'axios'

const Appointments = ({isFutureAppointment,setIsFutureAppointment}) => {
    
    const [appointments,setAppointments]=useState([])
    const [name,setName]=useState();

    async function futureAppointments()
    {
        if(localStorage.getItem("token"))
        {
            const token=localStorage.getItem("token");
            console.log(token)
            const {data}=await axios.get("http://localhost:4000/api/appointments/future",{
                headers:{ Authorization: `Bearer ${token}` }
            })
            setAppointments(data.appointments);
            setName(data.name);
            console.log(data)
        }
    }

    async function historyAppointments()
    {
        if(localStorage.getItem("token"))
        {
            const token=localStorage.getItem("token");
            console.log(token)
            const {data}=await axios.get("http://localhost:4000/api/appointments/history",{
                headers:{ Authorization: `Bearer ${token}` }
            })
            setAppointments(data.appointments);
            setName(data.name);
            console.log(data)
        }
    }


    useEffect(()=>{
        if(isFutureAppointment){
            futureAppointments();
        }
        else{
            historyAppointments();
        }
    },[isFutureAppointment])

  return (
    <div>
        <div className="appointment-banner">
        <div className="banner-content">
          <h1>{isFutureAppointment?"FUTURE APPOINTMENTS":"APPOINTMENTS HISTORY"}</h1>
        </div>
      </div>
      <div className='inline-wrapper padding-block'>
        <div className='appointments-box' style={{marginBlock:"2rem"}}>
            <div style={{background:"#990029",color:"#fff"}}>Date</div>
            <div style={{background:"#990029",color:"#fff"}}>Client</div>
            <div style={{background:"#990029",color:"#fff"}}>Employee</div>
            <div style={{background:"#990029",color:"#fff"}}>Service</div>
            <div style={{background:"#990029",color:"#fff"}}>Price</div>
        </div>
        <div>
            {
                appointments?.map(({timing,servicePerson,category,appointment})=>(
                    <div className='appointments-box'>
                        <div>{timing?.map((time)=>(
                            <p>{time}</p>
                        ))}</div>
                        <div>{name}</div>
                        <div>{servicePerson}</div>
                        <div>{`${category}-${appointment}`}</div>
                        <div>100 $</div>
                    </div>
                ))
            }
        </div>
      </div>
    </div>
  )
}

export default Appointments