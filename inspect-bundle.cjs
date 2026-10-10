const https = require('https');
https.get('https://linkup-erp.vercel.app/assets/index-B8vOC8sW.js', res => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const idx = data.indexOf('function Gv');
    if (idx !== -1) {
      console.log('FOUND Gv:');
      console.log(data.substring(idx, idx + 1000));
    } else {
      console.log('Gv not found');
    }
  });
});
