export default function CreateMemberView() {
  return (
    <div>
      <h2>Add a new member</h2>
      <form onSubmit={() => {}}>
        <div>
          <label htmlFor="">Name</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input type="text" />
        </div>
      </form>
    </div>
  );
}
