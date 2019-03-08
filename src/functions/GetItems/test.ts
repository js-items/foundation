import Options from "../../interfaces/Options";
import { TestItem } from "../utils/testItem";
// import runFilterTests from "./subtests/runFilterTests";
import runPaginationTests from "./subtests/runPaginationTests";
// import runSortTests from "./subtests/runSortTests";

export default (options: Options<TestItem>) => {
  describe("getItems", () => {
    // runFilterTests(options);
    runPaginationTests(options);
    // runSortTests(options);
  });
};
