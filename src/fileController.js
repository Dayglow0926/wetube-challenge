const fs = require("fs");

export const home = (req, res) => {
  fs.readdir("uploads", "utf-8", (err, files) => {
    res.render("home", { files });
  });
};

export const read = (req, res) => {
  const { file } = req;

  let content = "Not file";

  fs.readFile(file.path, "utf8", (err, data) => {
    if (err) return res.send(content);
    return res.send(data);
  });
};

export const readFile = (req, res) => {
  const { id } = req.params;

  let content = "Not file";

  fs.readFile(`uploads/${id}`, "utf8", (err, data) => {
    if (err) return res.send(content);
    return res.send(data);
  });
};
