import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

class Person {
  id: number;
  firstName: string;
  lastName: string;
}

class DataTablesResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

@Component({
  selector: 'app-datatable-example',
  templateUrl: './datatable-example.component.html',
  styleUrls: ['./datatable-example.component.css']
})
export class DatatableExampleComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  persons: Person[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const that = this;

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      serverSide: true,
      processing: true,
      language: {
        "infoFiltered": ""
      },

      ajax: (dataTablesParameters: any, callback) => {
        console.log(dataTablesParameters);
        dataTablesParameters.inciendtID = 'INC-000002';
      
        that.http
          .post<DataTablesResponse>(
            'http://localhost/CodeIgniter/welcome/events/',
            dataTablesParameters            
          ).subscribe(resp => {
            that.persons = resp.data;
            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsFiltered,
              data: []
            });
          });
      },
      columns: [{ data: 'incident_id' }, { data: 'getway_title' }, { data: 'client_title' }]
    };
  }
}
