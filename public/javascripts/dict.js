function onReady() {

    const searchInput = $("input");
    const infoText = $(".info-text");
    const removeIcon = $(".search span");
    const lookup = $("#lookup");
    const content = $("#content");

    lookup.click(() => {
        fetchAPI(searchInput.val());
    });

    removeIcon.click(() => {
        searchInput.val("");
        searchInput.focus();
        content.empty();
        content.hide();
        content.removeClass("active")
        infoText.css("color", "#9A9A9A");
        infoText.html("Type any word and press lookup to get definition.");
    });


    function fetchAPI(word) {
        infoText.css("color", "#000");
        infoText.html(`Searching the meaning of <span>"${word}"</span>`);
        content.empty();
        content.hide();
        let url = `/api/search?q=${word}`;
        $.get(url, function (result, status) {
            if (status === "success") {
                data(result, word);
                return;
            }
            infoText.html(`Can't find the meaning of <span>"${word}"</span>. Please, try to search for another word.`);

        });

    }

    function data(result, word) {

        if (parseInt(result.length) === 0) {
            infoText.html(`Can't find the definition of <span>"${word}"</span>. Please, try to search for another word.`);
            return;
        }

        if (parseInt(result.length) > 4) {
            content.addClass("active");
        } else {
            content.removeClass("active");
        }
        content.show();
        infoText.html(`<span>${result.length}</span> definition found.`);
        for (let i = 0; i < result.length; i++) {
            let def = result[i];
            content.append(`${parseInt(i + 1)}(${def.wordtype}) :: ${def.definition}`);
            content.append('<br/> <br/>');
        }
    }

}

$(document).ready(onReady);