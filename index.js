// ====== あらかじめ用意したデータを描画 ======
function toGrid(i, d) {
  let ret;
  ret = new gridjs.Grid({
    columns: i,
    data: d,
    sort: true, // ソート機能を有効にする
    width: "600px", // テーブルの幅を指定
    style: {
      th: { color: "#b17c20", fontWeight: "bold" }, // カラムのスタイル
      td: { "font-size": "15px" }, // セルのスタイル
    }, // 独自のcssを記述
  }).render(document.getElementById("list_table")); // htmlのid="list_table"の要素に描画
}

let items = ["名前", "日付", "タイトル"];
let data = [
  ["user1", "2023/02/15", "hogehoge"],
  ["user2", "2023/05/26", "fugafuga"],
  ["user3", "2023/07/04", "piyopiyo"],
];
toGrid(items, data);
//
//
//
//
//
// ====== jsonデータをテーブルに描画 ======
const fake_api = "https://jsonplaceholder.typicode.com/posts";
window.onload = (e) => {
  // 非同期でデータを取得する
  fetch(fake_api)
    .then((res) => res.json())
    .then((data) => {
      // テーブルを描画する関数
      function toGrid(d) {
        // gridjs.Gridのインスタンスを返す
        let ret = new gridjs.Grid({
          data: d, // データの指定
          sort: true, // ソート機能を有効にする
          //   width: "600px", // テーブルの幅を指定
          style: {
            th: { color: "#309732", fontWeight: "bold" }, // カラムのスタイル
            td: { "font-size": "15px" }, // セルのスタイル
          }, // 独自のcssを記述
        }).render(document.getElementById("json_table")); // htmlのid="json_table"の要素に描画
        return ret;
      }

      // データを挿入して描画
      let gr = toGrid(data);
      // セルがクリックされたときのイベント
      gr.on("cellClick", (...args) => {
        console.log(args[1].data); // コンソールにクリックしたセル内のデータの表示
      });
    });
};
//
//
//
//
//
// ====== html要素のpdf化 ======
document.querySelector("#list_table_button").addEventListener("click", () => {
  const content = document.querySelector("#list_table_data");
  const filename = "list_table.pdf";
  html2pdf(content).save(filename);
});

document.querySelector("#json_table_button").addEventListener("click", () => {
  const content = document.querySelector("#json_table_data");
  const filename = "json_table.pdf";
  html2pdf(content).save(filename);
});
