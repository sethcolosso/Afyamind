import mammoth from "mammoth";

const path = "data/Course-Anxiety-depression-d727fe.docx";
const { value: html } = await mammoth.convertToHtml({ path });
console.log("=== HTML LENGTH ===", html.length);
console.log(html);
