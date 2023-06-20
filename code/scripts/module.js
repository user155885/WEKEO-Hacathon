let instance = null;

export class Module {
  constructor() {
    if (!instance) {
      instance = this;
      this.moduleNumber = 1;
      this.moduleName = "module1";
    }

    return instance;
  }

  updateModuleVars() {
    moduleNumber += 1;
    moduleName = "module" + moduleNumber;
    console.log(moduleName);
  }
}
