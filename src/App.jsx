import { useState, useEffect } from "react";
import axios from "axios";
import UserList from "./components/UserList";  // Adjust the path if necessary

const App = () => {
  const [userList, setUserList] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      setUserList(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const deleteData = (userid) => {
    const updateData = userList.filter((user) => user.id !== userid);
    setUserList(updateData);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <UserList userList={userList} deleteData={deleteData} />
    </div>
  );
};

export default App;
