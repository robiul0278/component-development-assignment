import { useState } from "react";
import DataTable from "../components/DataTable";
import type { Column } from "../types/types";

interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

const users: User[] = [
  { id: 1, name: "Alice", email: "alice@example.com", age: 25 },
  { id: 2, name: "Bob", email: "bob@example.com", age: 0 },
  { id: 3, name: "Charlie", email: "charlie@example.com", age: 22 },
];

const columns: Column<User>[] = [
  { key: "name", title: "Name", dataIndex: "name", sortable: true },
  { key: "email", title: "Email", dataIndex: "email" },
  { key: "age", title: "Age", dataIndex: "age", sortable: true },
];

function ComponentTwo() {
  const [selectedUsers, setSelectedUsers] = useState<User[]>([]);

  return (
    <div className="p-6">
         <div className="p-4 border rounded-md mb-4">
      <h2 className="text-xl font-bold mb-2">Component Two</h2>
      <p>This is the content of Component Two.</p>
    </div>
      <DataTable<User>
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
