import { dataSeries } from './dataSeries.js';

var seriesTbody = document.getElementById('series');
var seasonAverageElm = document.getElementById("season-average");
var serieDetail = document.getElementById("serie-detail");

renderSeriesInTable(dataSeries);
seasonAverageElm.innerHTML = String(getSeasonAverage(dataSeries));

function renderSeriesInTable(series) {
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");

        trElement.innerHTML =
            "<td class='bold-id'>" + serie.id + "</td>" +
            "<td class='text-primary'>" + serie.name + "</td>" +
            "<td>" + serie.channel + "</td>" +
            "<td>" + serie.seasons + "</td>";

        trElement.onclick = function () {
            showSerieDetail(serie);
        };

        seriesTbody.appendChild(trElement);
    });
}

function getTotalSeasons(series) {
    var total = 0;
    series.forEach(function (serie) {
        total += serie.seasons;
    });
    return total;
}

function getSeasonAverage(series) {
    return Math.round(getTotalSeasons(series) / series.length);
}

function showSerieDetail(serie) {

    var image = "";
    var description = "";
    var link = "";

    if (serie.id == 1){
        image = "bad.jpg";
        description = "Set in Albuquerque, New Mexico, the series follows Walter White, a struggling high school chemistry teacher diagnosed with lung cancer who turns to making methamphetamine to secure his family’s future.";
        link = "https://www.amc.com/shows/breaking-bad";
    }

    if (serie.id == 2){
        image = "orange.jpg";
        description = "A woman is sent to prison for a past crime, where she navigates life behind bars while interacting with inmates from diverse backgrounds and stories.";
        link = "https://www.netflix.com/title/70242311";
    }

    if (serie.id == 3){
        image = "games.jpg";
        description = "In a medieval fantasy world, noble families fight for control of the Iron Throne while an ancient supernatural threat rises in the north.";
        link = "https://www.hbo.com/game-of-thrones";
    }

    if (serie.id == 4){
        image = "big.webp";
        description = "A group of brilliant but socially awkward scientists deal with everyday life and relationships, especially when a free-spirited neighbor enters their world.";
        link = "https://www.cbs.com/shows/big_bang_theory/";
    }

    if (serie.id == 5){
        image = "sherlock.jpg";
        description = "A brilliant and eccentric detective solves complex crimes in modern-day London with the help of his loyal companion, using sharp observation and deduction.";
        link = "https://www.bbc.co.uk/programmes/b018ttws";
    }

    if (serie.id == 6){
        image = "very.jpg";
        description = "A British politician’s career is threatened when a secret from his past resurfaces, leading to a shocking political and legal scandal.";
        link = "https://www.bbc.co.uk/programmes/p065smy4";
    }

    serieDetail.innerHTML =
        '<div class="card" style="width: 18rem;">' +
        '<img class="card-img-top" src="./' + image + '">' +
        '<div class="card-body">' +
        '<h5 class="card-title">' + serie.name + '</h5>' +
        '<p class="card-text">' + description + '</p>' +
        '<a href="' + link + '" target="_blank">' + link + '</a>' +
        '</div>' +
        '</div>';
}