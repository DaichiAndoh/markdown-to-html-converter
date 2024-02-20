const fs = require('fs');
const marked = require('marked');

function main() {
  if (!process.argv[2] || !process.argv[3]) {
    throw new Error('inputPath と outputPath を適切に設定してください。');
  }

  const inputPath = process.argv[2];
  const outputPath = process.argv[3];

  const mdContent = fs.readFileSync(inputPath);
  const htmlContent = marked.parse(mdContent.toString());
  fs.writeFileSync(outputPath, htmlContent);
}

try {
  main();
  console.log('マークダウンファイルをHTMLファイルに変換しました。');
} catch(error) {
  console.log('エラーが発生しました。:', error);
} finally {
  console.log('プログラムを終了します。');
}
