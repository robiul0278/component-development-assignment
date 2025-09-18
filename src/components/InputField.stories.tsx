import type { Meta, StoryObj } from '@storybook/react';
import InputField from './InputField'; // Adjust the import path as needed

// The main configuration for the component's stories
const meta: Meta<typeof InputField> = {
  title: 'Components/InputField',
  component: InputField,
  parameters: {
    layout: 'centered', // Centers the component in the Storybook canvas
  },
  tags: ['autodocs'], // Enables automatic documentation generation
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    helperText: { control: 'text' },
    errorMessage: { control: 'text' },
    disabled: { control: 'boolean' },
    invalid: { control: 'boolean' },
    variant: {
      control: { type: 'radio' },
      options: ['filled', 'outlined', 'ghost'],
    },
    size: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg'],
    },
    type: {
      control: { type: 'radio' },
      options: ['text', 'password'],
    },
    onChange: { action: 'changed' }, // Mocks the onChange handler
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// The primary or default story
export const Default: Story = {
  args: {
    label: 'Username',
    placeholder: 'e.g., john.doe',
    helperText: 'Please enter your username.',
  },
};

// Story for the 'filled' variant
export const Filled: Story = {
  args: {
    ...Default.args,
    variant: 'filled',
    label: 'Email Address (Filled)',
  },
};

// Story for the 'ghost' variant
export const Ghost: Story = {
  args: {
    ...Default.args,
    variant: 'ghost',
    label: 'Full Name (Ghost)',
  },
};

// Story for the error state
export const WithError: Story = {
  args: {
    label: 'Password',
    type: 'password',
    invalid: true,
    value: '123',
    errorMessage: 'Password must be at least 8 characters long.',
  },
};

// Story for the disabled state
export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    placeholder: 'You cannot edit this',
    disabled: true,
  },
};

// Story for the large size
export const Large: Story = {
  args: {
    ...Default.args,
    size: 'lg',
    label: 'Large Input',
  },
};

// Story for the small size
export const Small: Story = {
  args: {
    ...Default.args,
    size: 'sm',
    label: 'Small Input',
  },
};