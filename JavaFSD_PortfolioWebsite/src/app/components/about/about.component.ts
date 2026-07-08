import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  stats = [
    {
      value: '6+',
      label: 'Years Experience'
    },
    {
      value: '25+',
      label: 'Projects Completed'
    },
    {
      value: '15+',
      label: 'Technologies'
    },
    {
      value: '100%',
      label: 'Commitment'
    }
  ];

}