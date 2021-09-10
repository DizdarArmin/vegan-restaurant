import { useState } from "react";

import Input from "./Input";
import DateTime from "./DateTime";
import form from "../../data/form.json";

export default function Booking() {
  const [date, setDate] = useState(new Date().toLocaleDateString());
  const [time, setTime] = useState();

  console.log(time);
  const [formName, setFormName] = useState("");
  const [formSurname, setFormSurname] = useState("");
  const [formEmail, setFormEmail] = useState("");

  const { name, surname, email } = form;

  function Book(event) {
    event.preventDefault();
    alert("This part is not done");
  }
  return (
    <form onSubmit={(event) => Book(event)}>
      <h3>Book a table</h3>
      <Input htmlProperties={name} handleChange={setFormName} />
      <Input htmlProperties={surname} handleChange={setFormSurname} />
      <Input htmlProperties={email} handleChange={setFormEmail} />

      <DateTime Date={[date, setDate]} Time={[time, setTime]} />
      <p className="text-secondary">
        Name and last name must be longer then 3 characters
      </p>
      <br />
      <button type="submit" className="btn btn-success  col-12">
        Book
      </button>
    </form>
  );
}
