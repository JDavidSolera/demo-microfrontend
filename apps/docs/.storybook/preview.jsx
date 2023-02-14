import { DesignSystemProvider } from "@phoenix/design-system";

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  // ...
};

export const decorators = [
  (Story) => (
    <DesignSystemProvider>
      <Story />
    </DesignSystemProvider>
  ),
];