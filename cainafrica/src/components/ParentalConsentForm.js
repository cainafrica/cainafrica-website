import React, { useRef, useState } from "react";
import SignatureCanvas from "react-signature-canvas";
import { TopImage, TextWrapper, TopParaText, ConsentHeading } from "./StyledComponents.js";
import Toolbar from "./Toolbar/Toolbar.js";
import TeamCover from "../images/Our Team/TeamBanner.jpg";

const SCRIPT_URL = process.env.REACT_APP_SCRIPT_URL || 'https://script.google.com/macros/s/AKfycbxbtPLD7fyBAxSlHBS19YvWb73tdM7-cEnycnn01Mf0_xJnGULsp8eB8ZRgk6eygl6n/exec';

export default function ParentalConsentForm(props) {
  const sigCanvas = useRef(null);
  const formRef = useRef(null);
  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!consent) return alert('Please confirm consent to proceed.');
    if (!sigCanvas.current || sigCanvas.current.isEmpty()) return alert('Please provide a signature.');

    setLoading(true);
    const signatureData = sigCanvas.current.getTrimmedCanvas().toDataURL('image/png');
    const formData = new URLSearchParams();

    formData.append('formType', 'parent');
    formData.append('StudentFullName', e.target.studentName.value || '');
    formData.append('StudentDOB', e.target.studentDob.value || '');
    formData.append('StudentClass', e.target.classLevel.value || '');
    formData.append('ParentFullName', e.target.parentName.value || '');
    formData.append('EmergencyContactName', e.target.emergencyName.value || '');
    formData.append('EmergencyContactPhone', e.target.emergencyPhone.value || '');
    formData.append('Consent', consent ? 'I agree to the terms and conditions' : '');
    formData.append('DateSigned', e.target.dateSigned.value || '');
    formData.append('Signature', signatureData);

    try {
      const res = await fetch(SCRIPT_URL, { method: 'POST', body: formData });
      const txt = await res.text();
      alert(txt);

      // guarded reset to avoid optional-chaining usage that can trip some ESLint configs
      if (formRef.current) {
        formRef.current.reset();
      }

      if (sigCanvas.current) {
        sigCanvas.current.clear();
      }

      setConsent(false);
    } catch (err) {
      console.error(err);
      alert('Error submitting form: ' + err.message);
    } finally {
      setLoading(false);
    }
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
      
      <div class="cc-main-container">
        <div class="cc-consent-content">
          <h2>PARENTAL CONSENT AND RELEASE AGREEMENT</h2>

          <p>By signing this form, I, the undersigned parent/legal guardian of the student named below, hereby grant full consent for my child/ward to participate in the programs organized by <b>CAIN Educational Foundation</b>.</p>

          <ol>
            <li><ConsentHeading>Voluntary Participation</ConsentHeading><br />
                I understand that participation in CAIN Educational Foundation programs is voluntary and designed to provide educational support, enrichment, and skills development for students.
              </li><br />
              <li><ConsentHeading>Program Schedule & Attendance</ConsentHeading><br />
                I acknowledge that program activities will be conducted as scheduled by CAIN Educational Foundation. I agree to ensure that my child/ward attends all sessions regularly and punctually, recognizing that consistent participation is essential for progress.
              </li><br />
              <li><ConsentHeading>Code of Conduct</ConsentHeading><br />
                I understand that all students are expected to maintain respectful behavior toward tutors, staff, and fellow students, and to comply with the rules and regulations of the program. I accept that disciplinary action, including suspension or dismissal, may result from misconduct or failure to comply with program rules.
              </li><br />
              <li><ConsentHeading>Transportation & Release of Liability</ConsentHeading><br />
              I acknowledge that I am solely responsible for making safe and reliable transportation arrangements for my child/ward to and from the CAIN Educational Center. I release <b>CAIN Educational Foundation, its staff, volunteers, and affiliates</b> from any liability for accidents, delays, or incidents related to transportation.
              </li><br />
              <li><ConsentHeading>Medical Treatment & Emergencies</ConsentHeading><br />
              In the event of a medical emergency, I authorize CAIN Educational Foundation staff to administer basic first aid and to seek professional medical assistance if necessary. I understand that every effort will be made to contact me or an emergency contact immediately. I agree to assume full financial responsibility for any medical treatment required.
              </li><br />
              <li><ConsentHeading>Photographs, Videos & Media Release</ConsentHeading><br />
              I grant permission for <b>photographs, videos, and/or audio recordings</b> of my child/ward to be taken during program activities. I understand these may be used by CAIN Educational Foundation for <b>educational, promotional, fundraising, reporting, and social media purposes</b>, without compensation.
              </li><br />
              <li><ConsentHeading>Data Privacy</ConsentHeading><br />
              I understand that any personal information provided will be kept strictly confidential and used only for administrative, programmatic, or communication purposes related to CAIN Educational Foundation.
              </li><br />
              <li><ConsentHeading>Waiver & Release of Liability</ConsentHeading><br />
              I hereby release and hold harmless <b>CAIN Educational Foundation, its officers, employees, volunteers, and partners</b> from any and all liability, claims, or damages that may arise from my child’s participation in the program, except in cases of gross negligence or willful misconduct.
              </li>
          </ol>

          <div>
            <span style={{fontWeight: 'bold'}}>Acknowledgment & Consent</span>
            <br />
            By signing below, I confirm that:
            <ul>
              <li>I am the parent/legal guardian of the student named below.</li>
              <li>I have read and understood the terms of this agreement.</li>
              <li>I give my informed consent for my child/ward to participate in the programs of CAIN Educational Foundation.</li>
            </ul>
          </div>
        </div>

        <div class="cc-form-wrapper">
          <form ref={formRef} onSubmit={handleSubmit}>
            <label>Student's Full Name*</label>
            <input name="studentName" required />

            <label>Student's Date of Birth*</label>
            <input type="date" name="studentDob" required />

            <label>Student's Class*</label>
            <input name="classLevel" required />

            <label>Parent/Guardian's Full Name*</label>
            <input name="parentName" required />

            <label>Emergency Contact's Name*</label>
            <input name="emergencyName" required />

            <label>Emergency Contact's Phone Number*</label>
            <input name="emergencyPhone" required />

            <label>
              <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} style={{ marginRight: 8 }} required />
              I agree to the terms and conditions
            </label>

            <label>Date*</label>
            <input type="date" name="dateSigned" required style={{ width: '100%', marginBottom: 10 }} />

            <label>Signature*</label>
            <div style={{ border: '1px solid #333', height: 200, marginBottom: 10 }}>
              <SignatureCanvas ref={sigCanvas} penColor="black" canvasProps={{ width: 600, height: 200, className: 'sigCanvas' }} />
            </div>

            <button class="cc-clear-btn" type="button" onClick={() => sigCanvas.current && sigCanvas.current.clear()} style={{ marginRight: 8 }}>Clear Signature</button>
            <button className="cc-button" type="submit" disabled={loading}>{loading ? 'Submitting...' : 'Submit'}</button>
          </form>
        </div>
      </div>
    </div>
  );
}