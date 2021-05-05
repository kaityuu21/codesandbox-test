import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // div生成
  const div = document.createElement("div");
  div.className = "list-row";
  // liタグ作成
  const li = document.createElement("li");
  li.innerText = inputText;
  console.log(li);

  // 完了ボタンタグ作成
  const completedButton = document.createElement("button");
  completedButton.innerText = "完了";
  completedButton.addEventListener("click", () => {
    alert("完了");
  });

  // 削除ボタンタグ作成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    const deleteTarget = deleteButton.parentNode;
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  // divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completedButton);
  div.appendChild(deleteButton);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
