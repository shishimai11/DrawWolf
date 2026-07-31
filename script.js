const startBtn = document.getElementById("startBtn");

const topicPairs = [
  ["りんご", "トマト"],
  ["ねこ", "いぬ"],
  ["電車", "新幹線"],
  ["海", "プール"],
  ["ピザ", "パン"],
  ["サッカー", "フットサル"],
  ["ライオン", "トラ"],
  ["コーラ", "サイダー"]
];

startBtn.addEventListener("click", () => {
  const playerCount = Number(document.getElementById("playerCount").value);
  const wolfCount = Number(document.getElementById("wolfCount").value);

  // ランダムなお題
  const pair = topicPairs[Math.floor(Math.random() * topicPairs.length)];

  // 全員市民
  const roles = Array(playerCount).fill("市民");

  // 人狼をランダムに決定
  let wolves = 0;
  while (wolves < wolfCount) {
    const index = Math.floor(Math.random() * playerCount);
    if (roles[index] === "市民") {
      roles[index] = "人狼";
      wolves++;
    }
  }

  // 結果表示（仮）
  let text = "";

  roles.forEach((role, i) => {
    const topic = role === "人狼" ? pair[1] : pair[0];

    text +=
      `${i + 1}番\n` +
      `役職：${role}\n` +
      `お題：${topic}\n\n`;
  });

  alert(text);
});
