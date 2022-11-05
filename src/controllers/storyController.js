export const storiesPage = (req, res) => {
  const { id } = req.params;
  return res.send(`<h1 style='color:blue'>Welcome to stories ${id} Page</h1>`);
};
export const storiesEditPage = (req, res) => {
  const { id } = req.params;
  return res.send(
    `<h1 style='color:blue'>Welcome to stories ${id} EditPage</h1>`
  );
};
export const storiesDeletePage = (req, res) => {
  const { id } = req.params;
  return res.send(
    `<h1 style='color:blue'>Welcome to stories ${id} DeletePage</h1>`
  );
};
