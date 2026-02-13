// Simple example: Toggle prayer text visibility
document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.querySelector('.toggle-prayer');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', function() {
            const prayer = document.querySelector('.prayer-text');
            prayer.style.display = prayer.style.display === 'none' ? 'block' : 'none';
        });
    }
});