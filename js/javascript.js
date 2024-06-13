document.addEventListener("DOMContentLoaded", () => {
    // Step 1: Hash your email address using SHA-256.
    const hashedEmail = CryptoJS.SHA256("fsequeira230@gmail.com");
    // Step 2: Construct the Gravatar URL.
    const gravatarUrl = `https://www.gravatar.com/avatar/${hashedEmail}`;
    // Step 3: Set the image source to the Gravatar URL.
    $("#gravatar-image").attr("src", gravatarUrl);
    $("#gravatar-image").css({
      "border-radius": "50%",
      border: "2px solid lightgray",
    }); /* Asegura que la imagen no se desborde del contenedor */
  });
  $(".card").css({
    padding: "3%",
    margin: "3%",
    display: "flex",
    "flex-direction": "column",
    height: "100%",
  });
  $(".card-body").css({ "flex-grow": "1" });
  $(".card-text").css({
    display: "flex",
    "flex-direction": "column",
    "justify-content": "center",
    "align-items": "center",
    height: "100%",
  });
  $(".card-img-top").css({
    "background-color": "#595959",
    "padding-top": "3%",
    "padding-bottom": "3%",
  });

  $(window).on('scroll', function() {
    $('.fade-in').each(function() {
        var elementTop = $(this).offset().top;
        var windowBottom = $(window).scrollTop() + $(window).height();
        if (elementTop < windowBottom - 50) { // 50 es para agregar un pequeño margen
            $(this).addClass('visible');
        }
    });
});

// Trigger scroll event on page load
$(window).trigger('scroll');