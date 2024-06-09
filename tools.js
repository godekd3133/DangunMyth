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

  let jsFileContent = ["Scene.js", ...jsFileList, "DangunMyth.js"]
    .map((jsFile) => getFileContent(jsFile))
    .join("\n");

  /// NanumGothic.ttf -> ../../../../Fonts/NanumGothic.ttf
  jsFileContent = jsFileContent.replace(
    /"NanumGothic\.ttf/g,
    '"../../../../Fonts/NanumGothic.ttf'
  );

  /// LeeSeoyun.otf -> ../../../../Fonts/LeeSeoyun.otf
  jsFileContent = jsFileContent.replace(
    /"LeeSeoyun\.otf/g,
    '"../../../../Fonts/LeeSeoyun.otf'
  );

  /// Sounds -> "../../../Sounds
  jsFileContent = jsFileContent.replace(/"Sounds/g, '"../../../Sounds');

  /// "Images -> "../../../Images
  jsFileContent = jsFileContent.replace(/"Images/g, '"../../../Images');

  fs.writeFileSync(
    path.join(__dirname, "p5", "p5", "src", "sketch.js"),
    jsFileContent
  );
})();
