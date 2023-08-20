import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "../../styles/Home.module.css"
import logo from "../../public/logo.svg"

export default function Foss() {
  return (
    <>
      <Header />
      <h1>Hello Foss</h1>
      <img src={logo} alt="logo" className={styles.logoimg} />
    </>
  );
}
