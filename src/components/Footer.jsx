import {
  FaFacebook,
  FaTiktok,
  FaYoutube,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  const styles = {
    footer: {
      padding: "40px 8%",
      backgroundColor: "#050507",
      color: "#aaa",
      textAlign: "center",
    },
    icons: {
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      fontSize: "1.6rem",
      marginBottom: "16px",
    },
    link: {
      color: "#fff",
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.icons}>
        <a href="https://www.facebook.com/profile.php?id=61553341224865" style={styles.link}><FaFacebook /></a>
        <a href="https://www.tiktok.com/@charleskilenga" style={styles.link}><FaTiktok /></a>
        <a href="https://youtube.com/@charleskilenga" style={styles.link}><FaYoutube /></a>
        <a href="https://www.instagram.com/charlefurahi/" style={styles.link}><FaInstagram /></a>
        <a href="https://wa.me/255755794664" style={styles.link}><FaWhatsapp /></a>
        <a href="mailto:charlefurahi@gmail.com" style={styles.link}><FaEnvelope /></a>
      </div>

      <p>© {new Date().getFullYear()} Charles Kileng'a. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
