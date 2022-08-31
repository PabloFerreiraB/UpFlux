import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeleteModalComponent } from './delete-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ButtonModule } from 'src/app/shared/components/button/button.module';

@NgModule({
  declarations: [DeleteModalComponent],
  imports: [CommonModule, MatDialogModule, MatButtonModule, ButtonModule],
  exports: [DeleteModalComponent],
})
export class DeleteModalModule {}
