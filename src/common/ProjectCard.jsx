import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import styles from './ProjectCard.module.css';

const ProjectCard = ({ src, h3, p, viewLink, githubLink }) => {
  return (
    <div className={styles.projectCard}>
      <img src={src} alt={h3} className={styles.projectImage} />
      <h3>{h3}</h3>
      {/* Apply the smaller font size class to the <p> tag */}
      <p className={styles.projectDescription}>{p}</p>
      
      <div className={styles.icons}>
        <a
          href={viewLink}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconLink}
        >
          <FontAwesomeIcon icon={faLink} /> View
        </a>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconLink}
        >
          <FontAwesomeIcon icon={faGithub} /> GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
