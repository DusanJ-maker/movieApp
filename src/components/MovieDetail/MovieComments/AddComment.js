import React, { useState } from 'react';
import styles from '../MovieComments/AddComment.module.css';
import { useSelector } from 'react-redux';

function AddComment({ addComment, comments }) {
    const { img, name } = useSelector(state => state.persistedReducer.auth.userInfo);


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

    return <>
        <div className={styles.gridComments}>
            <div className={styles.header}>
                <h5>Add comment:</h5>
            </div>
            <div className={styles.footer}>
                <textarea value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
            </div>
            <button onClick={handleComment}>Add</button>
        </div>
    </>
}

export default AddComment