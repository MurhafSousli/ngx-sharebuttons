export class ShareButton{
  innerHtml: string;
  classes: string;
  link: any;
  windowAttr;
  constructor(link: any, classes?:string, innerHtml?:string, windowAttr?:any){
    this.link = link;
    this.classes = classes;
    this.innerHtml = innerHtml;
    this.windowAttr = windowAttr;
  }
  click(){
    window.open(this.link,'newwindow', this.windowAttr);
  }
}
