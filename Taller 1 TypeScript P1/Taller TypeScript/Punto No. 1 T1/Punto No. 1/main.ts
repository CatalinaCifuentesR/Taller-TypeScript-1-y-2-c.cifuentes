import { dataSeries } from './dataSeries.js';
import { Serie } from './serie.js';

var seriesTbody = document.getElementById('series') as HTMLElement;
var totalSeasonsElm = document.getElementById("total-seasons") as HTMLElement;

renderSeriesInTable(dataSeries);
totalSeasonsElm.innerHTML = String(getTotalSeasons(dataSeries));

function renderSeriesInTable(series: Serie[]): void {
    console.log('Desplegando series');

    series.forEach(function (serie: Serie) {
        var trElement = document.createElement("tr");

        trElement.innerHTML =
            "<td>".concat(serie.id.toString(), "</td>") +
            "<td class=\"text-primary\">".concat(serie.name, "</td>") +
            "<td>".concat(serie.channel, "</td>") +
            "<td>".concat(serie.seasons.toString(), "</td>");

        seriesTbody.appendChild(trElement);
    });
}

function getTotalSeasons(series: Serie[]): number {
    var totalSeasons = 0;

    series.forEach(function (serie: Serie) {
        totalSeasons = totalSeasons + serie.seasons;
    });

    return totalSeasons;
}