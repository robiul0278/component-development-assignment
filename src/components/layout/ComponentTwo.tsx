import { useState } from "react";
import DataTable from "../DataTable";

interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

const users: User[] = [
  { id: 1, name: "Alice", email: "alice@example.com", age: 25 },
  { id: 2, name: "Bob", email: "bob@example.com", age: 30 },
  { id: 3, name: "Charlie", email: "charlie@example.com", age: 22 },
];

const columns = [
  { key: "name", title: "Name", dataIndex: "name", sortable: true },
  { key: "email", title: "Email", dataIndex: "email" },
  { key: "age", title: "Age", dataIndex: "age", sortable: true },
];

function ComponentTwo() {
  const [selectedUsers, setSelectedUsers] = useState<User[]>([]);
  return (
    <div className="p-6">
      <DataTable
        data={users}
        columns={columns}
        loading={false}
        selectable
        onRowSelect={(rows) => setSelectedUsers(rows)}
      />
      <div className="mt-4">
        <strong>Selected Users:</strong>{" "}
        {selectedUsers.map((u) => u.name).join(", ") || "None"}
      </div>
    </div>
  );
}

export default ComponentTwo;
