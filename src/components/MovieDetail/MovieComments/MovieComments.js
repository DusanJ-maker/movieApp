import React from 'react';
import styles from '../MovieComments/MovieComments.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faHeart } from "@fortawesome/free-solid-svg-icons";

function MovieComments() {

  const starIcon = <FontAwesomeIcon icon={faStar} />;
  const heartIcon = <FontAwesomeIcon icon={faHeart} />;

  const comments = [
    {
      id: 1,
      avatar: "https://img.yts.mx/assets/images/users/thumb/default_avatar.jpg",
      header: "alexjoy12 March 01, 2017 at 01:06 pm",
      footer: "On the 1080p version the image is distorted. Can you replace it? Thanks.",
      likes: 5
    },
    {
      id: 2,
      avatar: "https://img.yts.mx/assets/images/users/thumb/17646951478171020.jpg",
      header: "D00M3D2 November 23, 2019 at 04:40 pm",
      footer: "Can you upload the movie with the correct resolution?",
      likes: 1
    },
    {
      id: 3,
      avatar: "https://img.yts.mx/assets/images/users/thumb/17365871475020098.jpg",
      header: "AGnev95 November 23, 2019 at 04:40 pm",
      footer: "1080p is a widescreen movie?",
      likes: 3
    },
    {
      id: 4,
      avatar: "https://img.yts.mx/assets/images/users/thumb/17365871475020098.jpg",
      header: "AGnev95 November 23,",
      footer: "1080p is a wide?",
      likes: 3
    },
  ]

  return (
    <div className={styles.centralDiv}>
      <div className={styles.gridDiv}>
        <div>
            <div className={styles.title}><h2>5 Comments</h2></div>
            {comments.map((comment) => {
              return (
                <div key={comment.id} className={styles.gridComments}>
                  <div className={styles.img}><img src={comment.avatar} alt='avatarImg'></img></div>
                  <div className={styles.header}>
                    <h5>{comment.header}</h5>
                  </div>
                  <div className={styles.footer}><h4>{comment.footer}</h4></div>
                  <div className={styles.aside}>
                    <h4>{comment.likes} {heartIcon}</h4></div>
                </div>
              )
            })}
        </div>
        <div className={styles.reviewsDiv}>
          <div className={styles.titleReviews}><h4>{starIcon} Movie reviews</h4></div>
          <div className={styles.reviewsDiv}>
            <div className={styles.flexRow}><h4>Reviewed by <strong>ma-cortes</strong> {starIcon} 7/10</h4></div>
            <div className={styles.flexRow}>
              <h4>Intrique, action and suspense...</h4>
            </div>
            <div className={styles.flexRowBorder}>
              <h4>
                The film concerns an experienced but tiring cop named Jack
                (Bruce Willis) about his retirement. The aging detective is
                assigned the last mission, transporting sixteen blocks away a
                foul-mouthed delinquent, from the precinct until the court. He
                is aware that the African-American young named Eddie Buken (Mos
                Def) is allegedly to testify against NYPD agents. He made a
                covenant with the D.A. office for identifying corrupt detectives
                at courthouse. Meantime, along the way, they're attacked by
                vicious gunfighters and pursued by all N.Y.C policemen and they
                find themselves under siege into a bus and surrounded by the
                SWAT. Then, they team up to flee, trying to get out towards
                the trial building.
              </h4>
            </div>
          </div>
          <div className={styles.reviewsDiv}>
            <div className={styles.flexRow}><h4>Reviewed by <strong>ma-cortes</strong> {starIcon} 7/10</h4></div>
            <div className={styles.flexRow}>
              <h4>Intrique, action and suspense...</h4>
            </div>
            <div className={styles.flexRowBorder}>
              <h4>
                The film concerns an experienced but tiring cop named Jack
                (Bruce Willis) about his retirement. The aging detective is
                assigned the last mission, transporting sixteen blocks away a
                foul-mouthed delinquent, from the precinct until the court. He
                is aware that the African-American young named Eddie Buken (Mos
                Def) is allegedly to testify against NYPD agents. He made a
                covenant with the D.A. office for identifying corrupt detectives
                at courthouse. Meantime, along the way, they're attacked by
                vicious gunfighters and pursued by all N.Y.C policemen and they
                find themselves under siege into a bus and surrounded by the
                SWAT. Then, they team up to flee, trying to get out towards
                the trial building.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieComments