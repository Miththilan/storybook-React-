import Header from "../component/Header";
import React from "react";

export default {
  title: "Components/Header",
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const Heading = Template.bind({});
Heading.args = {
  label: "Blog",
};
