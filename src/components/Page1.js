import React, { useEffect } from 'react';
import './page1.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState } from 'react';
const CancelToken = axios.CancelToken;

export default function Page1() {
  const [users, setUsers] = useState([]);

  const cancelSource = React.useRef(null);
  useEffect(() => {
    cancelSource.current = CancelToken.source();
    async function getUsers() {
      await axios
        .get('https://reqres.in/api/users', {
          cancelToken: cancelSource.current.token,
        })
        .then(({ data }) => {
          setUsers(data.data);
        })
        .catch((err) => {
          if (axios.isCancel(err)) {
            console.log(err.message);
          }
          console.log(err.message);
        });
    }
    setTimeout(() => {
      getUsers();
    }, 6000);

    return () => {
      cancelSource.current.cancel();
    };
  }, []);
  return (
    <div className="page1">
      <Link to="/page2">
        <button>Go to Page 2</button>
      </Link>
      <table>
        <tbody>
          <tr>
            <th>avatar</th>

            <th>firstName</th>
            <th>lastName</th>
            <th>email</th>
          </tr>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <img src={user.avatar} alt="" />
              </td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
