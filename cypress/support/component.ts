// React 18
import { mount } from "cypress/react18";

Cypress.Commands.add("mount", (component: React.ReactNode, options) => {
  // Wrap any parent components needed
  // ie: return mount(<MyProvider>{component}</MyProvider>, options)
  return mount(component, options);
});
