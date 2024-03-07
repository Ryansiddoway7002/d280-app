import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-world-app',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.css'],
  standalone: true
})
export class WorldComponent implements OnInit{

  constructor (private apiService:ApiService) {}

  ngOnInit(): void {
    let svgPaths = document.querySelectorAll<SVGPathElement>('path');
    svgPaths.forEach(svgCountry => {

      svgCountry.addEventListener('mouseover', event => {
        const path = event.target as SVGPathElement;
        if (path) {
          path.style.fill = 'red';
          this.apiService.getCountryData(svgCountry)
        }
      });
    
      svgCountry.addEventListener('mouseleave', event => {
        const path = event.target as SVGPathElement;
        if (path) {
          path.style.fill = '';
        }
      });
    });
  }

  
}