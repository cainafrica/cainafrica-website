import React, { useRef, useState } from "react";
import SignatureCanvas from "react-signature-canvas";
import { TopImage, TextWrapper, TopParaText } from "./StyledComponents.js";
import Toolbar from "./Toolbar/Toolbar.js";
import TeamCover from "../images/Our Team/TeamBanner.jpg";

export default function ConsentForm(props) {
  const sigCanvas = useRef({});
  const formRef = useRef(null);
  const [consent, setConsent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!consent) {
      alert("Please confirm consent to proceed.");
      return;
    }

    const signatureData = sigCanvas.current.getTrimmedCanvas().toDataURL("image/png");

    const formData = new URLSearchParams();
    formData.append("StudentName", e.target.studentName.value);
    formData.append("Class", e.target.classLevel.value);
    formData.append("ParentName", e.target.parentName.value);
    formData.append("DateSigned", e.target.dateSigned.value);
    formData.append("ContactNumber", e.target.contactNumber.value);
    formData.append("Signature", signatureData);

    fetch("https://script.google.com/macros/s/AKfycbyRzR3Z_I5SrCYGzqQHxUBqQAJp-xP_p4lYT-K49KzvlPP4iMBuOxy6mtArgYyQJ9q_/exec", {
      method: "POST",
      body: formData
    })
      .then((res) => res.text())
      .then((data) => {
        alert(data);
        if (formRef.current) {
          formRef.current.reset(); // reset form
        }
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

      {/* Consent Agreement */}
      <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
        <h2>PARENTAL CONSENT AGREEMENT - CAIN DAILY TUTORIAL PROGRAM</h2>
        <p>By signing this form, I, the undersigned parent/legal guardian of the student named below, hereby give my full consent for my child/ward to participate in the Daily Tutorial program at CAIN Educational Centre.</p>
         <p><strong>Voluntary Participation</strong> <br></br>I understand that participation in this program is voluntary and intended to provide academic support and enrichment for students in Junior Secondary School (JSS1 – JSS3) and Senior Secondary School (SS1 – SS3).</p>
        
         <p><strong>Program Schedule</strong> <br></br>I am aware that the tutorials will be held on a daily basis as scheduled by the program coordinators. I agree to ensure my child/ward attends regularly and punctually, and I understand the importance of consistent participation.</p>

         <p><strong>Code of Conduct</strong> <br></br>I understand that students are expected to adhere to the rules and regulations of the program, including respectful behavior toward tutors and fellow students. I accept that disciplinary action may be taken in cases of misconduct, including possible dismissal from the program.</p>

         <p><strong>Transportation and Safety</strong> <br></br>I acknowledge that it is my responsibility to ensure safe transportation arrangements for my child/ward to and from the tutorial venue. I release the organizers from any liability arising from transportation-related issues.</p>

         <p><strong>Medical Emergencies</strong><br></br> In the event of a medical emergency, I authorize the program staff to take appropriate action, including seeking professional medical assistance. I understand that every reasonable effort will be made to contact me immediately.</p>

         <p><strong>Photographs and Media</strong> <br></br>I give my permission for photographs and/or videos of my child/ward to be taken during program activities, which may be used for promotional, educational, or reporting purposes by the organization.</p>

         <p><strong>Data and Privacy</strong> <br></br>I understand that any personal information provided will be kept confidential and used solely for administrative and communication purposes related to the program.</p>

         <p>By signing below, <strong>I confirm that I have read and understood the above terms and give my informed consent for my child/ward to participate in the daily tutorial program.</strong></p>
      </div>

      {/* Form */}
      <div style={{ padding: "20px", maxWidth: "500px", margin: "0 auto" }}>
        <h3>Student & Parent/Guardian Information</h3>
        <form ref={formRef} onSubmit={handleSubmit}>
          <label>Student’s Full Name*</label><br />
          <input name="studentName" required style={{ width: "100%", marginBottom: "10px" }} />

          <label>Class*</label><br />
          <select name="classLevel" required style={{ width: "100%", marginBottom: "10px" }}>
            <option value="">Select Class</option>
            <option>JSS1</option>
            <option>JSS2</option>
            <option>JSS3</option>
            <option>SS1</option>
            <option>SS2</option>
            <option>SS3</option>
          </select>

          <label>Parent/Guardian’s Name*</label><br />
          <input name="parentName" required style={{ width: "100%", marginBottom: "10px" }} />

          <label>Date*</label><br />
          <input type="date" name="dateSigned" required style={{ width: "100%", marginBottom: "10px" }} />

          <label>Contact Number*</label><br />
          <input name="contactNumber" required style={{ width: "100%", marginBottom: "10px" }} />

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
          <button
            type="button"
            onClick={() => sigCanvas.current.clear()}
            style={{ marginBottom: "10px" }}
          >
            Clear Signature
          </button>
          <br />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

