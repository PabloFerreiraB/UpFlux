import { NgModule } from '@angular/core';
import { Storage } from './storage';
import { LocalStorageService } from './services/local-storage.service';

@NgModule({
  providers: [
    LocalStorageService,
    {
      provide: Storage,
      useClass: LocalStorageService,
    },
  ],
})
export class StorageModule {}
