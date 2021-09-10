import { useState } from "react";

import Input from "./Input";
import DateTime from "./DateTime";
import form from "../../data/form.json";
import { init, send } from "emailjs-com";

export default function Booking() {
  init("user_KNT7xNu0TvpLKLqgP95jd");

  const [date, setDate] = useState(new Date().toLocaleDateString());
  const [time, setTime] = useState(new Date(date).toLocaleTimeString());

  console.log(time);
  const [formName, setFormName] = useState("");
  const [formSurname, setFormSurname] = useState("");
  const [formEmail, setFormEmail] = useState("");

  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "",
    message: "",
    reply_to: "",
  });

  const handleChange = (event) => {
    setToSend({ ...toSend, [event.target.name]: event.target.value });
  };

  const { name, surname, email } = form;

  function Send() {
    send("service_rr1w0r4", "template_42uwp79", toSend, "User ID")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  }
  function Book(event) {
    event.preventDefault();
    console.log(toSend);
    Send();
  }
  return (
    <form onSubmit={(event) => Book(event)}>
      <h3>Book a table</h3>
      <Input htmlProperties={name} handleChange={handleChange} />
      <Input htmlProperties={surname} handleChange={handleChange} />
      <Input htmlProperties={email} handleChange={handleChange} />

      <DateTime Date={[date, setDate]} Time={[time, setTime]} />

      <button type="submit" className="btn btn-success  col-12">
        Book
      </button>
      <p className="text-secondary">
        Name and last name must be longer then 3 characters
      </p>
    </form>
  );
}
