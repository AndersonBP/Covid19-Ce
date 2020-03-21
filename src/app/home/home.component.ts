import { AfterViewInit, Component } from "@angular/core";
import { defaults as defaultControls } from "ol/control";

import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import XYZ from "ol/source/XYZ";
import ZoomToExtent from "ol/control/ZoomToExtent";
import * as olProj from "ol/proj";
import { Feature } from "ol";
import Point from "ol/geom/Point";
import { Icon, Style, Stroke, Text, Fill } from "ol/style";
import VectorSource from "ol/source/Vector";
import VectorLayer from "ol/layer/Vector";
import IconAnchorUnits from "ol/style/IconAnchorUnits";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements AfterViewInit {
  map: Map;
  vectorSource: any;
  vectorLayer: any;
  casos: { Nome: string; Coordenadas: number[]; Total: number }[] = [
    { Nome: "Fortaleza", Total: 63, Coordenadas: [-38.532846, -3.776984] },
    { Nome: "Aquiraz", Total: 1, Coordenadas: [-38.392024, -3.91484] },
    { Nome: "Fortim", Total: 1, Coordenadas: [-38.0072816, -4.4628603] },
    {
      Nome: "Juazeiro do Norte",
      Total: 1,
      Coordenadas: [-39.321005, -7.231749]
    },
    { Nome: "Sobral", Total: 1, Coordenadas: [-40.8384533, -3.8579345] }
  ];

  ngAfterViewInit() {
    // this.map.setTarget('map');
    this.vectorSource = new VectorSource();

    this.vectorLayer = new VectorLayer({
      source: this.vectorSource
    });
    this.map = new Map({
      target: "map",
      layers: [
        new TileLayer({
          source: new XYZ({
            url: "https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          })
        }),
        this.vectorLayer
      ],
      view: new View({
        center: olProj.fromLonLat([-38.563203, -3.834106]),
        zoom: 7
      }),
      controls: defaultControls().extend([
        new ZoomToExtent({
          extent: [
            813079.7791264898,
            5929220.284081122,
            848966.9639063801,
            5936863.986909639
          ]
        })
      ])
    });
    this.casos.forEach(el => {
      this._createMarker(el);
    });
  }

  private _createMarker(pt: any) {
    const point = new Feature({
      geometry: new Point(olProj.fromLonLat(pt.Coordenadas)),
      name: JSON.stringify(pt)
    });

    let iconStyles = [
      // new Style({
      //   image: new Icon({
      //     size: [100, 100],
      //     anchor: [0.75, 0.5],
      //     anchorXUnits: IconAnchorUnits.FRACTION,
      //     anchorYUnits: IconAnchorUnits.PIXELS,
      //     src: "../../assets/imgs/pin.png"
      //   })
      // }),
      new Style({
        text: new Text({
          text: `${pt.Nome} - ${pt.Total.toString()}`,
          offsetY: 1,
          fill: new Fill({
            color: "#eb4634"
          }),
          stroke: new Stroke({
            color: "#ebae34",
            width: 1.0
          })
        })
      })
    ];
    point.setStyle(iconStyles);
    this.vectorSource.addFeature(point);
  }
}
