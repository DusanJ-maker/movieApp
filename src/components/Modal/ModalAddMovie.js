import React, { useState } from "react";
import { createPortal } from "react-dom";
import styles from "../Modal/ModalAddMovie.module.css";
import { useDispatch } from "react-redux";
import { addMovies } from "../../features/movies/movieSlice";

const ModalAddMovie = ({ setShowModal }) => {
    const [movieName, setMovieName] = useState('');
    const [movieYear, setMovieYear] = useState(0);

    const dispatch = useDispatch();

    //submit movie
    const handleSubmit = (e) => {
        e.preventDefault();

        //dispatch added movie
        dispatch(addMovies({
            id: 10,
            url: "https://yts.mx/movies/ali-the-queens-2021",
            imdb_code: "tt9419884",
            title: movieName,
            title_english: movieName,
            title_long: movieName + (movieYear),
            slug: "doctor-strange-in-the-multiverse-of-madness-2022",
            year: movieYear,
            rating: 6.9,
            runtime: 0,
            genres: [
                "Action",
                "Adventure",
                "Fantasy",
                "Horror",
                "Sci-Fi"
            ],
            summary: "Following the events of Spider-Man No Way Home, Doctor Strange unwittingly casts a forbidden spell that accidentally opens up the multiverse. With help from Wong and Scarlet Witch, Strange confronts various versions of himself as well as teaming up with the young America Chavez while traveling through various realities and working to restore reality as he knows it. Along the way, Strange and his allies realize they must take on a powerful new adversary who seeks to take over the multiverse.—Blazer346",
            description_full: "Following the events of Spider-Man No Way Home, Doctor Strange unwittingly casts a forbidden spell that accidentally opens up the multiverse. With help from Wong and Scarlet Witch, Strange confronts various versions of himself as well as teaming up with the young America Chavez while traveling through various realities and working to restore reality as he knows it. Along the way, Strange and his allies realize they must take on a powerful new adversary who seeks to take over the multiverse.—Blazer346",
            synopsis: "Following the events of Spider-Man No Way Home, Doctor Strange unwittingly casts a forbidden spell that accidentally opens up the multiverse. With help from Wong and Scarlet Witch, Strange confronts various versions of himself as well as teaming up with the young America Chavez while traveling through various realities and working to restore reality as he knows it. Along the way, Strange and his allies realize they must take on a powerful new adversary who seeks to take over the multiverse.—Blazer346",
            yt_trailer_code: "7GQjuLqVabM",
            language: "en",
            mpa_rating: "PG-13",
            background_image: "https://yts.mx/assets/images/movies/doctor_strange_in_the_multiverse_of_madness_2022/background.jpg",
            background_image_original: "https://yts.mx/assets/images/movies/doctor_strange_in_the_multiverse_of_madness_2022/background.jpg",
            small_cover_image: "https://i.pinimg.com/736x/73/35/80/73358014317bf84ce35fca9226b9c838.jpg",
            medium_cover_image: "https://i.pinimg.com/736x/73/35/80/73358014317bf84ce35fca9226b9c838.jpg",
            large_cover_image: "https://i.pinimg.com/736x/73/35/80/73358014317bf84ce35fca9226b9c838.jpg",
            state: "ok",
            torrents: [
                {
                    url: "https://yts.mx/torrent/download/4F24ED9FE5B4DC3F8D4D8AC23AADFFAB5F4F7E6E",
                    hash: "4F24ED9FE5B4DC3F8D4D8AC23AADFFAB5F4F7E6E",
                    quality: "3D",
                    type: "bluray",
                    seeds: 55,
                    peers: 9,
                    size: "2.41 GB",
                    size_bytes: 2587717796,
                    date_uploaded: "2022-09-03 20:01:58",
                    date_uploaded_unix: 1662228118
                },
            ],
            date_uploaded: "2022-06-21 16:08:13",
            date_uploaded_unix: 1655820493
        }))

        //clear states
        setMovieName('');
        setMovieYear(0);
        setShowModal(false);

    }


    return createPortal(
        <div className={styles.modal}>
            <div className={styles.modalContent}>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <h2>Add movie:</h2>
                    <label htmlFor="moviename">Movie name</label>
                    <input
                        type="text"
                        id="movieyear"
                        value={movieName}
                        className={styles.input}
                        onChange={(e) => setMovieName(e.target.value)}
                    />
                    <label htmlFor="movieyear">Movie year</label>
                    <input
                        type="number"
                        id="movieyear"
                        value={movieYear}
                        className={styles.input}
                        onChange={(e) => setMovieYear(e.target.value)}
                    />
                    <button type="submit">Add</button>
                    <button className={styles.btnClose} onClick={() => setShowModal(false)}>Close</button>
                </form>
            </div>
        </div >,
        document.getElementById("portal-root")
    );
};

export default ModalAddMovie;