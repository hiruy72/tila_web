const fs = require("fs");
const path = require("path");

const files = [
  "src/app/contact/page.tsx",
  "src/app/about/page.tsx",
  "src/app/team/page.tsx",
  "src/app/solutions/page.tsx",
  "src/app/technologies/page.tsx",
  "src/app/services/page.tsx",
  "src/app/resources/page.tsx",
  "src/app/resources/get-a-quote/page.tsx",
  "src/app/resources/process/page.tsx",
  "src/app/industries/page.tsx",
  "src/app/resources/support/page.tsx",
  "src/app/resources/company/page.tsx",
  "src/app/resources/faq/page.tsx",
  "src/components/CategoryPages.tsx"
];

const basePath = "c:/Users/lenovo/Desktop/tila_tech";

files.forEach(file => {
  const fullPath = path.join(basePath, file);
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, "utf-8");
    
    if (file.includes("CategoryPages.tsx")) {
      content = content.replace(/title:\s*`\$\{content\.title\} \| Tila Technology PLC`,\s*/g, "");
    } else {
      content = content.replace(/\s*title:\s*["'][^"']+["'],/g, "");
    }
    
    fs.writeFileSync(fullPath, content, "utf-8");
    console.log(`Updated ${file}`);
  }
});
