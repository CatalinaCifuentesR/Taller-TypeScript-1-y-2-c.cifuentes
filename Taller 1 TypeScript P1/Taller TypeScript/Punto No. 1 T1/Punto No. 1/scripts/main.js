import { dataSeries } from './dataSeries.js';
var seriesTbody = document.getElementById('series');
var totalSeasonsElm = document.getElementById("total-seasons");
renderSeriesInTable(dataSeries);
totalSeasonsElm.innerHTML = String(getTotalSeasons(dataSeries));
function renderSeriesInTable(series) {
    console.log('Desplegando series');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML =
            "<td>".concat(serie.id.toString(), "</td>") +
                "<td class=\"text-primary\">".concat(serie.name, "</td>") +
                "<td>".concat(serie.channel, "</td>") +
                "<td>".concat(serie.seasons.toString(), "</td>");
        seriesTbody.appendChild(trElement);
    });
}
function getTotalSeasons(series) {
    var totalSeasons = 0;
    series.forEach(function (serie) {
        totalSeasons = totalSeasons + serie.seasons;
    });
    return totalSeasons;
}
