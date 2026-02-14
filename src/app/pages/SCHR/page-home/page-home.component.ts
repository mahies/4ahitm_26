import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {Person, STUDENTS} from '../../../model/person';
import { OrderByPipe } from '../../../pipes/orderBy.pipe';
import {NgFor} from '@angular/common';

@Component({
  selector: 'app-page-home',
  imports: [RouterLink,RouterLinkActive,NgFor,OrderByPipe],
  templateUrl: './page-home.component.html',
  styleUrl: './page-home.component.scss',
  standalone: true
})
export class PageHomeComponent {
  title = '4ahitm';

  students: Person[] = STUDENTS; //Variable students vom Typ array of Person = KONSTANTE
}
