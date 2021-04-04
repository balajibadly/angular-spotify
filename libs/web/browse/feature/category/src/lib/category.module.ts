import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { RouterModule } from '@angular/router';
import { SpinnerModule } from '@angular-spotify/web/shared/ui/spinner';
import { PlaylistListModule } from '@angular-spotify/web/shared/ui/playlist-list';
@NgModule({
  imports: [
    CommonModule,
    SpinnerModule,
    PlaylistListModule,
    RouterModule.forChild([
      {
        path: '',
        component: CategoryComponent
      }
    ])
  ],
  declarations: [CategoryComponent],
  exports: [CategoryComponent]
})
export class BrowseCategoryModule {}
