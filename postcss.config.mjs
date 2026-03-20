import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config = {
  plugins: [
    "@tailwindcss/postcss",
    path.join(__dirname, "postcss", "flatten-tailwind-atrules.cjs"),
  ],
};

export default config;
