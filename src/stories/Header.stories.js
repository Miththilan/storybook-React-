import Header from "../component/Header";
import React from "react";

export default {
  title: "Components/Header",
  component: Header,
  argTypes: {
    variant: {
      options: ["h3", "h4", "h5", "h6"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <Header {...args} />;

export const Heading = Template.bind({});
Heading.args = {
  label: "Blog",
  //   variant: "h2",
};
