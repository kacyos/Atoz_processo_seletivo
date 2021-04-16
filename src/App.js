import { useState } from "react";
import {
  CContainer,
  CRow,
  CCol,
  CFormGroup,
  CLabel,
  CButton,
  CAlert,
  CModal,
  CModalBody,
} from "@coreui/react";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import logo from "./logo.svg";
import "./App.css";

const regexCellPhone = RegExp(
  /\(*0?[1-9]{2}\)* ?(?:[2]|9[1-9])[0-9]{3}\-*[0-9]{4}$/
);
const regexPassword = /^[A-Za-z0-9]+[A-Za-z0-9]*$/;

const Schema = Yup.object().shape({
  name: Yup.string().min(6, "Muito curto.").required("Campo obrigatório"),
  email: Yup.string()
    .email("Digite um email válido")
    .required("Campo brigatório."),
  cellPhone: Yup.string()
    .matches(regexCellPhone, "Digite um telefone válido")
    .notRequired(),
  password: Yup.string()
    .matches(regexPassword, "Carcteres especiais não são aceitos.")
    .min(8, "A senha deve conter no mínimo 8 caracteres.")
    .required("Campo obrigatório"),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref("password"), null], "As senhas não coincidem.")
    .required("Campo obrigatório."),
});

function App() {
  const [modal, setModal] = useState(false);

  const handleSubmit = (isvalid) => {
    if (isvalid) {
      setModal(!modal);
      return;
    }
  };

  const handleReset = () => {
    if (!modal) {
      // throw new Error('Cancel reset');
    }
  };

  const maskCellPhone = (Phone) => {
    return Phone.replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d)/, "$1-$2")
      .replace(/(-\d{4})(\d+?)$/, "$1");
  };

  return (
    <div className="App">
      <header className="App-header" col="12">
        <img src={logo} className="App-logo" alt="logo" />

        <Formik
          validationSchema={Schema}
          initialValues={{
            name: "",
            email: "",
            cellPhone: "",
            password: "",
            passwordConfirm: "",
          }}
          validateOnMount={true}
        >
          {({ values, isValid }) => (
            <CContainer className="form-div">
              <CRow>
                <CCol>
                  <Form onReset={values.handleReset} className="row">
                    <CFormGroup className="group-form col-lg-6 col-md-12">
                      <CLabel htmlFor="name">nome</CLabel>

                      <Field
                        className="form-control"
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Marcos Antonio"
                      />

                      <ErrorMessage
                        className="alert alert-danger"
                        component={CAlert}
                        name="name"
                      />
                    </CFormGroup>

                    <CFormGroup className="group-form col-lg-6 col-md-12">
                      <CLabel htmlFor="email">email</CLabel>

                      <Field
                        className="form-control"
                        type="email"
                        id="email"
                        name="email"
                        placeholder="email@exemplo.com"
                      />

                      <ErrorMessage
                        className="alert alert-danger"
                        component={CAlert}
                        name="email"
                      />
                    </CFormGroup>

                    <CFormGroup className="group-form col-lg-6 col-md-12">
                      <CLabel htmlFor="cellPhone">celular</CLabel>

                      <Field
                        className="form-control"
                        type="tel"
                        id="cellPhone"
                        name="cellPhone"
                        value={maskCellPhone(values.cellPhone)}
                        placeholder="(21) 99999-9999"
                        maxLength="15"
                      />

                      <ErrorMessage
                        className="alert alert-danger"
                        component={CAlert}
                        name="cellPhone"
                      />
                    </CFormGroup>

                    <CFormGroup className="group-form col-lg-6 col-md-12">
                      <CLabel htmlFor="password">senha</CLabel>

                      <Field
                        className="form-control"
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Insira sua senha"
                        autoComplete="current-password"
                      />

                      <ErrorMessage
                        className="alert alert-danger"
                        component={CAlert}
                        name="password"
                      />
                    </CFormGroup>

                    <CFormGroup className="group-form col-lg-6 col-md-12 offset-lg-6">
                      <CLabel htmlFor="passwordConfirm">
                        confirme sua senha
                      </CLabel>

                      <Field
                        className="form-control"
                        type="password"
                        id="passwordConfirm"
                        name="passwordConfirm"
                        placeholder="Repita sua senha.."
                        autoComplete="current-confirm-password"
                      />

                      <ErrorMessage
                        className="alert alert-danger"
                        component={CAlert}
                        name="passwordConfirm"
                      />
                    </CFormGroup>

                    <CButton
                      className="btn-submit col-sm-10 col-md-6 col-lg-4 offset-sm-1 offset-md-3 offset-lg-4"
                      type="submit"
                      size="md"
                      color="info"
                      onClick={() => {
                        handleSubmit(isValid);
                      }}
                    >
                      Enviar
                    </CButton>

                    {modal ? (
                      <CModal
                        show={modal}
                        onClose={() => {
                          handleSubmit(isValid);
                        }}
                        className=" modal-dialog-centered"
                      >
                        <CModalBody className="modal-dialog modal-content">
                          Dados enviados com sucesso!
                        </CModalBody>
                      </CModal>
                    ) : null}
                  </Form>
                </CCol>
              </CRow>
            </CContainer>
          )}
        </Formik>
      </header>
    </div>
  );
}

export default App;
