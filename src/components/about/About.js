import SectionCard from "../UI/SectionCard";

import styles from "./About.module.css";

const About = (props) => {
  return (
    <SectionCard>
      <h2>Sobre</h2>
      <p className={styles.description}>
        Descrição do grupo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
        ullamcorper aliquet lectus, ac euismod orci pharetra sit amet.
        Vestibulum ut urna auctor, volutpat massa at, lobortis metus. Quisque
        eget odio turpis.
      </p>
      <img
        src="images/vitor.jpg"
        alt="Foto de Vitor Melo"
        width="100px"
        height="100px"
        className={styles.image}
      />
      <p>
        Mini Currículo do Vifume. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Cras ullamcorper aliquet lectus, ac euismod orci
        pharetra sit amet.
      </p>
    </SectionCard>
  );
};

export default About;
