import { useSelector, useDispatch } from "react-redux";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import { selectUser, del, userInfo } from "../store/reducer/userSlice";

function UserTable() {
  const users = useSelector(selectUser);
  const dispatch = useDispatch();
  const tHeader = [
    "First name",
    "Last name",
    "Username",
    "City",
    "State",
    "Zip",
    "Action",
  ];

  return (
    <div className="p-5">
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            {tHeader.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users.map((user, userIndex) => (
            <tr key={userIndex}>
              <td>{userIndex + 1}</td>
              {Object.entries(user).map(([key, value], index) => (
                <td key={index}>{value}</td>
              ))}
              <td>
                <Button
                  variant="warning"
                  className="me-2"
                  onClick={() => dispatch(userInfo(userIndex))}>
                  Update
                </Button>
                <Button
                  variant="danger"
                  onClick={() => dispatch(del(userIndex))}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default UserTable;
