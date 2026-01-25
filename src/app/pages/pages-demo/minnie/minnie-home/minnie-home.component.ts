import { Component } from '@angular/core';
import {Person, MINNIE} from '../../../../model/person';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-minnie-home',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './minnie-home.component.html',
  styleUrl: './minnie-home.component.scss',
  standalone: true
})
export class MinnieHomeComponent {
  me: Person = MINNIE; //Variable me vom Typ Person = KONSTANTE MINNIE
}
