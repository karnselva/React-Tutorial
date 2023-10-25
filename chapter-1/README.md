# NPM

    -- remote repo which store reusable code  or specific standalone functionality.

# Creating Optimize React App.

1. By install and amalgamating all neccasary package.
   react (core-react) (cdn or npm package)
   react-dom (dom / browser specific) (cdn or npm package)
   bundler (parcel / webpack)
   react-testing-libray
   jest

   or

2. use create-react-app npm package which has bare minimum package need to make app faster and production ready.

# command , files and it role.

0. 4.8.3 -- 4 (major) , 8 (minor) , 3 (patch).
1. npm init
   -- will create package.json config file which has track of package , root file , website list where app need to run.
2. npm install <package-name>
   --- install package and add that version and freeze it as initial installed vaersion in package.json
   and recent/correct/accurate version of package (maintain integreity while updating to recent version with annotation ~ / ^) is in package.lock.json which we install package on someday from package.json the recent version is installed and lock in package.lock.json.
   ~ - tilde it only update patch version , ^ - caret minor , patch version is updated.
3. package.lock.json and node_modules - created while installing package :
   lock - recent version , version of transitive dependency also , hash to make integreity by installing same version in lock
   in runtime also.
   node_modules - have folders of code of dependency of project and dependency of dependency this need to gitignore.
   only basic data is push to github , data which can retrive by command from remote are gitignore.

4. dependency - without this app will not run axios - to make api call ,
   dev-dependency - used in development process
   jest - test functionality before run ,
   bundler - minify , optimize code into minimum resultant file , one for each html , css , js , which run in production.

5. npm install <package-name> - install package in current folder path and exceute
   npx <package-name> - not install any package in machine , just execute command at time by installing and after execute it uninstall it
   automatically.

6. package.json have track of direct dependency (parcel) and its version which usually shows the initial installed version like(^2.8.2) when
   it installed first.

7. transitive depdency - when we install parcel for our project as a dependency , but parcel itself dependent on depdency like babel ,chalk
   and in turn even chalk , babel have its own dependency this dependency of depdency of depdency is transitive depdency.

8. package.lock.json - if other developer install package which install first using npm i , which check the lastest version (dependent on
   annotation prior to version in package.json) and install the lastest version and that lastest version is track or locked on package.lock.json and
   have track of version of transitive dependency of package itself.

9. to use component in package from node_modules use import <component > from "package"; , the script / js file become module (not a js file)
   add type - module in script of html.

10. npx parcel <filename in current folder need to run in dev mode>
    - bundle the module by dependency resolve by tracking import module , transform css code to js
    - minify , compresses the assert
    - caching by hashing data
    - run local server
    - identify change and if save the file it hot reload
    - can add web browser -list , to support the different browser use Transpilation (change modern syntax into browser specific syntax) ,
      differential bundling (if we add type module , it itself add nomdule to support old browser)
    - perform lazy load in dev
    - tree shaking (delete unwanted imports , line of code)
    - diagonize the error and show from console to top of screen
      dist folder - have resultant file and mapping file that is run on website
      .parcel_cache - have hashed data of resultant file for fast experience
11. npx parcel build <filename in current folder need to run in prod mode>
    - more optimize them dev bundles

🙏🙏🙏🙏🙏
