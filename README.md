## Modular Framework Offline Generator (MFOG)
Este programa permite crear apliaciones React/Next con configuraciones pre-construidas localmente para proyectos basicos.

Para realizar este proyecto me inspire de CRAO por Baronsindo. [Enlace al proyecto original.](https://github.com/Baronsindo/create-react-app-offline/tree/master)

### Instalar el CLI
first time you need to install the CRAO CLI via this command, then after you'il be able to create React apps offline.
```sh
npm install -g create-react-app-offline
```

### Usage
Very simple like drinking water
```sh
crao -n <app-name>
```
for example :
```sh
crao -n my-app
```

It will create a directory called `my-app` inside the current folder.<br>
Inside that directory, it will generate the initial project structure and install the transitive dependencies:

No configuration or complicated folder structures, only the files you need to build your app.<br>
Once the installation is done, you can open your project folder:

```sh
cd my-app
```

Inside the newly created project, you can run some built-in commands:

### `npm start` or `yarn start`
 
Enjoy it.