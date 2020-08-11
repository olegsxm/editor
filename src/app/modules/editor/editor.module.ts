import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditorRoutingModule } from './editor-routing.module';
import { ContainerComponent } from './container/container.component';
import {DocumentEditorContainerAllModule, DocumentEditorModule} from '@syncfusion/ej2-angular-documenteditor';

@NgModule({
  declarations: [ContainerComponent],
  imports: [
    CommonModule,
    EditorRoutingModule,
    DocumentEditorModule,
    DocumentEditorContainerAllModule
  ]
})
export class EditorModule { }
