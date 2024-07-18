/* eslint-disable react/prop-types */
import "./UserList.css";
const UserList = ({ userList, deleteData }) => {
  return (
    <div className="user-component">
      <h1 className="user-header">User details</h1>
      {userList.map((data) => (
        <div key={data.id}>
          <button className="user-button" onClick={() => deleteData(data.id)}>
            {data.id} - {data.title}
          </button>
        </div>
      ))}
    </div>
  );
};

export default UserList;
