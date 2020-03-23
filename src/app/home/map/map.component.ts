import { BairroAfetadoModel } from "./../../core/services/api/models/bairroAfetado.model";
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
import { AfterViewInit, Component, Input } from "@angular/core";
import OSM from "ol/source/OSM";
import { focus } from "ol/events/condition";
import { MouseWheelZoom, defaults, DragPan } from "ol/interaction";
import Circle from "ol/geom/Circle";
import CircleStyle from "ol/style/Circle";
import TileSource from "ol/source/Tile";
import TileImage from "ol/source/TileImage";
import { Coordinate } from "ol/coordinate";
import Polygon from "ol/geom/Polygon";
import LineString from "ol/geom/LineString";
@Component({
  selector: "home-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.css"]
})
export class MapComponent implements AfterViewInit {
  @Input() bairrosAfetados: BairroAfetadoModel[] = [];

  map: Map;
  vectorSource: any;
  vectorLayer: any;
  casos: { Nome: string; Coordenadas: number[]; Total: number }[] = [
    { Nome: "Fortaleza", Total: 116, Coordenadas: [-38.532846, -3.776984] },
    { Nome: "Aquiraz", Total: 5, Coordenadas: [-38.392024, -3.91484] },
    { Nome: "Fortim", Total: 1, Coordenadas: [-38.0072816, -4.4628603] },
    {
      Nome: "Juazeiro do Norte",
      Total: 1,
      Coordenadas: [-39.321005, -7.231749]
    },
    { Nome: "Sobral", Total: 1, Coordenadas: [-40.8384533, -3.8579345] }
  ];

  ngAfterViewInit() {
    this.vectorSource = new VectorSource();
    this.vectorLayer = new VectorLayer({
      source: this.vectorSource
    });
    this.map = new Map({
      interactions: defaults({
        onFocusOnly: false
      }),
      target: "map",
      layers: [
        new TileLayer({
          source: new OSM()
        }),
        this.vectorLayer
      ],
      view: new View({
        center: olProj.fromLonLat([-38.563203, -3.834106]),
        zoom: 10,
        minZoom: 6
      })
    });
    setTimeout(() => {
      this.casos.forEach(el => {
        this._createCircle(el);
      });
      this.bairrosAfetados
        .map(el => el.coordenadas.map(y => [y.longitude, y.latitude]))
        .forEach(el => this._createPolygon(el, "2", "rgba(255,100,50,0.5)"));
      // this._createPolygon(this.aldeota, "2", "rgba(255,100,50,0.5)");
    }, 3000);
  }

  private _createCircle(pt: any) {
    let myStlye = new Style({
      fill: new Fill({
        color: "rgba(255,100,50,0.5)"
      }),
      stroke: new Stroke({
        color: "#ff0000",
        width: 1
      }),
      text: new Text({
        font: "Normal 15px Arial",
        textAlign: "center",
        textBaseline: "middle",
        text: `${pt.Nome} - ${pt.Total.toString()}`,
        fill: new Fill({
          color: "#ffa500"
        }),
        stroke: new Stroke({
          color: "#000000",
          width: 3
        }),
        // offsetX: -45,
        rotation: 0
      })
    });

    let circleSource = new VectorSource();
    let circleLayer = new VectorLayer({
      style: myStlye,
      source: circleSource
    });
    this.map.addLayer(circleLayer);
    circleSource.addFeature(
      new Feature(new Circle(olProj.fromLonLat(pt.Coordenadas), 2000))
    );
  }

  private _createPolygon(coords: any[], type: any, color: any) {
    let polyCoords: Coordinate[] = [];

    polyCoords = coords.map(e =>
      olProj.transform(
        [parseFloat(e[0]), parseFloat(e[1])],
        "EPSG:4326",
        "EPSG:3857"
      )
    );

    let feature: any;
    if (type === "2") {
      feature = new Feature({
        geometry: new Polygon([polyCoords])
      });
    } else {
      feature = new Feature({
        geometry: new LineString(polyCoords)
      });
    }
    feature.setStyle(
      new Style({
        fill: new Fill({
          color: color
        }),
        stroke: new Stroke({
          color: color,
          width: 4
        })
      })
    );

    const layer = new VectorLayer({
      source: new VectorSource({
        features: [feature]
      })
    });
    this.map.addLayer(layer);
  }
}
