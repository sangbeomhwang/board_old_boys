const boardService = require("../services/board.service");

exports.getList = async (req, res) => {
  const searchType = req.query.searchType;
  const search = req.query.search;
  let list = await boardService.getList();
  if (searchType && search) {
    list = list.filter((obj) => obj[searchType].includes(search));
  }
  res.render("board/list.html", { list });
};

exports.getView = async (req, res) => {
  const idx = req.query.index;
  const item = await boardService.getView(idx);
  const prevIdx = await boardService.getPrev(idx);
  const nextIdx = await boardService.getNext(idx);
  res.render("board/view.html", { item, prevIdx, nextIdx });
};

exports.postView = async (req, res) => {
    const idx = req.query.index;
    const commentData = req.body;
    commentData.boardIdx = idx;
    await boardService.postView(commentData);
    res.redirect(`/board/view?index=${idx}`);
};

exports.getWrite = (req, res) => {
  res.render("board/write.html");
};

exports.postWrite = async (req, res) => {
  console.log(1)
  const writeData = req.body;
  await boardService.postWrite(writeData);
  res.redirect("/board/list?index=0");
};

exports.getModify = async (req, res) => {
  const idx = req.query.index;
  const item = await boardService.getView(idx);
  res.render("board/modify.html", { item });
};

exports.postModify = async (req, res) => {
  const idx = req.query.index;
  const writeData = req.body;
  writeData.idx = idx;
  await boardService.postModify(writeData);
  res.redirect(`/board/view?index=${idx}`);
};

exports.postDelete = async (req, res) => {
  const idx = req.query.index;
  await boardService.postDelete(idx);
  res.redirect("/board/list?index=0");
};
