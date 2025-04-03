const {apiHtml}= require('./utils/api.js');

const runner = function (code, options) {
  let config = {};
  if (!options && !options?.apiKey) {
    const readUserConfig = require('./utils/config.js');
    config = readUserConfig();
  } else {
    config = options;
  }
  if (!config.apiKey || !config.apiKey.length) {
    throw new Error(
      'API Key is required to run wax-dev. Please reach out to https://developer.wallyax.com/ to get your API Key.'
    );
  }
  return new Promise((resolve, reject) => {
    fetch(apiHtml, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${config.apiKey}`,
      },
      body: JSON.stringify({ element: code, rules: config.rules, isLinter:"false" }),
    })
    .then((response) => response.json())
    .then((data) => {
      const cleanedData = data.map((item) => {
        const {
          element,
          message,
          description,
          severity,
          code,
          groupData = {}
        } = item;
    
        const cleanedItem = {
          element,
          message,
          severity,
          grouping: groupData.grouping,
          subgroup: groupData.subgroup,
          why_issue: groupData.why_issue,
          what_is_missing: groupData.what_is_missing,
          how_to_solve: groupData.how_to_solve
        };
    
        if (description) {
          cleanedItem.description = description;
        }
    
        if (groupData.example_before) {
          cleanedItem.example_before = groupData.example_before;
        }
    
        if (groupData.example_after) {
          cleanedItem.example_after = groupData.example_after;
        }
    
        if (code) {
          cleanedItem.code = code.split('_')[0].split(',')[0];
        }
    
        return cleanedItem;
      });
    
      resolve(cleanedData);
    })
    
      .catch((error) => reject(error));
  });
};

module.exports = runner;