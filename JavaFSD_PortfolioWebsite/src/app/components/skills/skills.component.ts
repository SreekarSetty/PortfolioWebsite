import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  skillCategories = [
    {
      title: 'Backend',
      skills: [
        { name: 'Java', level: 95 },
        { name: 'Spring Boot', level: 95 },
        { name: 'Spring MVC', level: 90 },
        { name: 'Hibernate', level: 90 },
        { name: 'REST APIs', level: 95 },
        { name: 'GraphQL', level: 80 }
      ]
    },
    {
      title: 'Frontend',
      skills: [
        { name: 'Angular', level: 92 },
        { name: 'TypeScript', level: 90 },
        { name: 'JavaScript', level: 90 },
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 90 },
        { name: 'Bootstrap', level: 88 }
      ]
    },
    {
      title: 'Cloud & DevOps',
      skills: [
        { name: 'Azure', level: 90 },
        { name: 'AWS', level: 88 },
        { name: 'Docker', level: 90 },
        { name: 'Kubernetes', level: 85 },
        { name: 'Jenkins', level: 88 },
        { name: 'Terraform', level: 75 }
      ]
    },
    {
      title: 'Databases',
      skills: [
        { name: 'Oracle', level: 90 },
        { name: 'PostgreSQL', level: 90 },
        { name: 'MySQL', level: 88 },
        { name: 'MongoDB', level: 85 },
        { name: 'Redis', level: 82 },
        { name: 'Elasticsearch', level: 80 }
      ]
    }
  ];

}