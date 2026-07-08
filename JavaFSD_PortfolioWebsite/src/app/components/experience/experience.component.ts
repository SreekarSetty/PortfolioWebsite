import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {

  experiences = [
    {
      company: 'AT&T',
      role: 'Senior Java Full Stack Developer',
      duration: 'Feb 2024 - Present',
      description: [
        'Developed scalable microservices using Java 17 and Spring Boot.',
        'Built responsive Angular applications with reusable components.',
        'Implemented Kafka-based event-driven architecture.',
        'Deployed applications on Azure using CI/CD pipelines.',
        'Worked with Oracle, PostgreSQL, and MongoDB.',
        'Integrated REST APIs with enterprise applications.'
      ],
      technologies: [
        'Java',
        'Spring Boot',
        'Angular',
        'Kafka',
        'Azure',
        'Oracle',
        'PostgreSQL',
        'MongoDB'
      ]
    },
    {
      company: 'Temenos',
      role: 'Software Engineer',
      duration: 'Jan 2020 - Aug 2022',
      description: [
        'Developed enterprise banking applications using Java.',
        'Designed REST APIs and backend services.',
        'Optimized SQL queries for better performance.',
        'Worked with Agile Scrum teams.',
        'Participated in code reviews and production support.'
      ],
      technologies: [
        'Java',
        'Spring',
        'SQL',
        'Oracle',
        'Git',
        'Jenkins'
      ]
    }
  ];

}