import Users from "./Users";
import React from "react";
import { UsersProvider } from "./UserContext";

function App() {
  return (
    <UsersProvider>
      <Users />;
    </UsersProvider>
  );
}

export default App;
