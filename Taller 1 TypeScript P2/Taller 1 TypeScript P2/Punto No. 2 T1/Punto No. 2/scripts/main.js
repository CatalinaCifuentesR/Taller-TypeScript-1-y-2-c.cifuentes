import { dataSeries } from './dataSeries.js';

var seriesTbody = document.getElementById('series');
var seasonAverageElm = document.getElementById("season-average");

renderSeriesInTable(dataSeries);
seasonAverageElm.innerHTML = String(getSeasonAverage(dataSeries));

function renderSeriesInTable(series) {
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML =
            "<td>" + serie.id + "</td>" +
            "<td class='text-primary'>" + serie.name + "</td>" +
            "<td>" + serie.channel + "</td>" +
            "<td>" + serie.seasons + "</td>";
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
    if (series.length === 0) return 0;
    return Math.round(getTotalSeasons(series) / series.length);
}