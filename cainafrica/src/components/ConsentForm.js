import React, { useRef, useState } from "react";
import SignatureCanvas from "react-signature-canvas";

export default function ConsentForm() {
  const sigCanvas = useRef({});
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    consent: false,
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const clearSignature = () => sigCanvas.current.clear();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.consent) {
      alert("Please agree to the terms before submitting.");
      return;
    }

    const signature = sigCanvas.current.getTrimmedCanvas().toDataURL("image/png");
    setLoading(true);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyTp2TWyfS39yV-yVx47WhR61CmE3fVSQ2JVxHUXc9vG-iYqlL_swPTApbIGuMOoYX1/exec",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fullName: form.fullName,
            phone: form.phone,
            email: form.email,
            signature,
          }),
        }
      );

      const result = await response.json();
      console.log("Server response:", result);

      if (response.ok && result.result === "success") {
        alert("Form submitted successfully!");
        setForm({ fullName: "", phone: "", email: "", consent: false });
        clearSignature();
      } else {
        alert(`Error: ${result.message || "Submission failed"}`);
      }
    } catch (err) {
      console.error("Network error:", err);
      alert("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "auto" }}>
      <h2>Parent Consent Form</h2>
      <form onSubmit={handleSubmit}>
        <label>Full Name:</label>
        <input
          name="fullName"
          value={form.fullName}
          onChange={handleChange}
          required
        />

        <label>Phone:</label>
        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          required
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <label>Signature:</label>
        <SignatureCanvas
          ref={sigCanvas}
          penColor="black"
          canvasProps={{
            width: 450,
            height: 150,
            className: "sigCanvas",
            style: { border: "1px solid #000" },
          }}
        />
        <button type="button" onClick={clearSignature}>
          Clear Signature
        </button>

        <div>
          <input
            type="checkbox"
            name="consent"
            checked={form.consent}
            onChange={handleChange}
          />
          <label>I agree to the terms and conditions</label>
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
