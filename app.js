$(document).ready(function () {
    let pages = [
        "home",
        "academics",
        "research",
        "first",
        "mars",
        "rovs",
        "volunteering",
        "job",
        "skills",
        "awards",
        "projects",
        "hobbies",
        "résumé",
        "contact",
    ];
    function loadTextIntoDiv(filePath, divId) {
        $.get(filePath, function (data) {
            $(divId).html(data);
            if (filePath == "pages/contact.html") {
                $(".submit-btn").click(function () {
                    console.log("Submit email");
                    const firstName = $("#firstName").val();
                    const lastName = $("#lastName").val();
                    const subject = $("#subject").val();
                    const message = $("#message").val();

                    const mailtoLink = `mailto:qpfeifer@uw.edu?subject=${subject}&body=Name: ${
                        firstName + " " + lastName
                    }%0A${message}`;

                    console.log(mailtoLink);
                    window.location.href = mailtoLink;
                });
            }
        }).fail(function () {
            console.error("There was a problem fetching the file:", filePath);
        });
    }

    pages.forEach((page) => {
        loadTextIntoDiv(`pages/${page}.html`, `#v-pills-${page}`);
    });

    $(".nav-link").click(function () {
        let id_string = $(this).attr("id");
        let id = id_string.substring(8, id_string.length - 4);
        if (id !== "robotics") {
            $("#main-img").attr("src", "images/" + id + ".jpg");
        }
    });
});
