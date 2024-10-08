import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor(private readonly LoadingCtr: LoadingController) { }

  public async show(){
    const loanding = await this.LoadingCtr.create({})
     await loanding.present();
  }
  public async Dismiss(){
    await this.LoadingCtr.dismiss();
  }
}
