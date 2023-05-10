import React, { useEffect, useRef } from "react";
import { useState } from "react";
import styles from "../Login/Login.module.css";
import { users } from "../../users/users";
import { useDispatch } from "react-redux";
import { addUser } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [uname, setUname] = useState('');
    const [pass, setPass] = useState('');
    const [responseMessage, setResponseMessages] = useState('');

    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    }, [])

    const disptach = useDispatch();
    const navigate = useNavigate();

    //Submit handler
    const handleSubmit = (e) => {
        e.preventDefault();

        // Find user login info
        const userData = users.find((user) => user.username === uname);

        // Compare user info
        if (userData) {
            if (userData.password !== pass) {
                // Invalid password
                setResponseMessages("wrong password");
            }
            //check if USER is logged && dispatchAction
            else if (userData.username === 'isUser' && userData.password === 'isUser') {
                setResponseMessages('succes login! (user)');

                //dispatch
                disptach(addUser({ id: userData.id, name: userData.username, password: userData.password, role: userData.role, isLoggedIn: true, img: userData.img }))

                //navigate
                navigate("/")
            }
            //check if ADMIN is logged && dispatchAction
            else if (userData.username === 'isAdmin' && userData.password === 'isAdmin') {
                setResponseMessages('succes login! (admin)');

                //dispatch
                disptach(addUser({ id: userData.id, name: userData.username, password: userData.password, role: userData.role, isLoggedIn: true, img: userData.img }))

                //navigate
                navigate("/")
            }
        } else {
            // Username not found
            setResponseMessages("wrong username");
        }
    };

    return (
        <>
            <div className={styles.centralDiv}>
                <div className={styles.container}>
                    <h2 className={styles.title}>Login</h2>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <label htmlFor="username">Username</label>
                        <input
                            ref={inputRef}
                            type="text"
                            id="username"
                            value={uname}
                            className={styles.input}
                            onChange={(e) => setUname(e.target.value)}
                        />
                        <label htmlFor="password">Password</label>
                        <input
                            type="text"
                            id="password"
                            value={pass}
                            className={styles.input}
                            onChange={(e) => setPass(e.target.value)}
                        />
                        <button type="submit">Login</button>
                        {<h3 className={styles.errorMsg}>{responseMessage}</h3>}
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;