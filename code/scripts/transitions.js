// import { Module } from './module.js';
//
// const moduleObj = new Module();
//
// function animationOnExit() {
//   document.getElementById(moduleName).className = 'container animationOnExit';
//   const exitingElement = document.querySelector('#' + moduleObj.moduleName + '.animationOnExit');
//
//   exitingElement.addEventListener('animationend', () => {
//     exitingElement.className += ' ghost';
//
//     moduleObj.updateModuleVars();
//
//     const openingElement = document.getElementById(moduleObj.moduleName);
//     openingElement.className = openingElement.className.replace("ghost", "animationOnStart");
//   });
// }
let moduleNumber = 1;
let moduleName = "module" + moduleNumber;

function animationOnExit() {
  document.getElementById(moduleName).className = 'container animationOnExit';
  const exitingElement = document.querySelector('#' + moduleName + '.animationOnExit');

  exitingElement.addEventListener('animationend', () => {
    exitingElement.className += ' ghost';

    updateModuleVars();

    const openingElement = document.getElementById(moduleName);
    openingElement.className = openingElement.className.replace("ghost", 'animationOnStart');
  });
}

function updateModuleVars() {
  moduleNumber += 1;
  moduleName = "module" + moduleNumber;
  console.log(moduleName);
}
