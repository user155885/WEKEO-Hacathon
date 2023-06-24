let instance = null;

class Course {
  constructor() {
    if (!instance) {
      instance = this;
      this.stepNumber = 1;
      this.stepName = "slide1";
    }

    return instance;
  }

  setCourseVars(stepNumber) {
    this.stepNumber = stepNumber;
    this.stepName = "slide" + this.stepNumber;
  }
}

const course = new Course(); 


function updateCourse(stepNumber, courseStep) {
  if (stepNumber == course.stepNumber) return; 

  let previousStep = document.querySelector(".selected_step");
  previousStep.className = previousStep.className.replace("selected_step", "");
  previousStep = null; 
  courseStep.className += " selected_step"; 

  let currentSlide = document.getElementById(course.stepName); 
  currentSlide.className = "slide animationOnExit"; 

  currentSlide.addEventListener('animationend', () => {
    console.log("exited " + course.stepName);
    currentSlide.className = "slide ghost" 

    course.setCourseVars(stepNumber);
    
    let = selectedStep = document.getElementById(course.stepName); 
    selectedStep.className = selectedStep.className.replace("ghost", "animationOnStart"); 
    currentSlide = null; // very important line!! Delete - and you will see the amazing motions in the website
  });
}

window.addEventListener('load', function() {
  var parent = document.querySelector('div.course_video');
  var child = document.querySelector('div.course_video > iframe');
  
  function setChildHeight() {
    var parentWidth = parent.offsetWidth;
    var childHeight = (parentWidth * 0.58) + 'px';
    child.style.height = childHeight;
  }
  
  setChildHeight(); // Set the initial height
  
  // Update the child's height when the window is resized
  window.addEventListener('resize', setChildHeight);
});

function checkAnswer(answer, QNumber) {
  if (!answer.className.includes("button-hover")) return;

  if (answer.className.includes("button_wrong")) {
    answer.className += " selected_wrong";
  } else {
    answer.className += " selected_correct";
    const otherOptions = document.querySelectorAll("*[for='" + QNumber + "']");
    otherOptions.forEach((option) => {
      option.className = option.className
                        .replace("button", "button-noniteractable")
                        .replace("button-hover", "");
      option = null; 
    });
  }
  answer.className = answer.className.replace("button-hover", "");
  answer = null;
}