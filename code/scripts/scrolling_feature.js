let moduleNumber = 1;

function animationOnExit() {
  document.getElementById("module" + moduleNumber).className = 'container animationOnExit';
  moduleNumber += 1;
  document.getElementById("module" + moduleNumber).className += ' animationOnStart';
}
