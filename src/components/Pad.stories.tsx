import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import Pad from "./Pad";

export default {
  title: "suuumin/Pad",
  component: Pad,
} as ComponentMeta<typeof Pad>;

const Template: ComponentStory<typeof Pad> = (args) => <Pad {...args} />;

export const Default = Template.bind({});
Default.args = {
  isActive: false,
  label: "Label",
};

export const Active = Template.bind({});
Active.args = {
  isActive: true,
  label: "Label",
};

export const Large = Template.bind({});
Large.args = {
  size: "lg",
  label: "Label",
};

export const Small = Template.bind({});
Small.args = {
  size: "sm",
  label: "Label",
};
