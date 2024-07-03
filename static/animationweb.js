$(document).ready(function() {
    // Плавное исчезновение при переходе по ссылке
    $('.transition-link').on('click', function(event) {
        event.preventDefault();
        let linkLocation = this.href;

        $('#content').addClass('hidden');

        setTimeout(function() {
            window.location = linkLocation;
        }, 500);
    });

    // Плавное появление при загрузке страницы
    setTimeout(function() {
        $('#content').removeClass('hidden').addClass('fade-in');
    }, 100);
});