import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-ui',
  templateUrl: './basic-ui.component.html',
  styleUrls: ['./basic-ui.component.css']
})
export class BasicUiComponent implements OnInit {
  current = 80;
  progress = 0;
  constructor() { }
  progressBar = document.querySelector('.progress-bar');
  intervalId;

  ngOnInit() {
    const getDownloadProgress = () => {
      // console.log('getDownload', this);
      if (this.progress <= 99) {
        // console.log('inside if', this.progress);
        this.progress = this.progress + 1;
      }
      else {
        clearInterval(this.intervalId);
      }
    }
    this.intervalId = setInterval(getDownloadProgress, 1000);
  }
    public picked(event) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file: File = fileList[0];
        this.handleInputChange(file); //turn into base64
    }
    else {
      alert("No file selected");
    }
  }

  handleInputChange(files) {
    var pattern = /image-*/;
    var reader = new FileReader();
    if (!files.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader.onloadend = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(files);
  }
  _handleReaderLoaded(e) {
    // let reader = e.target;
    // var base64result = 'data:image/png;base64, '+reader.result.substr(reader.result.indexOf(',') + 1);
    document.getElementById('image').setAttribute( 'src', e.target.result);
  }
  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
  doSomethingWithCurrentValue(event){
    console.log(event)
  }

}
