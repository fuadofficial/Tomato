import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Faq from "./components/Faq/Faq";
import UserList from "./components/UserList/UserList";

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
    <Router>
      <div className="app-container">
        <nav>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/user-list">User List</Link>
            </li>
            <li>
              <Link to="/faq">Faq</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              <div className="home-container">
                <h1>Welcome.......</h1>
                <div className="buttons">
                  <button className="home-btn">
                    <a href="/user-list">User details</a>
                  </button>
                  <button className="home-btn">
                    <a href="/faq">Faq</a>
                  </button>
                </div>
              </div>
            }
          />
          <Route
            path="/user-list"
            element={<UserList userList={userList} deleteData={deleteData} />}
          />
          <Route path="/faq" element={<Faq />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
