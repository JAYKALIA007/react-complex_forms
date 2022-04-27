export default function InfoForm({
  formFields,
  handleNextPageClick,
  handleUserInfoChange
}) {
  return (
    <div>
      <h4>InfoForm</h4>
      <form>
        <input
          type="text"
          name="firstName"
          value={formFields.userInfo.firstName}
          placeholder="first name"
          onChange={handleUserInfoChange}
        />
        <input
          type="text"
          name="lastName"
          value={formFields.userInfo.lastName}
          placeholder="last name"
          onChange={handleUserInfoChange}
        />
      </form>
      <button onClick={handleNextPageClick} value={formFields.formNo}>
        Next Page
      </button>{" "}
      <br />
    </div>
  );
}
