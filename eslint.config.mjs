import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});
module.exports = {
  rules: {
      '@next/next/no-img-element': 'off',
      'react/no-unescaped-entities': 'off',
        sourceType: 'module'
  },
},


{
  "extends": [
    "next/core-web-vitals", 
    "plugin:@typescript-eslint/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint"],
  "rules": {
    // Add or customize your rules here
  }
},

{
  "ignorePatterns": ["node_modules/", "public/", "build/"]
}



const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript")
];

export default eslintConfig;
