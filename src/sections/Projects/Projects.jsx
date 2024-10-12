import styles from "./ProjectsStyles.module.css";
import SimpleRecipe from "../../assets/simple-recipe.png";
import geminiai from "../../assets/gemin-ai.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        
        {/* Hipsster Project */}
        <ProjectCard
          src={geminiai}
          h3="GeminiAi Clone"
          p="ReactJs, GeminiAI API"
          viewLink="https://geminiai-cl0ne.netlify.app/"
          githubLink="https://github.com/saikota7/geminiAi-clone"
        />
        
        {/* SimpleRecipe Project */}
        <ProjectCard
          src={SimpleRecipe}
          h3="SimpleRecipe"
          p="HTML, CSS, JAVASCRIPT"
          viewLink="https://saikota7.github.io/simplyRecipes/"
          githubLink="https://github.com/saikota7/simplyRecipes"
        />
        
      </div>
    </section>
  );
}

export default Projects;
