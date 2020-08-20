<h1>React TypeScript Boilerplate</h1>
This is a React boilerplate utilizing:

* TypeScript
* ESLint + airbnb-typescript config + a few custom opinionated rules
* Prettier
* Jest & Enzyme
* Husky

<h2>Guide</h2>
<h5>Install dependencies</h5>

    npm install

<h5>Start dev server</h5>

    npm run start

Runs in development mode
<h5>Build distributable</h5>

*Development build*

    npm run build:development
    
*Production build*

    npm run build:production 
    
Will save the distributable into the `/dist` folder

<h5>Run liner</h5>

    npm run lint
    
Add `--fix` as a parameter to automatically fix lint errors
    
<h5>Run test</h5>

    npm run test
    
Runs all tests the script finds with coverage and runs lint

<h2>Version control</h2>
This boilerplate uses Husky (https://github.com/typicode/husky) to run all tests and lint before every commit. This helps against missing some errors before committing your work.

It can be bypassed using the `--no-verify` flag.