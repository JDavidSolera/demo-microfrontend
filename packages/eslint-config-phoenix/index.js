module.exports = {
  extends: [
    "next",
    "turbo",
    "airbnb",
    "prettier"
  ],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "react/jsx-key": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": "off",
    "import/prefer-default-export": "off",
    "import/extensions": "off",
    "react/jsx-props-no-spreading": "off",
    "import/no-unresolved": "off",
    "import/no-extraneous-dependencies": "off",
    "react/require-default-props": "off"
  }
};
