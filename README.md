# Interactive Web Developer's Boilerplate

This project is meant to be a set of useful basics required to make the development happy

## Key Elements

- Node/NPM/Git
    - Tools, to manage project, install tools, libraries etc
- React
    - UI Framework, for modern web components
- Rollup
    - JS compiler, to use future code and put into a single file
- Babel
    - JS transpiler, to use future code
- Sass
    - CSS transpiler/compressor, to make CSS readable while writing it
- Blessed
    - Node terminal UI, to keep everything in one window and provide shortcuts
- Uglify
    - JS compressor, to make files tiny
- Pug
    - HTML template language, make conditional html easy
- Express
    - Node web framework, development web server
- Chokidar
    - File watcher, to watch for file changes to initiate recompile
- LiveReload
    - File watcher + browser reloader, watches files for changes to initiate browser refresh


## Running the project

To get it up and going and running and building

1. Install your computer
2. Build your node
3. Drink some water
4. `npm install`
5. Build:
    - For development environment (launches blessed for tracking output from compilers)
        - `npm run dev`
    - For production (which simply builds compressed files
        - `npm run prod`
6. Engage:
    - Development
        - Open your browser to [localhost:3000](localhost:3000)
    - Production
        - Ensure nginx and other stuff is installed on your web server
        - Ensure your web server is set up correctly (this also means securely)
        - Ensure your nginx conf file is correct
        - symlink your nginx conf file to the sites_available directory
        - restart nginx service
        - test the website by visiting the appropriate address


## Future plans

- Add test framework and example test
- Add scripts to make life easier
- Add better description of tool purposes and why/how/links
- Add better explanation for prod deployment