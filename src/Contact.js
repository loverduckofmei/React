import React, { Component } from 'react';
import ContactInfo from './ContactInfo';
import ContactDetail from './ContactDetail';
import ContactCreate from './ContactCreate';
import update from 'react-addons-update';


export default class Contact extends Component{
  constructor(props){ //생성자 부분이 수정될때에는 자동 업데이트가 되지 않기 때문에 F5를 눌러 새로고침 해주어야 한다.
    super(props);
    this.state={
        selectedKey : -1,
        keyword : '',
        contactData : [
            {name: 'Mei', phone : '010-0000-0001'},
            {name: 'Abet', phone : '010-0000-0002'},
            {name: 'Kim', phone : '010-0000-0003'},
            {name: 'David', phone : '010-0000-0004'}
        ]
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    
    this.handleCreate = this.handleCreate.bind(this); //추가
    this.handleRemove = this.handleRemove.bind(this); //삭제
    this.handleModify = this.handleModify.bind(this); //수정


  }
  handleChange(e){
    this.setState({
        keyword: e.target.value
    });
  }

  handleClick(key){
    this.setState({
        selectedKey : key
    });
    console.log(key,'is selected');
  }

  handleCreate(contact){
    this.setState({
        contactData: update(this.state.contactData, {$push: [contact]})
    });
  }
  handleRemove(){
    if(this.state.selectedKey < 0){
        return;
    }
    this.setState({
        contactData: update(this.state.contactData, {$splice: [[this.state.selectedKey,1]]}), selectedKey : -1
    });
  }
  handleModify(name, phone){
    this.setState({
        contactData: update(this.state.contactData, {
            [this.state.selectedKey]: {
                name: { $set: name},
                phone: { $set: phone}
            }
        })
    });
  }

  render(){
    const mapToComponent = (data) =>{ // data = contactData 배열을 갖고옴
        data.sort();
        data = data.filter(
            (contact) => {
                return contact.name.toLowerCase().indexOf(this.state.keyword.toLowerCase()) > -1;
            }
        )
        return data.map((contact,i) =>{ // data 배열안의 있는 각 요소들을 index표시하며 받아옴
            //Callback (data 배열의 각 data 받아오기(CurrentValue) , data의 index 받아오기(index))
            // 이벤트들은 Component 에는 적용되지 않는다 props로 전달되기 때문  
            return (<ContactInfo contact = {contact} key= {i} onClick={() => this.handleClick(i) } />); // key 사용 이유 각각의 요소들이 추가,변경되었는지 알기위해 사용 
        // {contact} = data 배열의 각 요소
        })
    };
    return(
      <div>
        <h1>Contacts</h1>
        <input name="keyword" placeholder="Search" value={this.state.keyword} onChange={this.handleChange}></input> 
        <div>{mapToComponent(this.state.contactData)}</div>
        <ContactDetail 
            isSelected= {this.state.selectedKey !== -1}
            contact ={this.state.contactData[this.state.selectedKey]}
            onRemove = {this.handleRemove}
            onModify = {this.handleModify}
        />
        <ContactCreate onCreate ={this.handleCreate}/>
      </div>
    );
  }
}