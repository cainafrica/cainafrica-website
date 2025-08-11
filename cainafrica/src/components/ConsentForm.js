// src/ConsentForm.js
import React, { useRef, useState } from "react";
import SignatureCanvas from "react-signature-canvas";
import { TopImage, TextWrapper, TopParaText } from "./StyledComponents.js";
import Toolbar from "./Toolbar/Toolbar.js";
import TeamCover from "../images/Our Team/TeamBanner.jpg";

export default function ConsentForm(props) {
  const sigCanvas = useRef({});
  const [consent, setConsent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!consent) {
      alert("Please provide consent to proceed.");
      return;
    }

    const signatureData = sigCanvas.current.getTrimmedCanvas().toDataURL("image/png");

    const formData = new URLSearchParams();
    formData.append("FullName", e.target.fullName.value);
    formData.append("Phone", e.target.phone.value);
    formData.append("Email", e.target.email.value);
    formData.append("Signature", signatureData);

    fetch("YOUR_DEPLOYED_WEB_APP_URL", {
      method: "POST",
      body: formData
    })
      .then((res) => res.text())
      .then((data) => {
        alert(data);
        e.target.reset();
        sigCanvas.current.clear();
        setConsent(false);
      })
      .catch((err) => alert("Error submitting form: " + err));
  };

  return (
    <div>
      <TopImage style={{ backgroundImage: `url(${TeamCover})` }}>
        <Toolbar drawerClickHandler={props.drawerToggleClickHandler} />
        {props.sideDrawer}
        <TextWrapper>
          <TopParaText>
            “REMEMBER, EACH ONE OF US HAS THE POWER TO CHANGE THE WORLD.” – YOKO ONO
          </TopParaText>
        </TextWrapper>
      </TopImage>

      <div style={{ padding: "20px", maxWidth: "500px", margin: "0 auto" }}>
        <h1>Parents' Consent Form</h1>
        <form onSubmit={handleSubmit}>
          <label>Full Name*</label><br />
          <input name="fullName" required style={{ width: "100%", marginBottom: "10px" }} />

          <label>Phone*</label><br />
          <input name="phone" required style={{ width: "100%", marginBottom: "10px" }} />

          <label>Email (optional)</label><br />
          <input name="email" style={{ width: "100%", marginBottom: "10px" }} />

          <label>Consent*</label><br />
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            style={{ marginBottom: "10px" }}
          /> I agree to the terms.<br />

          <label>Signature*</label>
          <div
            style={{
              border: "1px solid black",
              marginBottom: "10px",
              width: "100%",
              height: "200px"
            }}
          >
            <SignatureCanvas
              ref={sigCanvas}
              penColor="black"
              canvasProps={{ width: 460, height: 200, className: "sigCanvas" }}
            />
          </div>
          <button type="button" onClick={() => sigCanvas.current.clear()} style={{ marginBottom: "10px" }}>
            Clear Signature
          </button>
          <br />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
