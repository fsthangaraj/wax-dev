import React, { useState } from 'react';
import Button from './components/Button';
import Heading from './components/Heading';
import Link from './components/Link';

function App() {
  const [clickCount, setClickCount] = useState(0);

  const handleButtonClick = () => {
    setClickCount(prev => prev + 1);
  };

  return (
    <div className="container">
      <Heading level={2}>React Testing Demo</Heading>
      
      <Heading level={1}>Welcome to our simple React app!</Heading>
      
      <p>This is a simple page with buttons, headings, and links for testing npm packages.</p>
      
      <Heading level={3}>Interactive Elements</Heading>
      
      <div>
        <Button onClick={handleButtonClick}>
          Click me! (Clicked {clickCount} times)
        </Button>
        
        <Button onClick={() => alert('Hello from React!')}>
          Show Alert
        </Button>
      </div>
      
      <Heading level={3}>Useful Links</Heading>
      
      <div>
        <Link href="https://reactjs.org">React Documentation</Link>
        <Link href="https://testing-library.com">Testing Library</Link>
        <Link href="https://jestjs.io">Jest Testing Framework</Link>
      </div>
      
      <Heading level={3}>About</Heading>
      
      <p>This app is designed to test npm packages with React components. It includes:</p>
      <ul>
        <li>Button components with click handlers</li>
        <li>Heading components with different levels</li>
        <li>Link components with external URLs</li>
        <li>State management with useState</li>
      </ul>
    </div>
  );
}

export default App; 