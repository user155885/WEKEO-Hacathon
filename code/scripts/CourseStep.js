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