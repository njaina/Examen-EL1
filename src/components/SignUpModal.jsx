import React, { useContext, useRef, useState } from "react";
import { UserContext } from "../context/userContext";
import {useNavigate} from "react-router-dom"

export default function SignUpModal() {
  
  const { modalState, toggleModals, signUp } = useContext(UserContext);

  const navigate = useNavigate();

  
  const [validation, setValidation] = useState("");

  const inputs = useRef([])
  const addInputs = el => {
    if(el && !inputs.current.includes(el)){
      inputs.current.push(el)
    }
  }  
  const formRef = useRef();

  const handleForm = async (e) => {
    e.preventDefault()

    if((inputs.current[1].value.length || inputs.current[2].value.length) < 6) {
      setValidation("6 characters min")
      return;
    }
    else if(inputs.current[1].value !== inputs.current[2].value) {
      setValidation("Passwords do not match")
      return;
    }

    try {

      const cred = await signUp(
        inputs.current[0].value,
        inputs.current[1].value
      )
      // formRef.current.reset();
      setValidation("")
      // console.log(cred);
      toggleModals("close")
      navigate("/private/private-home")

    } catch (err) {

      if(err.code === "auth/invalid-email") {
        setValidation("Email format invalid")
      }
      
      if(err.code === "auth/email-already-in-use") {
        setValidation("Email already used")
      }
 
    }

  }

  const closeModal = () => {
    setValidation("")
    toggleModals("close")
  }

  return (
    <>
      {modalState.signUpModal && (
        <div className=" Modal">
          <div
          onClick={closeModal}
          className=" Composer">
          </div>
            <div
              className="position-absolute top-50 start-50 translate-middle"
              style={{ minWidth: "400px" }}
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Sign Up</h5>
                    <label className="btn-close" htmlFor="close">x</label>
                    <button  id="close"
                    onClick={closeModal}
                    ></button>
                  </div>

                  <div className="modal-body">
                    <form
                    ref={formRef}
                    onSubmit={handleForm}
                    className="sign-up-form">
                      <div className="mb-3">

                        <input
                          placeholder="E-mail address"
                          ref={addInputs}
                          name="email"
                          required
                          type="email"
                          className="form-control"
                        />
                      </div>

                      <div className="mb-3">

                        <input
                          placeholder="Password"
                          ref={addInputs}
                          name="pwd"
                          required
                          type="password"
                          className="form-control"
                        />
                      </div>

                      <div className="mb-3">
                        <input
                          placeholder="Confirm password"
                          ref={addInputs}
                          name="pwd"
                          required
                          type="password"
                          className="form-control"
                        />
                        <p className="text-danger mt-1">{validation}</p>
                      </div>
                      <label className="confirm-button" htmlFor="button">Submit</label>
                      <button id="button" ></button>
                    </form>
                  </div>
                </div>
              </div>
            </div>

        </div>
      )}
    </>
  );
}
