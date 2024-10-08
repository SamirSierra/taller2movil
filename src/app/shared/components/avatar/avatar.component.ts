import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { StorageService } from '../../services/storage.service';
import { LoadingService } from '../../Controllers/loading/loading.service';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent  {
  protected image = "https://ionicframework.com/docs/img/demos/avatar.svg";
  @Input() control = new FormControl();
  @Input() onlyView = false;

  protected mimeType = "image/jpeg";

  constructor(private readonly StorageSrv: StorageService, private readonly Loadingsrv: LoadingService) { }

 

  public async uploadFile(event: any) {
    try {
      await this.Loadingsrv.show();
      console.log(event.target.files[0]);
      const url = await this.StorageSrv.UploadFileAndGetUrl(event.target.files[0]);
      this.control.setValue(url);
      await this.Loadingsrv.Dismiss();
    } catch (error) {
      await this.Loadingsrv.Dismiss();
      console.error(error);
    }
  }

}
