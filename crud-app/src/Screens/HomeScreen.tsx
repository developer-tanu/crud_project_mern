import React,{useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Button, Table } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import axios from 'axios';
import { useHistory } from "react-router";

const Users = () => {
  let history = useHistory();
  const[users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    axios.get(`/users`).then(({data})=>{
      setUsers(data)
    }).catch(error => console.log(error))
  }, [])

  const onDelete = (id: string) => {

    axios.delete(`users/${id}`).catch((error) => console.log(error));

    history.push("/");
    alert("you want to delete the user");
    window.location.reload();
}

  return (
    <React.Fragment>
      <Table className="table-sm text-center">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>AGE</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user)=>(
          <tr
            className="text-capitalize"
            key={user._id}
          >
            <td>{user._id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
            {/* <td>1</td>
            <td>Tanu Sharma</td>
            <td>Tanu@softobiz.com</td>
            <td>24</td> */}
            <td>
            {/* <LinkContainer to={`/edituser`}> */}
              <LinkContainer to={`/edituser/${user._id}`}>
                <Button variant="success" className="btn-mb">
                  <i className="fas fa-edit"></i>
                </Button>
              </LinkContainer>
              &nbsp; &nbsp;
              <Button variant="danger" onClick={() => onDelete(user._id)} className="btn-mb">
                <i className="fas fa-trash"></i>
              </Button>
            </td>
          </tr>
           ))}
        </tbody>
      </Table>
    </React.Fragment>
  );
};

export default Users;