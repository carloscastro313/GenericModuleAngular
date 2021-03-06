import { ListDGenerate } from './ListDGenerate';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-generic-dynamic-list',
  templateUrl: './generic-dynamic-list.component.html',
  styleUrls: ['./generic-dynamic-list.component.scss']
})
export class GenericDynamicListComponent implements OnInit {

  @ViewChild('paginator') paginator: MatPaginator;

  @Input()listado
  @Input()listGenerate : ListDGenerate
  @Output()retorno : any = new EventEmitter<any>()

  page_size: number = 3
  page_number: number = 1
  page_SizeOptions: number[] = [3,4,6,8]

  constructor() {
  }

  ngOnInit(): void {
  }

  handlePage(e: PageEvent){
    this.page_size = e.pageSize
    this.page_number = e.pageIndex + 1
  }

  retornador(element : any, option: string){
    this.paginator.firstPage()
    this.page_number
    this.retorno.emit({retorno: element, option: option})
  }
}
