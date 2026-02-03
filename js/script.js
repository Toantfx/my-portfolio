document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio của Nguyễn Văn A đã load xong!');

    // Hiển thị thông báo chào mừng
    alert('Chào mừng bạn đến với portfolio thật trên Internet của mình!');
    
    // Thêm hiệu ứng cho các project
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        project.addEventListener('click', () => {
            alert(`Bạn đã click vào dự án: ${project.textContent}`);
        });
    });
});