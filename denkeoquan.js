document.addEventListener('DOMContentLoaded', function() {
    const lantern = document.getElementById('lantern');
    const speedUpBtn = document.getElementById('speedUp');
    const speedDownBtn = document.getElementById('speedDown');
    const reverseBtn = document.getElementById('reverse');
    const resetBtn = document.getElementById('reset');
    
    let currentSpeed = 10; // giây để hoàn thành 1 vòng
    let isReversed = false;
    
    // Cập nhật animation
    function updateAnimation() {
        const direction = isReversed ? 'reverse' : 'normal';
        lantern.style.animation = `rotate ${currentSpeed}s infinite linear ${direction}`;
    }
    
    // Tăng tốc
    speedUpBtn.addEventListener('click', function() {
        if (currentSpeed > 2) {
            currentSpeed -= 2;
            updateAnimation();
            showStatus(`Tốc độ: ${(12-currentSpeed)/2}/5`);
        }
    });
    
    // Giảm tốc
    speedDownBtn.addEventListener('click', function() {
        if (currentSpeed < 20) {
            currentSpeed += 2;
            updateAnimation();
            showStatus(`Tốc độ: ${(12-currentSpeed)/2}/5`);
        }
    });
    
    // Đảo chiều
    reverseBtn.addEventListener('click', function() {
        isReversed = !isReversed;
        updateAnimation();
        showStatus(isReversed ? 'Đang quay ngược' : 'Đang quay xuôi');
    });
    
    // Reset
    resetBtn.addEventListener('click', function() {
        currentSpeed = 10;
        isReversed = false;
        updateAnimation();
        showStatus('Đã reset về mặc định');
    });
    
    // Hiển thị trạng thái
    function showStatus(message) {
        // Tạo hoặc cập nhật phần tử hiển thị trạng thái
        let statusEl = document.querySelector('.status');
        if (!statusEl) {
            statusEl = document.createElement('div');
            statusEl.className = 'status';
            document.querySelector('.controls').after(statusEl);
        }
        statusEl.textContent = message;
        
        // Tự động ẩn sau 2 giây
        setTimeout(() => {
            statusEl.textContent = '';
        }, 2000);
    }
    
    // Hiệu ứng hover chi tiết hơn
    lantern.addEventListener('mouseenter', function() {
        showStatus('Đèn đã dừng');
    });
    
    lantern.addEventListener('mouseleave', function() {
        showStatus('Đèn đang quay...');
    });
    
    // Thông báo khi trang load
    setTimeout(() => {
        showStatus('Đèn đang quay... Đưa chuột vào để dừng');
    }, 1000);
});