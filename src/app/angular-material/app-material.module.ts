import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
  ],
})
export class AppMaterialModule {}
