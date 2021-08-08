import style from "./Header.module.css";

const Header = () => {
  return (
    <header className={style.header}>
      <img
        src="/images/banner.jpg"
        alt="Um muro com a frase Muevete America Latina"
        className={style["header-img"]}
      />
      <h1 className={style.title}>
        Rodadas de Conversa América Latina e Século XXI
      </h1>
    </header>
  );
};

export default Header;
