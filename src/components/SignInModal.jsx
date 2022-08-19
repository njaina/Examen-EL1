import React, { useContext, useRef, useState } from "react";
import { UserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";

export default function SignUpModal() {
  const { modalState, toggleModals, signIn } = useContext(UserContext);

  const navigate = useNavigate();

  const [validation, setValidation] = useState("");

  const inputs = useRef([]);
  const addInputs = (el) => {
    if (el && !inputs.current.includes(el)) {
      inputs.current.push(el);
    }
  };
  const formRef = useRef();

  const handleForm = async (e) => {
    e.preventDefault();
    console.log(inputs);
    try {
       await signIn(
        inputs.current[0].value,
        inputs.current[1].value
      );

      setValidation("");

      toggleModals("close");
      navigate("/private/private-home");
    } catch {
      setValidation("Wopsy, email and/or password incorrect")
    }
  };

  const closeModal = () => {
    setValidation("");
    toggleModals("close");
  };

  return (
    <>
      {modalState.signInModal && (
        <div className="Modal" >
          <div
            onClick={closeModal}
          ></div>
          <div
            style={{ minWidth: "400px" }}
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Sign Up</h5>
                  <label className="btn-close" htmlFor="close">x</label>
                  <button onClick={closeModal} id="close" >x</button>
                </div>

                <div >
                  <form
                    ref={formRef}
                    onSubmit={handleForm}
                  >
                    <div>

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
                        placeholder="Enter the password"
                        ref={addInputs}
                        name="pwd"
                        required
                        type="password"
                        className="form-control"
                      />
                      <p >{validation}</p>
                    </div>
                    <label className="confirm-button" htmlFor="button">Login</label>
                    <button id="button"></button>
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
