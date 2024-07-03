let contentLoaded = false;
let isAnimating = false;
let isLoading = false;

function toggleTumbler() {
    if (isAnimating || isLoading) return;

    const button = document.querySelector('.tumbler-button');
    button.classList.toggle('active');

    if (contentLoaded) {
        returnToMainContent();
    } else {
        loadNewContent();
    }
}


function loadNewContent() {
    if (isAnimating || isLoading) return;

    isLoading = true;
    isAnimating = true;

    const button = document.querySelector('.tumbler-button');
    button.classList.add('right'); // Перемещаем кнопку наверх


    $.ajax({
        url: '/new-content/', // Замените на актуальный URL для загрузки нового контента
        success: function(data) {
            $('#new-content').html(data);

            $('#main-content').addClass('fade-out').removeClass('fade-in');
            $('#new-content').addClass('fade-in').removeClass('fade-out');

            // Показать новый контент сразу
            $('#main-content').hide();
            document.body.style.background = 'white';
            $('#new-content').show();
            completeAnimation();
            contentLoaded = true;
        },
        error: function(xhr, status, error) {
            console.error('Error loading new content:', error);
            alert('Error loading new content. Please try again later.');
            completeAnimation();
        }
    });
}

function returnToMainContent() {
    if (isAnimating || isLoading) return;

    isLoading = true;
    isAnimating = true;

    const button = document.querySelector('.tumbler-button');
    button.classList.remove('right'); // Перемещаем кнопку вниз
    

    $('#new-content').addClass('fade-out').removeClass('fade-in');
    $('#main-content').addClass('fade-in').removeClass('fade-out');

    // Показать основной контент сразу
    $('#new-content').hide();
    document.body.style.background = 'black';
    $('#main-content').show();
    completeAnimation();
    contentLoaded = false;
}

function completeAnimation() {
    $('html, body').animate({
        scrollTop: (contentLoaded ? $("#new-content") : $("#main-content")).offset().right
    }, 1000, function() {
        isAnimating = false;
        isLoading = false;
    });
}
