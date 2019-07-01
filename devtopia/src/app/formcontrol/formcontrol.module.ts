import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FbuttonComponent } from './fbutton/fbutton.component';
import { FlabelComponent } from './flabel/flabel.component';
import { FradioComponent } from './fradio/fradio.component';
import { FdropdownComponent } from './fdropdown/fdropdown.component';
import { FcheckboxComponent } from './fcheckbox/fcheckbox.component';
import { FlistComponent } from './flist/flist.component';
import { FtextboxComponent } from './ftextbox/ftextbox.component';
import { FtextareaComponent } from './ftextarea/ftextarea.component';
import { FckeditorComponent } from './fckeditor/fckeditor.component';
import { FcodeeditorComponent } from './fcodeeditor/fcodeeditor.component';

@NgModule({
  declarations: [FbuttonComponent, FlabelComponent, FradioComponent, FdropdownComponent, FcheckboxComponent, FlistComponent, FtextboxComponent, FtextareaComponent, FckeditorComponent, FcodeeditorComponent],
  imports: [
    CommonModule
  ],
  exports: [FbuttonComponent, FlabelComponent, FradioComponent, FdropdownComponent, FcheckboxComponent, FlistComponent, FtextboxComponent, FtextareaComponent, FckeditorComponent, FcodeeditorComponent]
})
export class FormcontrolModule { }
