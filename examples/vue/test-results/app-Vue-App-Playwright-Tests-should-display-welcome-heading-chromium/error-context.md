# Page snapshot

```yaml
- generic [ref=e3]:
  - heading "Vue Testing Demo" [level=2] [ref=e4]
  - heading "Welcome to our simple Vue app!" [level=1] [ref=e5]
  - paragraph [ref=e6]: This is a simple page with buttons, headings, and links for testing npm packages.
  - heading "Interactive Elements" [level=3] [ref=e7]
  - generic [ref=e8]:
    - button "Click me! (Clicked 0 times)" [ref=e9] [cursor=pointer]
    - button "Show Alert" [ref=e10] [cursor=pointer]
  - heading "Useful Links" [level=3] [ref=e11]
  - generic [ref=e12]:
    - link "Vue Documentation" [ref=e13] [cursor=pointer]:
      - /url: https://vuejs.org
    - link "Testing Library" [ref=e14] [cursor=pointer]:
      - /url: https://testing-library.com
    - link "Vitest Testing Framework" [ref=e15] [cursor=pointer]:
      - /url: https://vitest.dev
  - heading "About" [level=3] [ref=e16]
  - paragraph [ref=e17]: "This app is designed to test npm packages with Vue components. It includes:"
  - list [ref=e18]:
    - listitem [ref=e19]: Button components with click handlers
    - listitem [ref=e20]: Heading components with different levels
    - listitem [ref=e21]: Link components with external URLs
    - listitem [ref=e22]: State management with Composition API
```