import { useState } from "react";
import EducationInfoForm from "./EducationInfoForm";
import InfoForm from "./InfoForm";
import { v4 as uuidv4 } from "uuid";
export default function ApplyForm() {
  const [formFields, setFormFields] = useState({
    formNo: 1,

    //user details form fields
    userInfo: {
      firstName: "",
      lastName: ""
    },
    //education details form fields
    educationInfo: [
      {
        id: uuidv4(),
        highestEducation: "",
        branch: "",
        grade: ""
      }
    ]
  });
  function handleNextPageClick(e) {
    setFormFields({ ...formFields, formNo: ++e.target.value });
  }
  function handlePrevPageClick(e) {
    setFormFields({ ...formFields, formNo: --e.target.value });
  }
  function handleUserInfoChange(e) {
    setFormFields({
      ...formFields,
      userInfo: { ...formFields.userInfo, [e.target.name]: e.target.value }
    });
  }
  function handleEducationInfoChange(id, event) {
    const newEdInfo = formFields.educationInfo.map((i) => {
      if (i.id === id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });
    setFormFields({ ...formFields, educationInfo: newEdInfo });
  }
  function handleAddRowToEdInfoForm() {
    setFormFields({
      ...formFields,
      educationInfo: [
        ...formFields.educationInfo,
        {
          id: uuidv4(),
          highestEducation: "",
          branch: "",
          grade: ""
        }
      ]
    });
  }

  switch (formFields.formNo) {
    case 1:
      return (
        <>
          <h2>{formFields.formNo}</h2>
          <InfoForm
            formFields={formFields}
            handleNextPageClick={handleNextPageClick}
            handleUserInfoChange={handleUserInfoChange}
          />
        </>
      );
    case 2:
      return (
        <>
          <h2>{formFields.formNo}</h2>
          <EducationInfoForm
            formFields={formFields}
            handleNextPageClick={handleNextPageClick}
            handlePrevPageClick={handlePrevPageClick}
            handleEducationInfoChange={handleEducationInfoChange}
            handleAddRowToEdInfoForm={handleAddRowToEdInfoForm}
          />
        </>
      );
    default:
      return <>Make a confirmation page{console.log(formFields)}</>;
  }
}
