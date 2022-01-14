module.exports = {
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  overrides: [
    {
      files: ["src/**/*.js", "src/**/*.jsx"],
      extends: [
        "@react-native-community",
        "airbnb",
        "eslint:recommended",
        "plugin:react/recommended",
        "prettier",
      ],
      plugins: ["react", "react-hooks", "import", "jsx-a11y", "prettier"],
      env: {
        browser: true,
        commonjs: true,
        es6: true,
        jest: true,
        mocha: true,
      },
      parserOptions: {
        ecmaVersion: 2018,
        ecmaFeatures: {
          jsx: true,
        },
        sourceType: "module",
      },
      rules: {
        "prettier/prettier": "warn",
        "react/jsx-filename-extension": [1, { allow: "as-needed" }],
        "react/jsx-wrap-multilines": [
          "error",
          { declaration: false, assignment: false },
        ],
        "react/function-component-definition": [
          2,
          { namedComponents: "arrow-function" },
        ],
        "arrow-body-style": ["error", "as-needed"],
      },
    },
    // Eslint for test case env
    // {
    //   files: ['**/*.test.js'],
    //   extends: ['airbnb', 'prettier', 'plugin:jest/recommended'],
    //   plugins: ['prettier', 'jest'],
    //   env: {
    //     commonjs: true,
    //     es6: true,
    //     node: true,
    //     jest: true,
    //   },
    // },
  ],
};
