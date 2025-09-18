import type { Meta, StoryObj } from "@storybook/react";
import DataTable from "./DataTable";

type User = {
  id: number;
  name: string;
  age: number;
  email: string;
};

const data: User[] = [
  { id: 1, name: "Alice", age: 25, email: "alice@mail.com" },
  { id: 2, name: "Bob", age: 30, email: "bob@mail.com" },
  { id: 3, name: "Charlie", age: 22, email: "charlie@mail.com" },
];

const columns = [
  {
    key: "name",
    title: "Name",
    dataIndex: "name" as const,
    sortable: true,
  },
  {
    key: "age",
    title: "Age",
    dataIndex: "age" as const,
    sortable: true,
  },
  {
    key: "email",
    title: "Email",
    dataIndex: "email" as const,
    sortable: false,
  },
];

const meta: Meta<typeof DataTable<User>> = {
  title: "Components/DataTable",
  component: DataTable<User>,
};
export default meta;

type Story = StoryObj<typeof DataTable<User>>;

export const Default: Story = {
  args: {
    data,
    columns,
    selectable: false,
  },
};

export const Selectable: Story = {
  args: {
    data,
    columns,
    selectable: true,
  },
};

export const Loading: Story = {
  args: {
    data: [],
    columns,
    loading: true,
  },
};

export const Empty: Story = {
  args: {
    data: [],
    columns,
  },
};
