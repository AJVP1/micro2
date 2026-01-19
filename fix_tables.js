const fs = require('fs');

const files = [
  'src/pages/Unidad2/E1.jsx',
  'src/pages/Unidad2/E2.jsx',
  'src/pages/Unidad2/E3.jsx',
  'src/pages/Unidad2/E4.jsx',
  'src/pages/Unidad2/E5.jsx',
  'src/pages/Unidad2/E6.jsx',
  'src/pages/Unidad2/E7.jsx',
  'src/pages/Unidad2/E8.jsx',
  'src/pages/Unidad2/E9.jsx',
  'src/pages/Unidad2/E10.jsx',
  'src/pages/Unidad2/E13.jsx',
  'src/pages/Unidad2/Teoria.jsx'
];

function fixTables(content) {
  // Split content by table tags
  const tableRegex = /<table([^>]*)>([\s\S]*?)<\/table>/g;
  
  return content.replace(tableRegex, (match, tableAttrs, tableContent) => {
    // Skip if already has thead
    if (tableContent.includes('<thead>')) {
      return match;
    }
    
    // Find all <tr> elements
    const trRegex = /(\s*<tr>[\s\S]*?<\/tr>)/g;
    const trs = [];
    let m;
    while ((m = trRegex.exec(tableContent)) !== null) {
      trs.push(m[1]);
    }
    
    if (trs.length < 2) {
      return match; // Not enough rows to split
    }
    
    // First two rows are header, rest are body
    const headerRows = trs.slice(0, 2).join('\n');
    const bodyRows = trs.slice(2).join('\n');
    
    // Get leading whitespace from first tr
    const leadingWhitespace = trs[0].match(/^\s*/)[0];
    const indent = leadingWhitespace || '          ';
    
    let newContent = `<table${tableAttrs}>\n${indent}<thead>${headerRows}\n${indent}</thead>`;
    if (bodyRows.length > 0) {
      newContent += `\n${indent}<tbody>${bodyRows}\n${indent}</tbody>`;
    }
    newContent += `\n        </table>`;
    
    return newContent;
  });
}

let totalTables = 0;
files.forEach(file => {
  try {
    let content = fs.readFileSync(file, 'utf8');
    const tableCount = (content.match(/<table/g) || []).length;
    const fixed = fixTables(content);
    fs.writeFileSync(file, fixed);
    console.log(`${file}: ${tableCount} tables processed`);
    totalTables += tableCount;
  } catch (err) {
    console.error(`Error processing ${file}: ${err.message}`);
  }
});

console.log(`\nTotal: ${totalTables} tables fixed across ${files.length} files`);
