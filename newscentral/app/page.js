import Image from "next/image";

export default function Home() {
  return (
    <main style={styles.main}>
      <h1 style={styles.title}>CPRG 306: Web Development 2 - Final Project</h1>
      <h2 style={{ ...styles.subtitle, fontStyle: "italic" }}>
        Khushi, Shubham, Navrajveer
      </h2>
      <h2 style={styles.subtitle}>
        <a href="/login-page" style={styles.link}>
          Proceed to NewsCentral
        </a>
      </h2>
    </main>
  );
}

const styles = {
  main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    backgroundColor: "#f5f5f5",
    padding: "0 20px",
    textAlign: "center",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "1rem",
  },
  subtitle: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "1rem",
    color: "#333",
  },
  link: {
    color: "#0070f3",
    textDecoration: "none",
    fontWeight: "bold",
  },
};
