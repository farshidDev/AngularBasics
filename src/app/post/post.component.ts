import { Component, Input, EventEmitter, Output, OnInit, OnChanges, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy  } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, 
        AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy  {

  // using alias -- not recommended
  @Input('img') postImg = '';

  @Input() postImgAlt = '';

  // custom events
  @Output() imgSelected = new EventEmitter<string>();

  constructor(){
    console.log('Constructor() called', this.postImg);
  }

  ngOnInit(){
    console.log('ngonInit() called', this.postImg);
  }

  ngOnChanges(){
    console.log('ngOnChanges() called');
  }

  ngDoCheck(){
    console.log('ngDoCheck() called');
  }

  ngAfterContentInit(): void { 
    console.log('ngAfterContentInit() called');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked() called');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit() called');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked() called');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy() called');
  }


}
