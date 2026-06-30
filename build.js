const fs = require('fs');
const path = require('path');

const scriptsDir = path.join(__dirname, 'scripts');
const outFile = path.join(__dirname, 'out.json');

// Читаем все подпапки в scripts/
const result = [];
if (fs.existsSync(scriptsDir)) {
  const folders = fs.readdirSync(scriptsDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  for (const folder of folders) {
    const jsonPath = path.join(scriptsDir, folder, 'script.json');
    if (fs.existsSync(jsonPath)) {
      try {
        const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
        result.push(data);
        console.log(`✅ Добавлен скрипт: ${data.script?.name || folder}`);
      } catch (e) {
        console.error(`❌ Ошибка в ${jsonPath}:`, e.message);
      }
    } else {
      console.warn(`⚠️ В папке ${folder} нет script.json`);
    }
  }
}

// Записываем результат в out.json
fs.writeFileSync(outFile, JSON.stringify(result, null, 2));
console.log(`📦 out.json создан (${result.length} скриптов)`);
