$(document).ready(function () {
    const thumbnails = $('.gallery-grid img');
    const largeImg = $('#large-img');
    let currentIndex = 0;
  
    function showImage(index) {
      const src = thumbnails.eq(index).attr('src');
      largeImg.fadeOut(200, function () {
        $(this).attr('src', src).fadeIn(400);
      });
    }
  
    thumbnails.click(function () {
      currentIndex = thumbnails.index(this);
      showImage(currentIndex);
    });
  
    $('#prev').click(function () {
      currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
      showImage(currentIndex);
    });
  
    $('#next').click(function () {
      currentIndex = (currentIndex + 1) % thumbnails.length;
      showImage(currentIndex);
    });
  });
  