import { FtextboxComponent } from './ftextbox/ftextbox.component';
import { FtextareaComponent } from './ftextarea/ftextarea.component';
import { FradioComponent } from './fradio/fradio.component';
import { FlistComponent } from './flist/flist.component';
import { FlabelComponent } from './flabel/flabel.component';
import { FdropdownComponent } from './fdropdown/fdropdown.component';
import { FcodeeditorComponent } from './fcodeeditor/fcodeeditor.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FbuttonComponent } from './fbutton/fbutton.component';
import { FcheckboxComponent} from './fcheckbox/fcheckbox.component';
import { FckeditorComponent } from './fckeditor/fckeditor.component';


@NgModule({
  declarations: [FbuttonComponent,
    FcheckboxComponent, FckeditorComponent,
    FcodeeditorComponent, FdropdownComponent,
    FlabelComponent, FlistComponent,
    FradioComponent, FtextareaComponent,
    FtextboxComponent],
  imports: [
    CommonModule
  ],
  exports: [FbuttonComponent,
    FcheckboxComponent, FckeditorComponent,
    FcodeeditorComponent, FdropdownComponent,
    FlabelComponent, FlistComponent,
    FradioComponent, FtextareaComponent,
    FtextboxComponent]
})
export class FormcontrolModule { }
