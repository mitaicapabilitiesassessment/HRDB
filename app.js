document.addEventListener('DOMContentLoaded', () => {
    // Thêm hiệu ứng gợn sóng (ripple) cho các nút primary
    const buttons = document.querySelectorAll('.primary-btn');
    
    buttons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            let x = e.clientX - e.target.offsetLeft;
            let y = e.clientY - e.target.offsetTop;
            
            let ripples = document.createElement('span');
            ripples.style.left = x + 'px';
            ripples.style.top = y + 'px';
            ripples.style.position = 'absolute';
            ripples.style.background = 'rgba(255, 255, 255, 0.5)';
            ripples.style.width = '100px';
            ripples.style.height = '100px';
            ripples.style.transform = 'translate(-50%, -50%)';
            ripples.style.borderRadius = '50%';
            ripples.style.animation = 'ripple 1s linear infinite';
            
            this.appendChild(ripples);
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            
            setTimeout(() => {
                ripples.remove();
            }, 1000);
        });
    });

    // Thêm CSS keyframe cho ripple nếu chưa có
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes ripple {
            0% { width: 0px; height: 0px; opacity: 0.5; }
            100% { width: 500px; height: 500px; opacity: 0; }
        }
    `;
    document.head.appendChild(style);
});
