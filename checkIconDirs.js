const fs = require('fs'); const path = require('path'); const dirs = fs.readdirSync(path.join(process.cwd(), 'node_modules/react-icons')).filter(dir => !dir.startsWith('.')); console.log(dirs);
