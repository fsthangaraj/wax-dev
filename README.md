# WAX Dev Testing Framework

## Description
A lightweight and extensive automated accessibiilty testing framework

As a part of the WallyAX ecosystem accessibility tools, this package helps run accessibility tests on components and can easily be part of existing unit or integration testing.

## Installation
Install the package using npm:
```sh
npm install @wally-ax/wax-dev
```
Or using yarn:
```sh
yarn add @wally-ax/wax-dev
```
## Usage
### Configuration
Create a configuration file named wax.config.js in the root directory of your project. The file should look like this:
```javascript
module.exports = {
  rules: ["image-alt", "list"],
  apiKey: "YOUR_WALLY_DEVELOPER_API_KEY"
};
```
rules: An array of strings representing rule definitions. Available rules can be found [here]("https://kb.wallyax.com/docs/wax-dev/rules"). An empty array will include all rules.


apiKey: A string required for the wax-dev to work. You can request an API key at technology@wallyax.com.

### Example Usage with Jest Testing Library in a React App
runWax functions takes the rendered or pre-rendered html content and options as input.

For a ButtonList component:
```javascript
import { render } from '@testing-library/react';
import ButtonList from './ButtonList';
const runWax = require('@wally-ax/wax-dev');

describe('ButtonList AX Test', () => {
  test('should have no accessibility violations', async () => {
    const { container } = render(<ButtonList />);
    const ele = JSON.stringify(container.innerHTML);
    const violations = await runWax(ele, {rules: ["images-alt"]});
    expect(violations).toHaveLength(0);
  });
});
```

Note: the rule configuration at test level will be over-ridden by the global configuraiton in wax.config.js

### Results
The results will be an array of violations based on the config. Example:
```json
[
  {
    "description": "Ensures <img> elements have alternate text or a role of none or presentation",
    "element": "<img src=\"logo\">",
    "impact": "critical",
    "message": "Images must have alternate text"
  },
  {
    "description": "Ensures every form element has a label",
    "element": "<input type=\"text\">",
    "impact": "critical",
    "message": "Form elements must have labels"
  },
  {
    "description": "Ensures that lists are structured correctly",
    "element": "<ul><p>List item 2</p><li>List item ...</ul>",
    "impact": "serious",
    "message": "<ul> and <ol> must only directly contain <li>, <script> or <template> elements"
  }
]
```
## License
Mozilla Public License Version 2.0 (see license.txt)

WAX Dev is licensed as Mozilla Public License Version 2.0 and the copyright is owned by Wally Solutions Pvt Ltd and Contributors.

By contributing to WAX Dev, you agree that your contributions will be licensed under its Mozilla Public License Version 2.0.