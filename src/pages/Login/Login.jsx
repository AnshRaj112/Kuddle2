import React, { useEffect, useState } from "react";
import styled from "styled-components";
import styles from './Login.module.scss'
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import { loginRoute } from "../../utils/APIRoutes";

function Login() {
    const navigate = useNavigate();
    const [values, setValues] = useState({
       email: "",
       password: "",
    });

    const toastOptions = {
        position: "bottom-right",
        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
    };

    useEffect(() => {
      if(localStorage.getItem("kuddle-user")) {
        navigate("/like");
      }
    },[]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (handleValidation()) {
            const { password, firstName, lastName, branch, year, phone, email } = values;
            try {
                const { data } = await axios.post(loginRoute, {
                    email,
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
                toast.error("Email or password incorrect", toastOptions);
            }
        }
    };

    const handleValidation = () => {
        const { password, email } = values;

        if (password === "") {
          toast.error("Email and Password are required", toastOptions);
            return false;
          } else if (email.length === "") {
              toast.error("Email and Password are required", toastOptions);
              return false;
          } else if (!email.endsWith("@kiit.ac.in")) {
            toast.error("Email must end with @kiit.ac.in", toastOptions);
            return false;
          }
        return true;
    };

    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    return (
        <>
        <div className={styles.container}>
            <FormContainer>
                <form onSubmit={handleSubmit} className={styles.loginform}>
                    <div className={styles.brand}>
                        <h1>Login</h1>
                    </div>
                    {["email", "password"].map((field) => (
                        <div className={styles.inputbox} key={field}>
                            <label htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')}</label>
                            <input
                                type={field === "password" || field === "confirmPassword" ? "password" : field === "email" ? "email" : "text"}
                                name={field}
                                required
                                placeholder={field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')}
                                onChange={handleChange}
                            />
                        </div>
                    ))}
                    <button type="submit" className={styles.logbut}>Login</button>
                    <span>
                        Don't have an account? <Link to="/signup" className={styles.signup}>Sign Up</Link>
                    </span>
                </form>
            </FormContainer>
            <ToastContainer />
            </div>
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

export default Login;
