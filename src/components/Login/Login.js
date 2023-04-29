import React from "react";
import { useState } from "react";
import styles from "../Login/Login.module.css";
import { users } from "../../users/users";
import { useDispatch } from "react-redux";
import { addUser } from "../../features/auth/authSlice";

const Login = () => {
    const [uname, setUname] = useState('');
    const [pass, setPass] = useState('');
    const [errorMessages, setErrorMessages] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const disptach = useDispatch();

    //Submit handler
    const handleSubmit = (e) => {
        e.preventDefault();

        // Find user login info
        const userData = users.find((user) => user.username === uname);

        // Compare user info
        if (userData) {
            if (userData.password !== pass) {
                // Invalid password
                setErrorMessages("wrong password");
            }
            //check if USER is logged && dispatchAction
            else if (userData.username === 'isUser' && userData.password === 'isUser') {
                setIsSubmitted(true);
                setErrorMessages('succes login!');

                disptach(addUser({ id: userData.id, name: userData.username, password: userData.password, role: userData.role, img: userData.img }))
            }
            //check if ADMIN is logged && dispatchAction
            else if (userData.username === 'isAdmin' && userData.password === 'isAdmin') {
                setIsSubmitted(true);
                setErrorMessages('succes login!');

                disptach(addUser({ id: userData.id, name: userData.username, password: userData.password, role: userData.role, img: userData.img }))
            }
        } else {
            // Username not found
            setErrorMessages("wrong username");
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
                    </form>
                    {<p>{errorMessages}</p>}
                </div>
            </div>
        </>
    );
}

export default Login;