const fs = require("fs");
const path = require("path");

const getFileContent = (filePath) => {
  const content = fs.readFileSync(path.join(__dirname, filePath)).toString();

  return `/* ${filePath} */ \n${content}`;
};

(() => {
  const jsFileList = fs.readdirSync(__dirname).filter((ls) => {
    const stat = fs.statSync(ls);

    return (
      stat.isFile() &&
      /\.js$/.test(ls) &&
      !/DangunMyth\.js$/.test(ls) &&
      !/Scene\.js$/.test(ls) &&
      !/tools\.js$/.test(ls)
    );
  });

  const jsFileContent = ["Scene.js", ...jsFileList, "DangunMyth.js"]
    .map((jsFile) => getFileContent(jsFile))
    .join("\n");
  const mainJsFileContent = getFileContent("DangunMyth.js");

  fs.writeFileSync(path.join(__dirname, "web", "index.js"), jsFileContent);
})();
