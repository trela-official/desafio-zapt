import { Story, Meta } from "@storybook/react/types-6-0";

import Profile, { ProfileProps } from ".";

export default {
  title: "Profile",
  component: Profile,
} as Meta;

export const Basic: Story<ProfileProps> = (args) => <Profile {...args} />;

Basic.args = {
  profileImg: "/img/patricia-godoy.png",
  name: "John Doe",
  state: "Bahia",
  city: "Salvador",
};
