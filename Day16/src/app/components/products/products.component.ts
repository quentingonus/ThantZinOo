import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public dataSource: any;
  public displayedColumns = ['hash', 'image', 'name', 'price', 'rating'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('matsorter') matsorter!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.matsorter;
  }

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((response: any) => {
      this.dataSource = new MatTableDataSource(response.products)
    });
    this.dataSource.filterPredicate = function (record: any, filter: string) {
      return record.title.toLocaleLowerCase().includes(filter.toLocaleLowerCase());
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
