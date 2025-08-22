describe('Vue App WebdriverIO Tests', () => {
    beforeEach(async () => {
        await browser.url('/');
    });

    it('should display the main heading', async () => {
        const heading = await $('h1');
        await expect(heading).toHaveText('Vue Testing Demo');
    });

    it('should display welcome heading', async () => {
        const heading = await $('h2');
        await expect(heading).toHaveText('Welcome to our simple Vue app!');
    });

    it('should have interactive buttons', async () => {
        const clickButton = await $('button*=Click me!');
        const alertButton = await $('button=Show Alert');
        
        await expect(clickButton).toBeDisplayed();
        await expect(alertButton).toBeDisplayed();
    });

    it('should increment counter when button is clicked', async () => {
        const clickButton = await $('button*=Click me!');
        
        // Check initial state
        await expect(clickButton).toHaveTextContaining('Clicked 0 times');
        
        // Click the button
        await clickButton.click();
        
        // Check updated state
        await expect(clickButton).toHaveTextContaining('Clicked 1 times');
    });

    it('should have external links', async () => {
        const vueLink = await $('a[href="https://vuejs.org"]');
        const testingLink = await $('a[href="https://testing-library.com"]');
        const vitestLink = await $('a[href="https://vitest.dev"]');
        
        await expect(vueLink).toHaveAttribute('href', 'https://vuejs.org');
        await expect(testingLink).toHaveAttribute('href', 'https://testing-library.com');
        await expect(vitestLink).toHaveAttribute('href', 'https://vitest.dev');
    });

    it('should show alert when Show Alert button is clicked', async () => {
        const alertButton = await $('button=Show Alert');
        
        // Mock alert
        await browser.execute(() => {
            window.alert = (message) => {
                window.alertMessage = message;
            };
        });
        
        await alertButton.click();
        
        const alertMessage = await browser.execute(() => window.alertMessage);
        expect(alertMessage).toBe('Hello from Vue!');
    });
}); 