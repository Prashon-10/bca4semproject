import { useEffect, useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";

function HomeComponent() {

  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost/bca4semproject/api/")
      .then((response) => { setStudents(response.data); })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <>
      <Table striped bordered hover>
      </Table>
    </>
  );
}

export default HomeComponent;
