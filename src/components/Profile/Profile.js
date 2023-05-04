import React from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "../Profile/Profile.module.css";
import { useSelector } from 'react-redux';

function Profile() {
    const { role, img, name } = useSelector(state => state.persistedReducer.auth.userInfo);

    return (
        <>
            <Header />
            <div className={styles.centerDiv}>
                <div className={styles.cardContainer}>
                    <img className={styles.round} src={img} alt="user" />
                    <h3>{name}</h3>
                    <p>User interface designer and <br /> front-end developer</p>
                    <div className={styles.skills}>
                        <h6>Role</h6>
                        <ul>
                            <li>{role}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Profile