import { Component } from '@angular/core';
import { Message } from '../message';

@Component({
  selector: 'app-messages',
  standalone: false,
  templateUrl: './messages.html',
  styleUrl: './messages.scss'
})
export class Messages {
  constructor (public messageService: Message) {}
}
