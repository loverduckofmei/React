import React, { Component } from 'react';


export default class ContactDetail extends Component{
    constructor(props){
        super(props);
        this.state = {
            isModify : false,
            name: '',
            phone: ''
        };
        this.handleToggle = this.handleToggle.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleModify = this.handleModify.bind(this);
    }
    handleToggle(){
        if(!this.state.isModify){
            this.setState({
                name : this.props.contact.name,
                phone : this.props.contact.phone
            });
        }else{
            this.handleModify();
        }
        this.setState({ // 비동기 실행되기 전에 반환한다.
           isModify : !this.state.isModify 
        });
    };
    handleChange(e){
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState)
    };
    handleModify(){
        this.props.onModify(this.state.name, this.state.phone);
    }
    render(){
        const details = (
            <div>
                <p>{this.props.contact.name}</p>
                <p>{this.props.contact.phone}</p>
            </div>
        );
        const modify = (
            <div>
                <p><input type="text" name="name" placeholder="name" value={this.state.name} onChange={this.handleChange}/></p>
                <p><input type="text" name="phone" placeholder="phone" value={this.state.phone} onChange={this.handleChange}/></p>
            </div>
        );
        const view = this.state.isModify ? modify : details;
        const blank = (<div>Not Selected</div>);
        return (
            <div>
                <h2>Details</h2>
                {this.props.isSelected ? view : blank}
                <p>
                    <button onClick={this.handleToggle}>
                        {this.state.isModify ? 'OK' : 'Modify'}
                    </button>
                    <button onClick={this.props.onRemove}>Remove</button>
                </p>
            </div>

        );
    }
}
ContactDetail.defaultProps = {
    contact : {
        name: '',
        phone: ''
    },
    onRemove : () =>{ console.error('onRemove is not defined');},
    onModify : () =>{ console.error('onModify is not defined');}
};