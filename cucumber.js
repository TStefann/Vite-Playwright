// cucumber.js
let common = [
  'e2e-tests/features/**/*.feature',
    '--require-module ts-node/register',   
    '--require e2e-tests/step-definitions/**/*.ts',   
    '--format html:e2e-tests/Reports/report.html',
    
    
  ].join(' ');
  
  module.exports = {
    default: common
  };
  
  
  