import React from 'react';
import { Form, Button, Modal } from 'react-bootstrap'
import MyForm from './MyForm';

class Edit extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="Edit" >
            <MyForm
                show={this.props.show}
                showFunc={this.props.showFunc}
            ></MyForm>
        </div >
    }
}

export default Edit;
