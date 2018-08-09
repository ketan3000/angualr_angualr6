import {Component} from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  name:string;
  fabricTypes = [
    {name: 'weave', selected: true},
    {name: 'leather', selected: true},
    {name: 'phur', selected: true}
  ];
  
  fabricColours = [
    {name: 'green', selected: true},
    {name: 'black', selected: true},
    {name: 'red', selected: true}
  ];
  
  fabrics = [
    {name: 'scottish tartan', type: 'weave', colour: 'red'},
    {name: 'irish tartan', type: 'weave', colour: 'green'},
    {name: 'bike jacket', type: 'leather', colour: 'black'},
    {name: 'something else', type: 'phur', colour: 'black'},
  ]
  
  constructor() {
    
  }
  
  get selectedFabricTypes() {
    return this.fabricTypes.reduce((types, type) => {
      if (type.selected) {
        types.push(type.name);
      }
      return types;
    }, [])
  }

  get selectedFabricColor() {
    return this.fabricColours.reduce((types, type) => {
     // alert(type.selected);
      if (type.selected) {
        types.push(type.name);
      }
      return types;
    }, [])
  }
}