import { useEffect } from "react";
import Table from "react-bootstrap/Table";

function HomeComponent() {
  useEffect(() => {

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
        <tbody>
          <tr>
            <td>1</td>
            <td>Hermit Hamilton</td>
            <td>Hermithamilooutlook.com</td>
            <td>England</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default HomeComponent;
