export const home = (req, res) => {
  res.render("story", { pageTitle: "home" });
};
export const trending = (req, res) => {
  res.render("story", { pageTitle: "trending" });
};
export const newStories = (req, res) => {
  res.render("story", { pageTitle: "newStories" });
};
export const seeStory = (req, res) => {
  const { id } = req.params;
  res.render("story", { pageTitle: "seeStory", id });
};
export const editStory = (req, res) => {
  const { id } = req.params;
  res.render("story", { pageTitle: "editStory", id });
};
export const deleteStory = (req, res) => {
  const { id } = req.params;
  res.render("story", { pageTitle: "deleteStory", id });
};
