import React from "react";
import "./style.css";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  toggleTerms: false,
  toggleNote: false,
  pickedTerms: "",
};

const FormSchema = yup.object({
  name: yup.string().min(2).required("Please enter your name"),
  phone: yup.string(),
  email: yup.string().email().required("Please enter your email"),
});

const Information = ({
  category,appointment,timing,servicePerson,price
}) => {
  const navigate=useNavigate();
  let {
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    touched,
    errors,
    resetForm,
  } = useFormik({
    initialValues,
    validationSchema: FormSchema,
    onSubmit: async (values, { resetForm }) => {
      if(localStorage.getItem("token"))
        {
        const token=localStorage.getItem("token");
      const { data } = await axios.get("http://localhost:4000/api/getkey");
      const {
        data: { order,newOrder },
      } = await axios.post("http://localhost:4000/api/booking", { category,appointment,timing,servicePerson,price },{
        headers:{ Authorization: `Bearer ${token}` }
      });
      console.log(order);
      const options = {
        key: data.key,
        amount: "50000",
        currency: "INR",
        name: "Acme Corp",
        description: "Test Transaction",
        image: "https://example.com/your_logo",
        order_id: order.id,
        callback_url: `http://localhost:4000/api/paymentVarification?id=${newOrder._id}`,
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#121212",
        },
      };
      const razor = new window.Razorpay(options);
      razor.open();
      resetForm();
    }
    else{
      navigate("/user");
    }
    },
  });
  return (
    <div>
      <form className="enquiryForm" onSubmit={handleSubmit}>
        <div className="inputBlock">
          <label htmlFor="name">
            Name <span>*</span>
          </label>
          <input
            type="text"
            autoComplete="off"
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && touched.name ? <p>{errors.name}</p> : null}
        </div>
        <div className="inputBlock">
          <label htmlFor="name">
            Phone <span>*</span>
          </label>
          <input
            type="tel"
            autoComplete="off"
            name="phone"
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.phone && touched.phone ? <p>{errors.phone}</p> : null}
        </div>
        <div className="inputBlock">
          <label htmlFor="name">
            Work Email <span>*</span>
          </label>
          <input
            type="text"
            autoComplete="off"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email ? <p>{errors.email}</p> : null}
        </div>
        <div className="terms-condition">
          <h1>Terms & Conditions</h1>
          <div>
            <p>Deposit</p>
            <p>
              A $100 deposit is required to secure your booking. This amount
              will fully be deducted on the day of your appointment but it is
              not refundable and inapplicable for no-shows and
              cancellations/rescheduling made within 48 hours of appointment
              time. The deposit will be refunded for any cancellations made
              before 48 hours, but excluding the processing fee.
            </p>
          </div>
          <div>
            <p>Cancellations/Rescheduling</p>
            <p>
              Cancellations and rescheduling are only accepted up to 48 hours
              before the scheduled appointment time. Any cancellations or
              rescheduling done within 48 hours will result in the deposit being
              non-refundable and an extra $100 will be charged when
              rescheduling.
            </p>
          </div>
          <div>
            <p>No-shows</p>
            <p>A $100 deposit will not be refunded to no-shows as well.</p>
          </div>
          <div>
            <p>Lateness</p>
            <p>
              Please inform us ASAP if you are running late as a courtesy
              towards our designers and other clients. If you are late for more
              than 30 minutes without prior notice, your appointment will be
              cancelled automatically. The original deposit will be forfeited
              and another deposit will be required to secure your next
              appointment.
            </p>
          </div>
          <div className="check">
            <input
              type="checkbox"
              autoComplete="off"
              name="toggleTerms"
              value={values.toggleTerms}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label htmlFor="name">
              I have read and agree to the terms above <span>*</span>
            </label>
            {/* {errors.email && touched.email ? <p>{errors.email}</p> : null} */}
          </div>
          <div className="check">
            <input
              type="checkbox"
              autoComplete="off"
              name="toggleNote"
              value={values.toggleNote}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label htmlFor="name">
              Please note, there is surcharge of 5% on Saturday, 10% on Sunday.{" "}
              <span>*</span>
            </label>
            {/* {errors.email && touched.email ? <p>{errors.email}</p> : null} */}
          </div>
          <div>
            <p>
              We have 48 hours cancellation/rescheduling policy, do you agree?{" "}
              <span>*</span>
            </p>
            <div className="radio">
              <div className="check">
                <input
                  type="radio"
                  autoComplete="off"
                  name="pickedTerms"
                  value="yes"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <label htmlFor="name">yes</label>
                {/* {errors.email && touched.email ? <p>{errors.email}</p> : null} */}
              </div>
              <div className="check">
                <input
                  type="radio"
                  autoComplete="off"
                  name="pickedTerms"
                  value="no"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <label htmlFor="name">no</label>
                {/* {errors.email && touched.email ? <p>{errors.email}</p> : null} */}
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={resetForm}
          type="button"
          className="btn"
          style={{ background: "#FF0044" }}
        >
          RESET
        </button>
        <button type="submit" className="btn" style={{ background: "#FF0044" }}>
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default Information;
