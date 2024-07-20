import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    gender: "",
    skills: [],
    birthday: "",
    country: "Select",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prevData) => {
        const skills = checked
          ? [...prevData.skills, value]
          : prevData.skills.filter((skill) => skill !== value);
        return { ...prevData, skills };
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let errorMsg = "";
    if (name === "firstName" && !value) {
      errorMsg = "First Name is required";
    }
    if (name === "email" && !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)) {
      errorMsg = "Invalid email address";
    }
    if (name === "country" && value === "Select") {
      errorMsg = "Please select a country";
    }

    setErrors((prevErrors) => ({ ...prevErrors, [name]: errorMsg }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields on submit
    Object.keys(formData).forEach((key) => validateField(key, formData[key]));

    if (
      Object.values(errors).some((error) => error) ||
      Object.values(formData).some(
        (field) => field === "" || field.length === 0
      )
    ) {
      alert("Please fix the errors before submitting");
    } else {
      console.log("Form Data:", formData);
    }
  };

  return (
    <div>
      <h2 className="header">Form validation (onBlur)</h2>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="input">
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.firstName && (
            <span className="error">{errors.firstName}</span>
          )}
        </div>
        <div className="input">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={formData.gender === "Male"}
              onChange={handleChange}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={formData.gender === "Female"}
              onChange={handleChange}
            />
            Female
          </label>
        </div>
        <div className="check-box">
          <input
            type="checkbox"
            id="checBox1"
            name="skills"
            value="JavaScript"
            checked={formData.skills.includes("JavaScript")}
            onChange={handleChange}
          />
          <label htmlFor="checBox1">JavaScript</label>
        </div>
        <div className="check-box">
          <input
            type="checkbox"
            id="checBox2"
            name="skills"
            value="CSS"
            checked={formData.skills.includes("CSS")}
            onChange={handleChange}
          />
          <label htmlFor="checBox2">CSS</label>
        </div>
        <div className="check-box">
          <input
            type="checkbox"
            id="checBox3"
            name="skills"
            value="HTML"
            checked={formData.skills.includes("HTML")}
            onChange={handleChange}
          />
          <label htmlFor="checBox3">HTML</label>
        </div>
        <div className="check-box">
          <input
            type="checkbox"
            id="checBox4"
            name="skills"
            value="PHP"
            checked={formData.skills.includes("PHP")}
            onChange={handleChange}
          />
          <label htmlFor="checBox4">PHP</label>
        </div>
        <div className="date">
          <label htmlFor="birthday">Birthday</label>
          <input
            type="date"
            id="birthday"
            name="birthday"
            value={formData.birthday}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <div className="dropdown">
          <label htmlFor="cars">Country</label>
          <select
            name="country"
            id="cars"
            value={formData.country}
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <option value="Select">Select</option>
            <option value="India">India</option>
            <option value="UAE">UAE</option>
            <option value="Qatar">Qatar</option>
          </select>
          {errors.country && <span className="error">{errors.country}</span>}
        </div>
        <div className="submit">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
