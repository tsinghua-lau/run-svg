import RunSvg from "./RunSvg.vue";
import TestButton from "./TestButton.vue";
const component = [RunSvg, TestButton];

const CK = {
  install(App: any) {
    component.forEach((item) => {
      console.log(item.name);
      App.component(item.name, item);
    });
  },
};

export default CK;
