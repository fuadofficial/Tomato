
const UserList = ({ userList, deleteData }) => {
  return (
    <div>
      {userList.map((data) => (
        <div key={data.id}>
          <button onClick={() => deleteData(data.id)}>
            {data.id} - {data.title}
          </button>
        </div>
      ))}
    </div>
  );
};

export default UserList;
