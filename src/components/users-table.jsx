import { TableBody, TableCell, TableRow } from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "React";
import { useSubmit } from "react-router-dom";
import ConfirmDialog from "../confirm-dialog";
export default function UsersTable({ users }) {
  const [clickedUser, setClickedUser] = useState(null);
  const submit = useSubmit();
  return (
    <>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id} id={user.id} data-user={user.username}>
            <TableCell>{user.id}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell
              onClick={(e) => {
                setClickedUser({
                  id: user.id,
                  username: user.username,
                });
              }}
            >
              🔥
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      {/* TODO: Address ugly transition 💫. */}
      <ConfirmDialog
        open={Boolean(clickedUser)}
        title={clickedUser && `Erase ${clickedUser.username}?`}
        onConfirm={() => {
          // Prepare a form data object to submit
          const fd = new FormData();
          fd.append("id", clickedUser.id);

          submit(fd, {
            method: "DELETE",
          });

          setClickedUser(null);
        }}
        onCancel={() => {
          setClickedUser(null);
        }}
      />
    </>
  );
}
UsersTable.propTypes = {
  users: PropTypes.arrayOf(
    // We control the properties of the user object
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
    })
  ).isRequired,
};
