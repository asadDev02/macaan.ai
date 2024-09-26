# macaan.ai

## Overview

**macaan.ai** is an AI-powered appliance troubleshooting and repair ecosystem designed to make home equipment repair easy. It provides homeowners with all the assistance they need, all in one place. This project replicates one page from the admin app, where customer service agents resolve tickets submitted by homeowners.

The application is deployed on Vercel and can be accessed at: [https://macaanai.vercel.app/working](https://macaanai.vercel.app/working).

## Project Structure

The project is organized as follows:

```
macaan.ai/
├── app/                    # Contains the main application code (pages, components, etc.)
├── public/                 # Static assets such as images, fonts, etc.
├── .eslintrc.json          # ESLint configuration file
├── .gitignore              # Ignored files for git version control
├── next.config.mjs         # Next.js configuration
├── package.json            # Project dependencies and scripts
├── package-lock.json       # Dependency lock file
├── postcss.config.mjs      # PostCSS configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── README.md               # Project documentation
```

## Installation

To get started with this project, clone the repository and install the dependencies:

```bash
git clone https://github.com/asadDev02/macaan.ai
cd macaan.ai
yarn install
```

## Running the Application

To run the application in development mode:

```bash
yarn dev
```

This will start the development server, and you can view the app by navigating to `http://localhost:3000`.

For production build:

```bash
yarn build
yarn start
```

## Validation

Data validation in this project is handled using [Yup](https://github.com/jquense/yup) in combination with [React Hook Form's Yup resolver](https://react-hook-form.com/get-started#SchemaValidation). This setup allows for schema-based validation, providing a simple and efficient way to validate form inputs.

To add validation logic, define a Yup schema and pass it to the form using `yupResolver`:

```ts
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
	name: yup.string().required("Name is required"),
	email: yup
		.string()
		.email("Invalid email format")
		.required("Email is required"),
});

const {
	register,
	handleSubmit,
	formState: { errors },
} = useForm({
	resolver: yupResolver(schema),
});

const onSubmit = (data) => {
	console.log(data);
};
```

This ensures that any form submissions meet the defined validation criteria before being processed.

## Dependencies

The project includes the following key dependencies:

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/)
- [PostCSS](https://postcss.org/)

## Linting and Formatting

Linting and formatting are enforced via [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) to maintain code quality and consistency. You can run lint checks with:

```bash
yarn lint
```

## License

This project is licensed under the [MIT License](./LICENSE).
