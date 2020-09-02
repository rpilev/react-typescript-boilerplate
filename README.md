<h1>React TypeScript Boilerplate</h1>
This is a React boilerplate utilizing:

* TypeScript
* ESLint + airbnb-typescript config
* Prettier
* Stylelint
* Jest & Enzyme + @testing-library/react
* Husky

<h2>Guide</h2>
<h5>Install dependencies</h5>

    npm install

<h5>Start dev server</h5>

    npm run start

Runs in development mode
<h5>Build distributable</h5>

    npm run build 

Saves the resulting production build to the `dist` folder located in the project root folder

<h5>Run liner</h5>

    npm run lint
    
*Automatically fix lint issues*

    npm run lint:fix
    
<h5>Run all tests</h5>

    npm run test

<h2>Version control</h2>
This boilerplate uses Husky (https://github.com/typicode/husky) to run all tests and lint before every commit. This helps against missing some errors before committing your work.

It can be bypassed using the `--no-verify` flag.

<h2>Module importing</h2>

Path aliases can be added in tsconfig.json

*Example*

    "paths": {
      "@app/components": ["./src/components"]
    }
