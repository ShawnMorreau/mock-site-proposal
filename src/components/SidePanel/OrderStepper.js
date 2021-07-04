import React from "react";
import Step from "./Step";
import "./styles/SidePanel.css";
const OrderStepper = () => {
  const data = [
    {
      name: "Estimate",
      currentStep: false,
      completed: true,
    },
    {
      name: "CoGs",
      currentStep: true,
      completed: false,
    },
    {
      name: "Stocks",
      currentStep: false,
      completed: false,
    },
    {
      name: "Boarding",
      currentStep: false,
      completed: false,
    },
    {
      name: "Invoicing",
      currentStep: false,
      completed: false,
    },
  ];
  const steps = data.map((step, idx) => (
    <Step
      key={idx}
      name={step.name}
      finished={step.completed}
      current={step.currentStep}
    />
  ));
  return (<ul>{steps}</ul>);
};

export default OrderStepper;
