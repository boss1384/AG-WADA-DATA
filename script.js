// script.js
document.addEventListener('DOMContentLoaded', () => {
    console.log('%c✅ Ag Wada Data App Loaded Successfully!', 'color: #3b82f6; font-size: 16px;');

    // Balance visibility toggle
    const eyeIcon = document.querySelector('.balance-label');
    let isVisible = true;
    const balanceAmount = document.querySelector('.balance-amount');

    if (eyeIcon) {
        eyeIcon.style.cursor = 'pointer';
        eyeIcon.addEventListener('click', () => {
            isVisible = !isVisible;
            balanceAmount.textContent = isVisible ? '₦0.00' : '••••••';
        });
    }

    // Fund Wallet button
    const fundBtn = document.querySelector('.fund-btn');
    if (fundBtn) {
        fundBtn.addEventListener('click', () => {
            alert("💰 Fund Wallet clicked!\n\nThis is where you'll connect payment options.");
        });
    }

    // Service items click
    const services = document.querySelectorAll('.service-item');
    services.forEach(service => {
        service.style.cursor = 'pointer';
        service.addEventListener('click', () => {
            const serviceName = service.textContent.trim();
            alert(`🛒 ${serviceName} selected!\n\nThis will open the purchase page in your full app.`);
        });
    });

    // Make the whole app feel alive
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
        });
    });
});
