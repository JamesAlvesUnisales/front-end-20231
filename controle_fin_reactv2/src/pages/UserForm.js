import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const UserForm = () => {
  const [user, setUser] = useState({});
  let { id } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((obj) => setUser(obj));
  }, [id]);

  
  return <h1>User.id = {user.username}</h1>;
};

export default UserForm;
