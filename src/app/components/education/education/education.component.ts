import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-education',
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent implements OnInit {
  edu = 'education';
  jur = 'journey';

  educations = [
    {
      degree: 'BCOMCA (Computer Application)',
      school: 'The American College, Madurai',
      year: '2021 – 2024',
      icon: 'fa-graduation-cap',
      color: '#6c63ff'
    },
    {
      degree: 'Higher Secondary (HSC)',
      school: 'Madurai',
      year: '2020 – 2021',
      icon: 'fa-school',
      color: '#DD0031'
    },
  ];

  ngOnInit(): void {
    AOS.refresh();
  }
}