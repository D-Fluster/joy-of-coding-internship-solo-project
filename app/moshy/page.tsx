import React from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  const users: User[] = await res.json();

  return (
    <>
      <h1>Users</h1>
      <div>
        {users.map((user) => (
          <ul key={user.id}>
            <li>
              {user.name}s email address is: {user.email}
            </li>
          </ul>
        ))}
      </div>
    </>
  );
};

export default UsersPage;

// const MyTodos = async () => {
//     export default MyTodos;

// import React from "react";

// interface User {
//   id: number;
//   name: string;
//   email: string;
// }

// const UsersPage = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users", {
//     cache: "no-store",
//   });
//   const users: User[] = await res.json();

//   return (
//     <>
//       <h1>Users</h1>
//       <p>{new Date().toLocaleTimeString()}</p>
//       <table className="table table-bordered">
//         <thead>
//           <tr>
//             <th>Name:</th>
//             <th>Email:</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user) => (
//             <tr key={user.id}>
//               <td>{user.name}</td>
//               <td>{user.email}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </>
//   );
// };

// export default UsersPage;
