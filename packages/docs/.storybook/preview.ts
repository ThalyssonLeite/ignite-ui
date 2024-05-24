import type { Preview } from "@storybook/react";
import { themes } from "@storybook/theming";

const preview: Preview = {
tags: ["autodocs"],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
	docs: {
		theme: themes.dark,
	},
	background: {
		default: "dark"
	},
  },
};

export default preview;
