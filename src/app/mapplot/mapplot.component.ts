import { Component, OnInit } from '@angular/core';
import {Plotly} from "angular-plotly.js/lib/plotly.interface";
import {plot} from "plotly.js-dist";

Plotly.d3.csv('https://raw.githubusercontent.com/plotly/datasets/master/2011_us_ag_exports.csv', function(err, rows) {
  function unpack(rows, key) {
    return rows.map(function (row) {
      return row[key];
    });
  }

@Component({
  selector: 'app-mapplot',
  templateUrl: './mapplot.component.html',
  styleUrls: ['./mapplot.component.css']
})

export class MapplotComponent implements OnInit {
  public mapplot = {
    data = [{
      type: 'choropleth',
      locationmode: 'USA-states',
      locations: unpack(rows, 'code'),
      z: unpack(rows, 'total exports'),
      text: unpack(rows, 'state'),
      zmin: 0,
      zmax: 17000,
      colorscale: [
        [0, 'rgb(242,240,247)'], [0.2, 'rgb(218,218,235)'],
        [0.4, 'rgb(188,189,220)'], [0.6, 'rgb(158,154,200)'],
        [0.8, 'rgb(117,107,177)'], [1, 'rgb(84,39,143)']
      ],
      colorbar: {
        title: 'Millions USD',
        thickness: 0.2
      },
      marker: {
        line: {
          color: 'rgb(255,255,255)',
          width: 2
        }
      }
    }],
    layout = [{
      title: '2011 US Agriculture Exports by State',
      geo: {
        scope: 'usa',
        showlakes: true,
        lakecolor: 'rgb(255,255,255)'
      }
    }],
    Plotly.plot(myDiv, data, layout, {showLink: false});
  };

  constructor() {
  }

  ngOnInit(): void {
  }
});
