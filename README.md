# Modular Framework Offline Generator (MFOG)

**MFOG** is an offline generator that allows you to create **React** or **Next.js** applications using pre‑built configurations stored locally.

Its goal is to simplify the creation of basic projects without needing to download templates from the internet.

This project is inspired by **CRAO** by Baronsindo.
You can view the original project here:
[CRAO Repository](https://github.com/Baronsindo/create-react-app-offline/tree/master)

## CLI Installation

To install the CLI for the first time, run:

```sh
npm install -g modular-framework-offline-generator
```
Once installed, you’ll be able to create React or Next.js applications completely offline

---

### Usage
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


---
### Accessing the generated project

Once the installation is complete, enter the project folder:
```sh
cd your-project-name
```

---

### Available commands
Inside the newly created project, you can run:

```sh
npm run dev
```

This starts the development environment so you can begin working on your application.

---

### LICENSE
This project is distributed under the MIT license.
Check the LICENSE file for more details
