describe('Test PAge', () => {
    it('docker images', async () => {
        await browser.url(` https://www.volvocars.com/intl/v/car-safety/a-million-more/login`);

       

        await expect($('#flash')).toBeExisting();
        await expect($('#flash')).toHaveTextContaining(
            'You logged into a secure area!');
    });

    it('parallel testing', async () => {
        await browser.url(` https://www.volvocars.com/intl/v/car-safety/a-million-more/login`);       

        await expect($('#flash')).toBeExisting();
        await expect($('#flash')).toHaveTextContaining(
            'You logged into a secure area!');
    });

    it('Kubernetting', async () => {
        await browser.url(` https://www.volvocars.com/intl/v/car-safety/a-million-more/login`);       

        await expect($('#flash')).toBeExisting();
        await expect($('#flash')).toHaveTextContaining(
            'You logged into a secure area!');
    });
});

