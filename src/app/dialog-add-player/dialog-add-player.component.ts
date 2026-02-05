import { Component, viewChildren } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-dialog-add-player',
  imports: [MatDialogModule, MatFormFieldModule, FormsModule, MatInputModule],
  templateUrl: './dialog-add-player.component.html',
  styleUrl: './dialog-add-player.component.scss'
})
export class DialogAddPlayerComponent {
  name: string = '';

  onNoClick(): void {
    // Close the dialog without doing anything
  }

  addPlayer(): void {
    // Logic to add the player
  }
}
