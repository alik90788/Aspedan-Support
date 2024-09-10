import React from 'react';

function Delete() {
  return (
    <div>
      <div style={styles.container}>
        <div style={styles.logoContainer}>
          <img
            src={require("../../assets/logo/Aspedan.png")} // Replace with your logo source
            alt="Logo"
            style={styles.logo}
          />
        </div>
      </div>
      <div style={styles.mainContainer}>
        <div style={styles.contentBox}>
          <div style={styles.header}>
            Request to delete your account
          </div>
          <div style={styles.body}>
            <p>
              In order to delete your account and its associated data from the
              Aspedan mobile app, please email us by clicking the link below.
            </p>
            <p>
              Please make sure to email from the email address associated with
              your account that you want to delete.
            </p>
            <p>
              <a href="mailto:hello@aspedan.com" style={styles.link}>
                Request Account Deletion
              </a>
            </p>
            <p>
              For any questions or concerns, please contact us at{" "}
              <a href="mailto:hello@aspedan.com" style={styles.emailLink}>
                hello@aspedan.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  mainContainer: {
    display: 'flex',
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    height: "40vh",
    padding: "10px",
    background: "#E3F3F9",
  },
  logoContainer: {
    marginBottom: "20px",
  },
  logo: {
    width: "80px", // Adjust size for responsiveness
    marginBottom: "100px"
  },
  contentBox: {
    width: "100%",
    maxWidth: "602px",
    backgroundColor: "white",
    borderRadius: "24px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    position: 'absolute',
    top: "220px"
  },
  header: {
    backgroundColor: "#1E2E3A",
    color: "white",
    padding: "24px 40px 24px 40px",
    fontSize: "20px",
    fontWeight: "bold",
    fontStyle: "NunitoSans"
  },
  body: {
    padding: "24px 40px 24px 40px",
    fontSize: "14px",
    color: "#02222A",
  },
  link: {
    color: "#007BFF",
    textDecoration: "underline",
  },
  emailLink: {
    color: "#007BFF",
    textDecoration: "none",
  },
  '@media (max-width: 768px)': {
    contentBox: {
      top: "240px"
    }
  },
};

export default Delete;