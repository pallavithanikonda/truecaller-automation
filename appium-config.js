const { remote } = require('webdriverio');  
const bsConfig = require('./config/browserstack.json');  
  
async function getDriver() {  
  const driver = await remote({  
    protocol: 'https',  
    hostname: bsConfig.server,  
    port: 443,  
    path: '/wd/hub',  
    capabilities: {  
      ...bsConfig.capabilities,  
      'browserstack.user': bsConfig.username,  
      'browserstack.key': bsConfig.access_key  
    }  
  });  
  return driver;  
}  
  
module.exports = { getDriver };  
