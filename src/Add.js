import React from 'react';
import { Form, Button, Modal } from 'react-bootstrap'
import MyForm from './MyForm';

class Add extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "myemail@gmail.com",
            name: "katherine"
        };
    }

    render() {
        return <div className="Add" >
            <MyForm
                show={this.props.show}
                showFunc={this.props.showFunc}
                email={this.state.email}
                name={this.state.name}
            ></MyForm>
        </div >
    }
}

export default Add;
