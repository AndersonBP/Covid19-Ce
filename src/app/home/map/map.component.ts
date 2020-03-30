import {
  AfterViewInit,
  Component,
  Input,
  ViewChild,
  ElementRef
} from "@angular/core";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import * as olProj from "ol/proj";
import { Feature } from "ol";
import { Style, Stroke, Text, Fill } from "ol/style";
import VectorSource from "ol/source/Vector";
import VectorLayer from "ol/layer/Vector";
import { defaults } from "ol/interaction";
import Circle from "ol/geom/Circle";
import { Coordinate } from "ol/coordinate";
import Polygon from "ol/geom/Polygon";
import LineString from "ol/geom/LineString";

import { BairroAfetadoModel } from "./../../core/services/api/models/bairroAfetado.model";
import { BoletimModel } from "src/app/core/services/api/models/boletim.model";
import TileImage from "ol/source/TileImage";
import { BoletimService } from "src/app/core/services/api/boletim.service";
import { BairrosService } from "src/app/core/services/api/bairros.service";
import { TotalModel } from "src/app/core/services/api/models/total.model";
@Component({
  selector: "home-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.css"]
})
export class MapComponent implements AfterViewInit {
  @Input() bairrosAfetados: BairroAfetadoModel[] = [];
  @Input() boletim = new BoletimModel();
  @Input() casosCidades: any[];
  @Input() dashOpen = false;
  @ViewChild("map", { static: true }) private mapVC: ElementRef;
  map: Map;
  vectorSource: VectorSource;
  vectorLayer: VectorLayer;

  constructor(
    private boletimService: BoletimService,
    private bairrosService: BairrosService
  ) {}

  ngAfterViewInit() {
    this.vectorSource = new VectorSource();
    this.vectorLayer = new VectorLayer({
      source: this.vectorSource
    });
    this.map = new Map({
      interactions: defaults({
        onFocusOnly: true
      }),
      target: "map",
      layers: [
        new TileLayer({
          visible: true,
          source: new TileImage({
            url:
              "https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2ZvcnRkZXZlbG9wZXIiLCJhIjoiY2poZHgwNGhwMGo5MDMwbzdjMTc3eDRiaiJ9.P6jtKCrEbI5MqimmQI-oJg"
          })
        }),
        this.vectorLayer
      ],
      view: new View({
        center: olProj.fromLonLat([-38.563203, -3.834106]),
        zoom: 10,
        minZoom: 7
      })
    });

    this.boletimService.getTotalCidades().subscribe(res => {
      this.casosCidades = res.Data.map(el => el.Resumido);
      res.Data.forEach((el: TotalModel) => {
        if (el.Polygon.length > 0) {
          this._createPolygon(
            el.Polygon,
            "2",
            "rgba(255,100,50,0.3)",
            new Text({
              font: "Normal 15px Arial",
              textAlign: "center",
              textBaseline: "middle",
              text: `${
                el.Resumido.Cidade
              } - ${el.Resumido.Infectados.toString()}`,
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
          );
        } else {
            this._createCircle(el.Resumido);
        }
      });
      this.mapVC.nativeElement.click();
      this.mapVC.nativeElement.focus();
      this.bairrosService.getAfetados().subscribe(res => {
        this.bairrosAfetados = res.Data;
        this.bairrosAfetados
          .map(el => el.coordenadas.map(y => [y.longitude, y.latitude]))
          .forEach(el =>
            this._createPolygon(el, "2", "rgba(255, 243, 79,0.5)")
          );
      });
    });
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
        text: `${pt.Cidade} - ${pt.Infectados.toString()}`,
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

    setTimeout(() => {
      this.map.updateSize();
    }, 300);
  }

  private _createPolygon(
    coords: any[],
    type: any,
    color: any,
    text: any = null
  ) {
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
          width: 3
        }),
        text: text
      })
    );
    this.vectorSource.addFeatures([feature]);
    // const layer = new VectorLayer({
    //   source: new VectorSource({
    //     features: [feature]
    //   })
    // }) ;
    // this.map.addLayer(layer);
  }
}
