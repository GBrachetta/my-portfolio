import * as React from "react";
import { Link } from "gatsby";

const pageStyles = {

  margin: "auto",
  alignItems: "center",
  justifyContent: "center",
  color: "#232129",
  padding: "160px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const headingStyles = {
  marginLeft: 0,
  marginRight: 0,
  marginTop: 0,
  marginBottom: 64,
};

const paragraphStyles = {
  marginBottom: 48,
};

const buttonStyle = {
  fontSize: "1.25rem",
  padding: "0.25rem 0.75rem",
  borderRadius: "0.5rem",
  color: "white",

  backgroundColor: "#333",
  borderColor: "#333",
  cursor: "pointer",
  textDecoration: "none",

  "&:hover": {
    backgroundColor: "#fff",
    borderColor: "#333",
  },

};

const NotFoundPage = () => (
  <main style={pageStyles}>
    <h1 style={headingStyles}>PAGE NOT FOUND</h1>
    <p style={paragraphStyles}>
      We could not find what you were looking for
      <br />
      <br />
      <button type="button" style={buttonStyle}>
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>Go home</Link>
      </button>
    </p>
  </main>
);

export default NotFoundPage;

export const Head = () => <title>Not found</title>;
