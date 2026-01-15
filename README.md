# 🚀 Modular Framework Offline Generator (MFOG)

[![MFOG](https://img.shields.io/badge/MFOG-Offline%20Project%20Generator-blue?style=flat&logo=appveyor)](https://www.npmjs.com/package/modular-framework-offline-generator)

[![Node.js](https://img.shields.io/badge/Runtime-Node.js-339933?style=flat&logo=node.js)](https://nodejs.org/)
[![Published on NPM](https://img.shields.io/npm/v/modular-framework-offline-generator??style=flat&logo=npm)](https://www.npmjs.com/package/modular-framework-offline-generator)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=flat)](LICENSE)

## 📑 Table of Contents

- [✨ About MFOG](#-about-mfog)
- [⚙️ CLI Installation](#cli-installation)
- [🚀 Usage](#-usage)
- [📂 Accessing the generated project](#-accessing-the-generated-project)
- [🛠️ Available commands](#available-commands)
- [📝 License](#-license)

## ✨ About MFOG

**MFOG** is an offline generator that allows you to quickly create **React** or **Next.js** applications using pre‑built local templates.

Its goal is to simplify the creation of basic projects without downloading templates from the internet.

This project is inspired by **CRAO** by Baronsindo.  
You can view the original project here:  
[CRAO Repository](https://github.com/Baronsindo/create-react-app-offline/tree/master)

## CLI Installation

To install the CLI for the first time, run:

```sh
npm install -g modular-framework-offline-generator
```

Once installed, you’ll be able to create React or Next.js applications completely offline

## 🚀 Usage

To run the app, simply execute in your terminal:

```sh
mfog
```

The program will ask you for a project name and will create a directory with that name inside the current folder.

Inside that directory, it will generate:

- The initial project structure
- Essential files
- All required dependencies (installed locally)

You won’t need to worry about complex configurations or unnecessary boilerplate.
You’ll get exactly what you need to start building your application.

## 📂 Accessing the generated project

Once the installation is complete, enter the project folder:

```sh
cd your-project-name
```

## Available commands

Inside the newly created project, you can run:

```sh
npm run dev
```

This starts the development environment so you can begin working on your application.

## 📝 License

MFOG is licensed under the MIT License.  
See the [LICENSE](LICENSE) file for more details.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=flat)](LICENSE)
