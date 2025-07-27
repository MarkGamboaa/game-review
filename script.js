
$(document).ready(function() {
    $('header h1').hide().fadeIn(1500);
    $('header p.lead').hide().fadeIn(2000);

    $('#comment-form').on('submit', function(event) {
        event.preventDefault();
        const commenterName = $('#commenterName').val();
        const commentText = $('#commentText').val();

        if (commenterName && commentText) {
            const newComment = `
                <div class="card p-3 mb-2 added-comment">
                    <strong>${commenterName}:</strong> ${commentText}
                </div>
            `;
            $('#comments-list').append(newComment);
            $('.added-comment:last').hide().slideDown(500, function() {
                $(this).removeClass('added-comment');
            });
            $('#commenterName').val('');
            $('#commentText').val('');
        } else {
            alert('Please enter both your name and a comment!');
        }
    });

    $('#game-info img').on('click', function() {
        $(this).toggleClass('img-clicked');
    });

    setTimeout(() => {
        const ratingBadge = document.querySelector('#rating .badge');
        if (ratingBadge) {
            ratingBadge.classList.remove('bg-info');
            ratingBadge.classList.add('bg-success');
            ratingBadge.textContent = 'Timeless Classic! 9.8/10';
        }
    }, 3000);
});
