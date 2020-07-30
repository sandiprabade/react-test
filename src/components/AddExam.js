import React, { Component } from 'react';
import './AddExam.css';
import Exam from './Exam';
declare var $:any;

class AddExam extends Component{
    state = {
        toggle: false,
    }
    updateToggle = () =>{
        this.setState({toggle: !this.state.toggle});
    }
    addExam = (exam) => {
        this.props.addExam(exam);
        $("#exampleModalCenter").hide();
    }
    render(){
        return (
            <div>
                <button type="button" id="create-exam-btn" className="btn btn-primary form-control" data-toggle="modal" data-target="#exampleModalCenter">
                    Create Exam
                </button>
                <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">Enter exam details</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <Exam toggle={this.state.toggle} addExam={this.props.addExam}></Exam>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-success" onClick={this.updateToggle}>Add Exam</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default AddExam;