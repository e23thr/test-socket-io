export * from "./websocket";

// export function run() {
//   let type = "";
//   // const socket = io("http://localhost:3000");
//   console.log("sumNumber", sumNumber(1, 2));
//   // const workerPath = "./worker.js";
//   // require and __dirname are not supported in ESM
//   // see: https://nodejs.org/api/esm.html#differences-between-es-modules-and-commonjs
//   if (typeof require !== "undefined" && typeof __dirname !== "undefined") {
//     type = "CJS";
//     console.log("Running in CommonJS mode.");
//     // const { Worker, isMainThread } = require("worker_threads");
//     // if (isMainThread) {
//     //   const worker = new Worker(__dirname + "/" + workerPath);
//     //   worker.on("exit", (code: number) => {
//     //     console.log(`Nodejs worker finished with code ${code}`);
//     //   });
//     // }
//   } else {
//     type = "ESM";
//     console.log("Running in ESM mode.");
//     // if (typeof Worker !== "undefined") {
//     //   new Worker(workerPath);
//     // } else {
//     //   console.log("Sorry, your runtime does not support Web Workers");
//     //   await import(workerPath);
//     // }
//   }
//   console.log(`Completed ${type} build run.`);
// }
