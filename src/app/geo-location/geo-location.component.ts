import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import 'mapbox-gl/dist/mapbox-gl.css';
import *as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-geo-location',
  templateUrl: './geo-location.component.html',
  styleUrls: ['./geo-location.component.css']
})
export class GeoLocationComponent implements OnInit {
  constructor(private http:HttpClient) { }
map:mapboxgl.Map

  ngOnInit(): void {
    this.map = new mapboxgl.Map({
      accessToken:environment.mapboxgl.accessToken,
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9 // starting zoom
      });
  }
  
  getLocation(){
    navigator.geolocation.getCurrentPosition(position=>{
      console.log(position);
      this.buildMap(position.coords.longitude,position.coords.latitude)
  })}

  buildMap(lng,lat){
 
    this.map = new mapboxgl.Map({
      accessToken:environment.mapboxgl.accessToken,
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: [lng, lat], // starting position [lng, lat]
      zoom: 15 // starting zoom
      });
       new mapboxgl.Marker()
      .setLngLat([lng, lat])
      .addTo(this.map);
  }

  


  }
