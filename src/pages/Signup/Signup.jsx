import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import { signupRoute } from "../../utils/APIRoutes";

function Signup() {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        year: "",
        branch: "",
        password: "",
        confirmPassword: "",
    });

    const toastOptions = {
        position: "bottom-right",
        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (handleValidation()) {
            const { password, firstName, lastName, branch, year, phone, email } = values;
            try {
                const { data } = await axios.post(signupRoute, {
                    firstName,
                    lastName,
                    phone,
                    email,
                    year,
                    branch,
                    password,
                });
                if (!data.status) {
                    toast.error(data.msg, toastOptions);
                } else {
                    localStorage.setItem('kuddle-user', JSON.stringify(data.user));
                    toast.success("Signup successful", toastOptions);
                    navigate("/");
                }
            } catch (error) {
                toast.error("Signup failed. Please try again later.", toastOptions);
            }
        }
    };

    const handleValidation = () => {
        const { password, confirmPassword, email, phone } = values;

        if (password !== confirmPassword) {
            toast.error("Password and Confirm Password must be the same.", toastOptions);
            return false;
        } else if (!email.endsWith("@kiit.ac.in")) {
            toast.error("Email must end with @kiit.ac.in", toastOptions);
            return false;
        } else if (phone.length !== 10) {
            toast.error("Phone number must be 10 digits", toastOptions);
            return false;
        } else if (password.length < 8) {
            toast.error("Password should be equal or greater than 8 characters", toastOptions);
            return false;
        }
        return true;
    };

    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    return (
        <>
            <FormContainer>
                <form onSubmit={handleSubmit}>
                    <div className="brand">
                        <img src="" alt="Kuddle Logo" />
                        <h1>Kuddle</h1>
                    </div>
                    {["firstName", "lastName", "phone", "email", "password", "confirmPassword"].map((field) => (
                        <div className="inputbox" key={field}>
                            <input
                                type={field === "password" || field === "confirmPassword" ? "password" : field === "email" ? "email" : "text"}
                                name={field}
                                required
                                placeholder={field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')}
                                onChange={handleChange}
                            />
                            <label htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')}</label>
                        </div>
                    ))}
                    <div className="inputbox">
                        <label htmlFor="year">Year</label>
                        <select name="year" required onChange={handleChange} value={values.year}>
                            <option value="" hidden>Year</option>
                            {["Year 1", "Year 2", "Year 3", "Year 4"].map((year, index) => (
                                <option key={index} value={year}>{year}</option>
                            ))}
                        </select>
                    </div>
                    <div className="inputbox">
                        <label htmlFor="branch">Branch</label>
                        <select name="branch" required onChange={handleChange} value={values.branch}>
                            <option value="" hidden>Branch</option>
                            {["Civil Engineering", "Mechanical Engineering", "Mechanical Engineering (Automobile)", "Electrical Engineering", "Electronics & Tele-Communication Engineering", "Computer Science Engineering", "Information Technology", "Electronics & Electrical Engineering", "Electronics and Instrumentation", "Aerospace Engineering", "Mechatronics Engineering", "Production Engineering", "Electronics and Computer Science Engineering", "Communication Engineering", "Medical Electronics Engineering", "Computer Science & Communication Engineering", "Computer Science & Systems Engineering", "Chemical Technology"].map((branch, index) => (
                                <option key={index} value={branch}>{branch}</option>
                            ))}
                        </select>
                    </div>
                    <button type="submit">Sign Up</button>
                    <span>
                        Already have an account? <Link to="/login">Login</Link>
                    </span>
                </form>
            </FormContainer>
            <ToastContainer />
        </>
    );
}

const FormContainer = styled.div`
    // display: flex;
    // justify-content: center;
    // align-items: center;
    // height: 100vh;
    // background-color: #282c34;

    // form {
    //     display: flex;
    //     flex-direction: column;
    //     gap: 2rem;
    //     background-color: #00000076;
    //     border-radius: 2rem;
    //     padding: 3rem 5rem;
    //     color: white;

    //     .inputbox {
    //         position: relative;
    //         display: flex;
    //         flex-direction: column;
    //     }

    //     input, select {
    //         background-color: transparent;
    //         padding: 1rem;
    //         border: 0.1rem solid #4e0eff;
    //         border-radius: 0.4rem;
    //         color: white;
    //         width: 100%;
    //         font-size: 1rem;
    //     }

    //     input:focus, select:focus {
    //         border: 0.1rem solid #997af0;
    //         outline: none;
    //     }

    //     label {
    //         margin-top: 0.5rem;
    //         color: #aaa;
    //     }

    //     .brand {
    //         display: flex;
    //         justify-content: center;
    //         align-items: center;
    //         gap: 1rem;

    //         img {
    //             height: 5rem;
    //         }

    //         h1 {
    //             color: white;
    //             text-transform: uppercase;
    //         }
    //     }

    //     button {
    //         background-color: #4e0eff;
    //         color: white;
    //         padding: 1rem 2rem;
    //         border: none;
    //         border-radius: 0.4rem;
    //         cursor: pointer;
    //         font-size: 1rem;
    //         text-transform: uppercase;
    //         transition: background-color 0.3s ease;

    //         &:hover {
    //             background-color: #997af0;
    //         }
    //     }

    //     span {
    //         text-align: center;
    //         color: #aaa;

    //         a {
    //             color: #4e0eff;
    //             text-decoration: none;
    //             font-weight: bold;
    //         }
    //     }
    // }
`;

export default Signup;
