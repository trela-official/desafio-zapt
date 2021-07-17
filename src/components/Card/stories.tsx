import { Story, Meta } from "@storybook/react/types-6-0";

import Card, { CardProps } from ".";

export default {
  title: "Card",
  component: Card,
} as Meta;

export const Basic: Story<CardProps> = (args) => <Card {...args} />;

Basic.args = {
  testimony:
    "”Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et porta metus.”",
  name: "John Doe",
  state: "Bahia",
  city: "Salvador",
  img: "/img/img-woman-card.png",
  profileImg: "/img/patricia-godoy.png",
};
