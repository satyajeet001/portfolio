import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Contact from "/Images/contact-img.svg";
import Button from "react-bootstrap/Button";
import Snackbar from "@mui/material/Snackbar";

function ConnectForm() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    number: "",
    comment: "",
  });

  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await fetch(`https://satyajeet-api.vercel.app/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log(response);
      setSnackbarOpen(true);
    } catch (error) {
      console.log("register error", error);
      setSnackbarOpen(true);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <div className="contact" id="connect">
      <h1>Contact</h1>
      <Container>
        <Row>
          <Col sm={6}>
            <img src={Contact} alt="" />
          </Col>
          <Col sm={6} className="contact-container">
            <Form onSubmit={handleSubmit}>
              <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3"
              >
                <Form.Control
                  className="custom-floating-label"
                  type="email"
                  name="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingPassword"
                label="Name"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingPassword"
                label="Number"
                className="mb-3"
              >
                <Form.Control
                  type="tel"
                  name="number"
                  placeholder="Number"
                  value={formData.number}
                  onChange={handleChange}
                />
              </FloatingLabel>
              <FloatingLabel controlId="floatingTextarea2" label="Comments">
                <Form.Control
                  as="textarea"
                  name="comment"
                  placeholder="Leave a comment here"
                  style={{ height: "100px" }}
                  className="mb-3"
                  value={formData.comment}
                  onChange={handleChange}
                />
              </FloatingLabel>
              <Button
                as="input"
                type="submit"
                style={{ width: "100%" }}
                value="Submit"
              />
            </Form>
          </Col>
        </Row>
      </Container>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message="Data submitted successfully"
      />
    </div>
  );
}

export default ConnectForm;
