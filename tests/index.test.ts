import { test_created } from "./created";
import { test_values_altered } from "./values.altered";
import { test_operations } from "./operations";

describe("A Vector", () => {
   describe("Created and", test_created);
   describe("Values Altered", test_values_altered);
});
