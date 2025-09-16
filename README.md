# React Component Assignment

## Project Overview

This project demonstrates the creation of a **reusable and customizable `InputField` component** in React using TypeScript and Tailwind CSS.  
The component supports multiple states including **default, invalid, disabled, and loading**, and provides features like **labels, helper text, and error messages**.  

A sample form is included to showcase three input fields: **Name, Email, and Password**, with basic validation and form submission.

---

## Features

- **Reusable InputField component** with customizable props.
- **Supported states:**
  - `default` – normal input state.
  - `invalid` – highlights input in red when validation fails.
  - `disabled` – disables input.
- **Customizable props:**
  - `label` – field label.
  - `placeholder` – placeholder text.
  - `helperText` – helper description below input.
  - `errorMessage` – validation error messages.
  - `variant` – style options: `outlined`, `filled`, `ghost`.
  - `size` – input size: `sm`, `md`, `lg`.
  - `type` – input type: `text` or `password`.

---

## Getting Started

### Prerequisites

- Node.js v18+
- npm or yarn
- React 18+ project setup

### Installation

1. Clone the repository:

```bash
git clone <https://github.com/robiul0278/component-development-assignment.git>

npm install
# or
yarn install


npm start
# or
yarn start

``
<InputField
  label="Email"
  placeholder="Enter your email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  helperText="Please provide your email."
  errorMessage={emailError}
  invalid={!!emailError}
  disabled={false}
/>

``