import { useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";

function HomeComponent() {
  useEffect(() => {
    axios
      .get("http://localhost/bca4semproject/api/")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>S.N</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody></tbody>
      </Table>
    </>
  );
}

export default HomeComponent;
