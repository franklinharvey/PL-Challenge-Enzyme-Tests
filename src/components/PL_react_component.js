import React from 'react';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      data: [
        {
          "type": "case",
          "title": "9th Street",
          "id": "a0445e60-428b-44aa-a1a4-c7a750da9e8d"
        },
        {
          "type": "case",
          "title": "Central Perk Case",
          "id": "f673e7fe-e93f-47ad-9044-9c901455a436"
        },
        {
          "type": "phone_number",
          "title": "John Smith",
          "id": "470ec15f-2dac-417d-815b-52cd621d8437"
        },
        {
          "type": "phone_number",
          "title": "Jane Smith",
          "id": "f4cf5a20-0ef3-4a84-9bee-394f510e1629"
        },
        {
          "type": "case",
          "title": "Local PD",
          "id": "c9828623-f664-47b5-bdea-d6658f287fc5"
        },
          {
          "type": "case",
          "title": "Local TF",
          "id": "876490b5-b23b-4fbd-a9b8-e781406bf7b8"
        },
        {
          "type": "case",
          "title": "MCDA",
          "id": "b3d8a058-b980-4d92-841f-9994a346676d"
        },
        {
          "type": "case",
          "title": "DGTF",
          "id": "42036cb2-2689-4e02-b4bd-c23ca8da72fe"
        },
        {
          "type": "phone_number",
          "title": "Jim Smith",
          "id": "f5abd74d-1a6c-4d0d-a9db-fd516b8d964c"
        },
        {
          "type": "case",
          "title": "Main Street",
          "id": "f631759c-45c7-4ee5-be3a-f52ccee9a920"
        }
      ]
    }
    this.delete = this.delete.bind(this);
  }

   delete(id){
    this.setState(prevState => ({
      data: prevState.data.filter(el => el !== id )
    }));
   }

   render(){
    return(
      <PL_List delete={this.delete} data={this.state.data}/>
    );
   }
}

class PL_List extends React.Component{
  constructor(props) {
    super(props);
    this.state = {isEmpty: this.props.data.length > 0};
  }

  formatTypeText(str) {
    // reference for title case: https://stackoverflow.com/questions/196972/convert-string-to-title-case-with-javascript
    str = str.replace(/_/g, " ");
    str = str.replace(/-/g, " ");
    return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
  }

  sortList(data) {
    return data.sort(function(a, b){
      if(a.title.toLowerCase() < b.title.toLowerCase()) return -1;
      if(a.title.toLowerCase() > b.title.toLowerCase()) return 1;
      return 0;
    })
  }

   delete(id){
     // reference https://stackoverflow.com/questions/43230622/reactjs-how-to-delete-item-from-list
     this.props.delete(id);
     this.setState((state, props) => ({isEmpty: props.data.length > 0}));
   }

   render(){
     const isEmpty = this.state.isEmpty;

     if (isEmpty) {
       return(
          <ul className="list-group">
            {
             this.sortList(this.props.data).map(el=>
               <li key={el.id} className="list-group-item listItem">
                 <h3>{el.title}</h3>
                 <span>{this.formatTypeText(el.type)}</span>
                 <hr/>
                 <button onClick={this.delete.bind(this, el)} type="button" className="btn btn-danger">REMOVE</button>
               </li>
             )
            }
          </ul>
       );
    } else {
      return(
        <ul className="text-muted text-center">Empty</ul>
      );
    }
   }
}

export {PL_List};
export default App;
