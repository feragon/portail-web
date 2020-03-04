import { Component, OnInit } from '@angular/core';
import {UserService} from '../../user.service';

@Component({
  selector: 'app-trombinoscope',
  templateUrl: './trombinoscope.component.html',
  styleUrls: ['./trombinoscope.component.css']
})

export class TrombinoscopeComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() { }
}
