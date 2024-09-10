import React, { useState } from 'react';
import axios from 'axios';

function Support() {

  const [formData, setFormData] = useState({
    firstName: '',
    surname: '',
    email: '',
    helpRequest: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://aspedan-bop-backend.eu-west-2.elasticbeanstalk.com/medicheck/contactMail", {
      first_name: formData.firstName, surname: formData.surname, email: formData.email, helpRequest: formData.helpRequest
    })
  };

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
            <p style={styles.headerTextHead}>Do you need assistance?</p>
            <p style={styles.headerText}>At Aspedan, we are committed to providing you with the best possible experience. If you need any assistance, please don't hesitate to get in touch with us.</p>
          </div>
          <form style={styles.form} onSubmit={handleSubmit}>
            <div style={styles.formGroup}>
              <div style={styles.inputContainer}>
                <label style={styles.label}>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  style={styles.input}
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div style={styles.inputContainer}>
                <label style={styles.label}>Surname</label>
                <input
                  type="text"
                  name="surname"
                  placeholder="Surname"
                  value={formData.surname}
                  style={styles.input}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div style={styles.inputContainer}>
              <label style={styles.label}>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your registered email"
                value={formData.email}
                onChange={handleChange}
                style={styles.inputFull}
              />
            </div>

            <div style={{ marginTop: 16 }}>
              <div style={styles.inputContainer}>
                <label style={styles.label}>Tell Us How We Can Help You</label>
                <textarea
                  name="helpRequest"
                  placeholder="Tell us how we can help you"
                  value={formData.helpRequest}
                  onChange={handleChange}
                  style={{ ...styles.inputFull, height: '100px', resize: 'none' }}
                />
              </div>
            </div>

            <div style={styles.buttonContainer}>
              <button type="submit" style={styles.button} on>
                Send
              </button>
            </div>
            <div style={styles.emailSection}>
              <p style={styles.emailHeader}>Prefer Email? No Problem!</p>
              <p style={styles.emailText}>
                We understand that sometimes you might prefer to reach out directly
                via email. If that's the case, please feel free to send us an email
                with your support request.
              </p>
              <p style={styles.emailLink}>
                <p style={styles.emailTextBold}>Email Us At:</p>
                <p style={styles.emailText}>Hello@aspedan.com</p>
              </p>
            </div>
          </form>

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
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: "#1E2E3A",
    padding: "24px 40px 24px 40px",
    gap: 8
  },
  headerTextHead: {
    fontSize: "20px",
    fontWeight: "bold",
    fontStyle: "NunitoSans",
    color: "white",
    margin: 0,
    padding: 0
  },
  headerText: {
    fontSize: "14px",
    fontStyle: "NunitoSans",
    color: "white",
    lineHeight: "23px",
    margin: 0,
    padding: 0
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
    marginTop: "24px",
    display: 'flex',
    flexDirection: 'column',
    gap: "8px"
  },
  form: {
    padding: "24px 40px 24px 40px",
    backgroundColor: "#F8FAFB"
  },
  formGroup: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '16px',
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1',
    marginRight: '10px',
  },
  label: {
    fontSize: '8px',
    color: '#0F85A3',
    marginBottom: '5px',
    lineHeight: '12px',
    textTransform: 'uppercase',
    fontWeight: '700',
  },
  input: {
    padding: '12px 16px 12px 16px',
    fontSize: '14px',
    borderRadius: '16px',
    border: '1px solid var(--Primary-Primary-5, rgba(66, 60, 73, 0.1))',
    '::placeholder': {
      color: "#4D5B64"
    }
  },
  inputFull: {
    width: '100%',
    padding: '12px 16px 12px 16px',
    fontSize: '14px',
    borderRadius: '16px',
    border: '1px solid var(--Primary-Primary-5, rgba(66, 60, 73, 0.1))',
    '::placeholder': {
      color: "#4D5B64"
    }
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: "16px"
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#58A9DC',
    color: '#FFF',
    padding: '10px 20px',
    borderRadius: '50px',
    border: 'none',
    fontSize: '14px',
    cursor: 'pointer',
  },
  buttonIcon: {
    marginLeft: '5px',
  },
  emailSection: {
    marginTop: "40px"
  },
  emailHeader: {
    fontSize: '16px',
    marginBottom: '8px',
    marginTop: 0,
    fontWeight: '700',
    lineHeight: "19px",
    fontStyle: "NunitoSans"
  },
  emailText: {
    fontSize: '14px',
    marginBottom: '10px',
    color: '#02222A',
    lineHeight: "24px",
    margin: 0,
    padding: 0
  },
  emailTextBold: {
    fontSize: '14px',
    marginBottom: '10px',
    color: '#02222A',
    lineHeight: "24px",
    fontWeight: "800",
    margin: 0,
    padding: 0
  },
  emailLink: {
    fontSize: '14px',
    color: '#6A7C89',
  },
  emailAddress: {
    color: '#58A9DC',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  '@media (max-width: 768px)': {
    contentBox: {
      top: "240px"
    }
  },
};

export default Support;