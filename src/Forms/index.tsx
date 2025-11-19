import React from "react";
import useForm from "./useForm";

const FormComponent = () => {
  const { value, handleChange } = useForm({
    username: "",
    password: "",
    gender: "male",
    country: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("username", value.username);
    formData.append("password", value.password);
    formData.append("gender", value.gender);
    formData.append("country", value.country);
    console.log("formData", [...formData.entries()]);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          value={value["username"]}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={value["password"]}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Gender:</label>
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={value.gender === "male"}
            onChange={handleChange}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={value.gender === "female"}
            onChange={handleChange}
          />
          Female
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="other"
            checked={value.gender === "other"}
            onChange={handleChange}
          />
          Other
        </label>
      </div>

      <div>
        <label htmlFor="country">Country</label>
        <select id="country" value={value["country"]} onChange={handleChange}>
          <option value="">Select Country</option>
          <option value="india">India</option>
          <option value="usa">United States</option>
          <option value="uk">United Kingdom</option>
          <option value="canada">Canada</option>
          <option value="australia">Australia</option>
        </select>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;
