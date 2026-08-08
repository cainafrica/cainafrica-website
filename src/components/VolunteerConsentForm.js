import React, { useRef, useState } from "react";
import SignatureCanvas from "react-signature-canvas";
import { TopImage, TextWrapper, TopParaText, ConsentHeading } from "./StyledComponents.js";
import Toolbar from "./Toolbar/Toolbar.js";
import TeamCover from "../images/Our Team/TeamBanner.jpg";


const SCRIPT_URL = process.env.REACT_APP_SCRIPT_URL || 'https://script.google.com/macros/s/AKfycbxbtPLD7fyBAxSlHBS19YvWb73tdM7-cEnycnn01Mf0_xJnGULsp8eB8ZRgk6eygl6n/exec';

export default function VolunteerConsentForm(props) {
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

    formData.append('formType', 'volunteer');
    formData.append('FullName', e.target.fullName.value || '');
    formData.append('DOB', e.target.dob.value || '');
    formData.append('EmergencyContactName', e.target.emergencyName.value || '');
    formData.append('EmergencyContactPhone', e.target.emergencyPhone.value || '');
    formData.append('Consent', consent ? 'I agree to the terms and conditions' : '');
    formData.append('DateSigned', e.target.dateSigned.value || '');
    formData.append('Signature', signatureData);

    try {
      const res = await fetch(SCRIPT_URL, { method: 'POST', body: formData });
      const txt = await res.text();
      alert(txt);

      // guarded reset to avoid optional-chaining flagged by some ESLint configs
      if (formRef.current) {
        formRef.current.reset();
      }
      if (sigCanvas.current) {
        sigCanvas.current.clear();
      }

      setConsent(false);
    } catch (err) {
      console.error(err);
      alert('Error submitting form: ' + (err.message || err));
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
            <h2 id="cc-content-heading">VOLUNTEER CONSENT AND AGREEMENT</h2>

            <p>Thank you for your interest in volunteering with <b>CAIN Educational Foundation</b>. By signing this form, you acknowledge and agree to the following terms regarding your participation as a volunteer.</p>

            <ol>
            <li><ConsentHeading>Voluntary Participation</ConsentHeading><br />
                I understand that my participation as a volunteer is <b>entirely voluntary</b> and that I will not receive any wages, salary, or financial compensation for services provided.
                </li><br />
                <li><ConsentHeading>Roles & Responsibilities</ConsentHeading><br />
                I agree to carry out the duties assigned to me in a responsible, respectful, and professional manner. I understand that CAIN Educational Foundation may modify, reassign, or conclude my volunteer role at any time.
                </li><br />
                <li><ConsentHeading>Code of Conduct</ConsentHeading><br />
                I agree to uphold the values of CAIN Educational Foundation and conduct myself with integrity and respect toward staff, fellow volunteers, and program participants. I understand that <b>misconduct, unsafe behavior, or violation of policies</b> may result in immediate dismissal from the program.
                </li><br />
                <li><ConsentHeading>Confidentiality & Data Protection</ConsentHeading><br />
                I acknowledge that in the course of my volunteer work, I may have access to personal or sensitive information. I agree to <b>maintain confidentiality</b> and not disclose such information without authorization. I understand that all records, files, and materials remain the property of CAIN Educational Foundation.
                </li><br />
                <li><ConsentHeading>Safety & Health</ConsentHeading><br />
                I agree to follow all safety instructions and health guidelines provided by CAIN Educational Foundation. I confirm that I am in suitable health to perform volunteer duties and will notify the organization of any condition that may affect my ability to participate safely.
                </li><br />
                <li><ConsentHeading>Medical Emergencies</ConsentHeading><br />
                In the event of a medical emergency while volunteering, I authorize CAIN Educational Foundation staff to provide or seek necessary medical treatment. I understand that I am personally responsible for any medical expenses incurred.
                </li><br />
                <li><ConsentHeading>Photographs, Videos & Media Release</ConsentHeading><br />
                I grant permission for <b>photographs, videos, and/or audio recordings</b> of me to be taken during volunteer activities. I understand these may be used by CAIN Educational Foundation for <b>educational, promotional, reporting, fundraising, and social media purposes</b>, without compensation.
                </li><br />
                <li><ConsentHeading>Insurance & Liability</ConsentHeading><br />
                I understand that CAIN Educational Foundation does not provide health, accident, or personal property insurance for volunteers. I acknowledge that I am <b>personally responsible</b> for my own insurance coverage.
                </li><br />
                <li><ConsentHeading>Waiver & Release of Liability</ConsentHeading><br />
                I hereby release, discharge, and hold harmless <b>CAIN Educational Foundation, its officers, employees, volunteers, and partners</b> from any and all liability, claims, or damages arising from my participation as a volunteer, except in cases of gross negligence or willful misconduct.
                </li>
            </ol>

            <div>
            <span style={{fontWeight: 'bold'}}>Acknowledgment & Consent</span>
            <br />
            By signing below, I confirm that:
            <ul>
                <li>I have read and fully understood this Volunteer Consent and Agreement.</li>
                <li>I voluntarily agree to the terms outlined above.</li>
                <li>I freely consent to participate as a volunteer with CAIN Educational Foundation.</li>
            </ul>
            </div>
        </div>

        <div class="cc-form-wrapper">
            <form class="cc-form-container" ref={formRef} onSubmit={handleSubmit}>
                <label>Full Name (Volunteer)*</label>
                <input name="fullName" required />

                <label>Date of Birth*</label>
                <input type="date" name="dob" required />

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
                    <SignatureCanvas class="signature-wrapper"
                        ref={sigCanvas} penColor="black"
                        canvasProps={{ className: 'sigCanvas' }} />
                </div>

                <button class="cc-clear-btn" type="button" onClick={() => sigCanvas.current && sigCanvas.current.clear()} style={{ marginRight: 8 }}>Clear Signature</button>
                <button className="cc-button" type="submit" disabled={loading}>{loading ? 'Submitting...' : 'Submit'}</button>
            </form>
        </div>
      </div>
    </div>
  );
}