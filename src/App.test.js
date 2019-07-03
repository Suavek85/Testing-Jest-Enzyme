import React from "react";
//import ReactDOM from 'react-dom';
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import App from "./App";
import { exportAllDeclaration } from "@babel/types";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props = {}, state = null) => {
  return shallow(<App {...props} />);
};

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
}


test("renders without crashing", () => {
  //const wrapper = shallow(<App />);
  //const appComponent = wrapper.find("[data-test='component-app']");
  //wrapper.find("[data-test='component-app']");
 //console.log(wrapper.debug())
  //expect(wrapper).toBeTruthy();

  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-app');
  expect(appComponent.length).toBe(1);
 
});

test("renders increment button", () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, 'increment-button');
  expect(button.length).toBe(1);
});

test("renders counter display", () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.length).toBe(1);
});

test("counter starts at zero", () => {
  const wrapper = setup();
  initialCounterState = wrapper.state('counter');
  //expect(initialCounterState)
});

test("clicking button increments counter display", () => {});
