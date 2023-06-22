const ChapterUpdateProgress = () => {
  const chapters = [];
  for (let i = 1; i < 31; i += 1) {
    const chapter = ` ${i}`;

    chapters.push(chapter);
  }

  const randomChapter = Math.floor(Math.random() * (chapters.length - 1));

  return (
    <div className="ChapterUPContainer">
      <div>
        <p className="fontStyle4 fontColor1 mb05">CURRENT CHAPTER</p>
        <p className="fontStyle4 fontColor1 mb1">
          Chapter
          {chapters[randomChapter]}
        </p>
      </div>
      <div>
        <button className="appDefaultButton  fontColor5" type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

export default ChapterUpdateProgress;
