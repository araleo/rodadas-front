import styles from "./SectionCard.module.css";

const SectionCard = (props) => {
  let hasColor = false;
  if (props.colorBackground === "true") {
    hasColor = true;
  }

  return (
    <section className={`${styles.section} ${hasColor && styles.color}`}>
      {props.children}
    </section>
  );
};

export default SectionCard;
