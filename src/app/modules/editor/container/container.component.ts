import {Component, OnInit, ChangeDetectionStrategy, ViewChild} from '@angular/core';
import { ToolbarService, DocumentEditorContainerComponent } from '@syncfusion/ej2-angular-documenteditor';
import {isNullOrUndefined} from 'util';
import {TitleBar} from '../title-bar';
import { defaultDocument, WEB_API_ACTION } from '../data';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  providers: [ToolbarService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContainerComponent implements OnInit {
  public hostUrl = 'https://ej2services.syncfusion.com/production/web-services/';
  @ViewChild('documenteditor_default')
  public container: DocumentEditorContainerComponent;
  public culture = 'en-US';
  titleBar: TitleBar;

  onCreate(): void {
    const titleBarElement: HTMLElement = document.getElementById('default_title_bar');
    this.titleBar = new TitleBar(titleBarElement, this.container.documentEditor, true);
    this.container.serviceUrl = this.hostUrl + WEB_API_ACTION;
    this.container.documentEditor.open(JSON.stringify(defaultDocument));
    this.container.documentEditor.documentName = 'Getting Started';
    this.titleBar.updateDocumentTitle();
  }

  onDocumentChange(): void {
    if (!isNullOrUndefined(this.titleBar)) {
      this.titleBar.updateDocumentTitle();
    }
    this.container.documentEditor.focusIn();
  }

  ngOnInit(): void {
  }
}
