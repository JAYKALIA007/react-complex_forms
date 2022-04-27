export default function EducationInfoForm({
  formFields,
  handleNextPageClick,
  handlePrevPageClick,
  handleEducationInfoChange,
  handleAddRowToEdInfoForm
}) {
  return (
    <div>
      <h4>EducationInfoForm</h4>
      <form>
        {formFields.educationInfo.map((edInfo) => {
          return (
            <div key={edInfo.id}>
              <input
                type="text"
                name="highestEducation"
                value={edInfo.highestEducation}
                placeholder="highest Education"
                onChange={(event) => {
                  handleEducationInfoChange(edInfo.id, event);
                }}
              />
              <input
                type="text"
                name="branch"
                value={edInfo.branch}
                placeholder="branch"
                onChange={(event) => {
                  handleEducationInfoChange(edInfo.id, event);
                }}
              />
              <input
                type="text"
                name="grade"
                value={edInfo.grade}
                placeholder="grade"
                onChange={(event) => {
                  handleEducationInfoChange(edInfo.id, event);
                }}
              />
            </div>
          );
        })}
        {/* <input
          type="text"
          name="highestEducation"
          value={formFields.educationInfo.highestEducation}
          placeholder="highest Education"
          onChange={handleEducationInfoChange}
        />
        <input
          type="text"
          name="grade"
          value={formFields.educationInfo.grade}
          placeholder="grade"
          onChange={handleEducationInfoChange}
        />
        <input
          type="text"
          name="grade"
          value={formFields.educationInfo.grade}
          placeholder="grade"
          onChange={handleEducationInfoChange}
        /> */}
      </form>
      <button onClick={handleAddRowToEdInfoForm}>Add row</button>{" "}
      <button onClick={handleNextPageClick} value={formFields.formNo}>
        Next Page
      </button>{" "}
      <br />
      <button onClick={handlePrevPageClick} value={formFields.formNo}>
        Prev Page
      </button>
    </div>
  );
}
