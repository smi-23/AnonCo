import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      // 사용하지 않는 임포트 등에 관한 에러 처리
      // "no-unused-vars": "off",
      // "@typescript-eslint/no-unused-vars": "warn",
    },
  },
]

export default eslintConfig;
