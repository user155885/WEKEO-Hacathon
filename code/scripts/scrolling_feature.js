let moduleNumber = 1;
let moduleName = "module" + moduleNumber;

function animationOnExit() {
  document.getElementById(moduleName).className = 'container animationOnExit';
  const exitingElement = document.querySelector('#' + moduleName + '.animationOnExit');

  exitingElement.addEventListener('animationend', () => {
    exitingElement.className += ' ghost';

    updateModuleVars();

    document.getElementById(moduleName).className = 'container animationOnStart';
    const openingElement = document.querySelector('#' + moduleName + '.animationOnExit');
    openingElement.addEventListener('animationend', () => {
      openingElement.className += ' cancel_ghost';
    });
  });
}

function hideElementAfterAnimationCompleted(exitingElement) {
  exitingElement.addEventListener('animationend', () => {
    exitingElement.className += " ghost";
  });
}

function openElementAfterAnimationCompleted(openingElement) {
  openingElement.addEventListener('animationend', () => {
    openingElement.className += " cancel_ghost";
  });
}

function updateModuleVars() {
  moduleNumber += 1;
  moduleName = "module" + moduleNumber;
  console.log(moduleName);
}
