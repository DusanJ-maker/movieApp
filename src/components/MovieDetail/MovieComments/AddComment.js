import React, { useState } from 'react';
import styles from '../MovieComments/AddComment.module.css';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

function AddComment({ addComment, comments }) {
    const { img, name, role } = useSelector(state => state.persistedReducer.auth.userInfo);
    const navigate = useNavigate();

    const [comment, setComment] = useState("");

    const handleComment = () => {
        if (!comment) return;

        addComment([{
            id: Math.random(),
            avatar: img,
            header: "comment posted by " + name,
            footer: comment,
            likes: Math.floor(Math.random() * 50),
        }, ...comments]);

        setComment('');
    }

    const loginHandler = () => {
        navigate('/login')
    }

    return <>
        {role === "admin" || role === "user" ? <div className={styles.gridComments}>
            <div className={styles.header}>
                <h5>Add comment:</h5>
            </div>
            <div className={styles.footer}>
                <textarea value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
            </div>
            <button onClick={handleComment}>Add</button>
        </div>
            : <div className={styles.gridComments}>
                <div className={styles.footer}>
                </div>
                <button className={styles.loginBtn} onClick={loginHandler}>Login to add comment</button>
            </div>}
    </>
}

export default AddComment