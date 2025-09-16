
import { useState } from "react";
import InputField from "./InputField";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof InputField> = {
  title: "Components/InputField",
  component: InputField,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["filled", "outlined", "ghost"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    type: {
      control: { type: "select" },
      options: ["text", "password"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof InputField>;

// Default story with all props exposed
export const Playground: Story = {
  args: {
    label: "Username",
    placeholder: "Enter your username",
    helperText: "This is a helper text",
    errorMessage: "",
    disabled: false,
    invalid: false,
    variant: "outlined",
    size: "md",
    type: "text",
  },
  render: (args) => {
    const [value, setValue] = useState("");

    return (
      <div className="max-w-sm">
        <InputField
          {...args}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    );
  },
};
