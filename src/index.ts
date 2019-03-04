import * as errors from "./errors/index";
import * as facade from "./facade";
import * as functions from "./functions";
import * as interfaces from "./interfaces";
import * as testFacade from "./testFacade";
import * as utils from "./utils";

module.exports = {
  ...functions,
  ...errors,
  ...interfaces,
  ...utils,
  facade,
  testFacade
};
