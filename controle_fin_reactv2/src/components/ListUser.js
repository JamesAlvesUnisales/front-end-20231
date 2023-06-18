import Table from "react-bootstrap/Table";
import { useState } from "react";
import Button from "react-bootstrap/Button";
const res = await fetch("https://jsonplaceholder.typicode.com/users");
const objJson = await res.json();
console.log(objJson);

function ListUsers() {
  const [listUsers, setListUsers] = useState(objJson);
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Actions</th>

        </tr>
      </thead>
      <tbody>
        {listUsers.map((user) => {
          return (
            <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>
                <Button href={`/users/${user.id}`} variant="primary" >Edit</Button>
                <Button variant="danger">Remove</Button>
              </td>

            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default ListUsers;
