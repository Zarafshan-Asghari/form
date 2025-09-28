import Button from "../button/Button";
import Message from "../message/Message";
import { useState } from "react";
import Input from "../input/Input";
import QueryTypeSelector from "../queryTypeSelector/QueryTypeSelector";

export default function Form() {
  const [isSubmit, setIsSubmit] = useState(false);
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    queryType: "",
    message: "",
    agreement: false,
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    setValues((preValues) => ({
      ...preValues,
      [name]: type !== "checkbox" ? value : checked,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // console.log("Form datas:", values);
    setIsSubmit(true);
    setTimeout(() => {
      setIsSubmit(false);
    }, 4000);
    // clear form after submition
    setValues({
      firstName: "",
      lastName: "",
      email: "",
      queryType: "",
      message: "",
      agreement: false,
    });
  }

  return (
    <div className="flex flex-col items-center justify-center font-karla">
      {isSubmit && <Message  /> }
      <form className="xl:p-6 bg-white  p-4 rounded-xl" onSubmit={handleSubmit}>
        <h2 className="md:text-2xl font-bold text-gray-dark mb-8">
          Contact Us
        </h2>
        <div className="flex flex-col gap-4">
        
          <div className="md:flex-row flex flex-col items-start gap-2">
            <Input
              label="first name"
              type="text"
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
            />

            <Input
              label="last name"
              type="text"
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
            />
          </div>

          <Input
            label="email"
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />

        
          <div className="md:flex-row flex flex-col items-start gap-2">

            <QueryTypeSelector
              type="radio"
              name="queryType"
              value="general enquiry"
              checked={values.queryType === "general enquiry"}
              onChange={handleChange}
              className={'border border-green-light has-focus-within:bg-green-light'}
            >
              General Enquiry
            </QueryTypeSelector>

            <QueryTypeSelector
              type="radio"
              name="queryType"
              value="support request"
              checked={values.queryType === "support request"}
              onChange={handleChange}
              className={'border border-green-light has-focus-within:bg-green-light'}
            >
              Support Request
            </QueryTypeSelector>

          </div>

          {/* message */}
          <div className="flex flex-col w-full">
            <span className="mb-2 text-gray-dark md:text-sm text-xs capitalize">
              message *
            </span>
            <textarea
              name="message"
              value={values.message}
              onChange={handleChange}
              required
              rows="2"
              className="caret-green-medium border border-green-light w-full rounded-lg px-4 py-2 focus:outline-none focus:border-green-medium text-sm font-karla capitalize"
            />
          </div>

          <QueryTypeSelector
            type="checkbox"
            name="agreement"
            checked={values.agreement}
            onChange={handleChange}
            value={" I consent to being contacted by the team"}
          ></QueryTypeSelector>

          <Button text="submit" type="submit" onClick={handleSubmit} />
        </div>
      </form>
    </div>
  );
}
