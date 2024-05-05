import { useState } from "react";

function App() {
  // let [number, setNumber] = useState(1);

  // function increment() {
  //   number++;
  //   setNumber(number);
  // }
  // function decrement() {
  //   number--;
  //   setNumber(number);
  // }
  // return (
  //   <div className="container">
  //     <div
  //       style={{
  //         width: "100px",
  //         height: "100px",
  //         border: "1px solid black",
  //         padding: "50px",
  //       }}
  //       className={`${number % 5 === 0 ? `red` : ``}`}
  //     >
  //       <h1>{number}</h1>
  //     </div>
  //     {number >= 10 ? (
  //       ""
  //     ) : (
  //       <button className="btn btn-primary " onClick={increment}>
  //         +
  //       </button>
  //     )}

  //     <span className="m-5"></span>
  //     <button className="btn btn-primary" onClick={decrement}>
  //       -
  //     </button>
  //   </div>
  // );

  const [users, setUsers] = useState([]);

  function addNewUser(user) {
    let newUsers = [...users, user];
    setUsers(newUsers);
    console.log(users);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <Form add={addNewUser} />
        </div>
        <div className="col-md-4">
          <UserList users={users} />
        </div>
        <div className="col-md-4">
          <AdminList users={users} />
        </div>
      </div>
    </div>
  );
}

function Form({ add }) {
  const [fullName, setFullName] = useState("");
  const [role, setRole] = useState("");

  function submitHandler(e) {
    e.preventDefault();

    let user = { fname: fullName, r: role };
    add(user);
  }
  return (
    <div className="container">
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Role</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setRole(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

function UserList({ users }) {
  return (
    <div>
      <ul className="list-group">
        {users.map((u) =>
          u.r === "User" ? (
            <li className="list-group-item" key={u.fname}>
              {u.fname}
            </li>
          ) : (
            ""
          )
        )}
      </ul>
    </div>
  );
}

function AdminList({ users }) {
  return (
    <div>
      <ul className="list-group">
        {users.map((u) =>
          u.r === "Admin" ? (
            <li className="list-group-item" key={u.fname}>
              {u.fname}
            </li>
          ) : (
            ""
          )
        )}
      </ul>
    </div>
  );
}

export default App;
