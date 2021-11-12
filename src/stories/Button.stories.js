import CardView from "../component/CardView";
import React from "react";

export default {
  title: "Components/CardView",
  component: CardView,
};

const Template = (args) => <CardView {...args} />;

export const Red = Template.bind({});
Red.args = {
  margin: "0 20px",
  height: 250,
};
