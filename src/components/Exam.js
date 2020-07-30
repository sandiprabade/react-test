import React, { Component } from 'react';

export class Exam extends Component {
    
    state = {
        sub_code: '',
        subject: '',
        courses: '',
        dept: '',
        sem: '',
        date_time: '',
        no_of_hrs: '',
        action: '',
        status: '',
        error: false,
    };

    componentDidUpdate(prevProps, prevState){
        if(this.props.toggle !== prevProps.toggle){
            if(this.validate()){
                this.props.addExam(this.state);
                this.clearForm();
            }
        }
    }

    onChange = (event) => {
        event.persist();
        this.setState({[event.target.name]: event.target.value});
    }

    validate = () => {
        this.setState({error: true});
        if(this.state.sub_code.length === 0) return false;
        if(this.state.subject.length === 0) return false;
        if(this.state.courses.length === 0) return false;
        if(this.state.dept.length === 0) return false;
        if(this.state.sem.length === 0) return false;
        if(this.state.date_time.length === 0) return false;
        if(this.state.no_of_hrs.length === 0) return false;
        if(this.state.action.length === 0) return false;
        if(this.state.status.length === 0) return false;
        this.setState({error: false});
        return true;
    }

    clearForm = () => {
        this.setState(
            {
                sub_code: '',
                subject: '',
                courses: '',
                dept: '',
                sem: '',
                date_time: '',
                no_of_hrs: '',
                action: '',
                status: '',
            }
        );
        document.getElementById('exam-form').reset();
    }
    
    render() {
        return (
            <form id="exam-form">
                {this.state.error? (
                    <div className="alert alert-danger" role="alert">
                        All fields are required!
                    </div>
                ): null}
                {/* <label htmlFor="sub_code">Subject code</label> */}
                <div className="input-group mb-3">
                    <input type="text" className="form-control" name="sub_code" placeholder="Subject Code" value={this.state.sub_code} onChange={this.onChange}/>
                </div>
                <div className="input-group mb-3">
                {/* <label htmlFor="subject">Subject</label> */}
                <input type="text" className="form-control" name="subject" placeholder="Subject" value={this.state.subject} onChange={this.onChange}/>
                </div>
                <div className="input-group mb-3">
                {/* <label htmlFor="courses">Courses</label> */}
                <input type="text" className="form-control" name="courses" placeholder="Courses" value={this.state.courses} onChange={this.onChange}/>
                </div>
                <div className="input-group mb-3">
                {/* <label htmlFor="dept">Department</label> */}
                <div className="input-group-prepend">
                    <label className="input-group-text">Department</label>
                </div>
                <select className="custom-select" name="dept" onChange={this.onChange}>
                    <option selected>Choose...</option>
                    <option value="IT">IT</option>
                    <option value="CS">CS</option>
                    <option value="EXTC">EXTC</option>
                    <option value="Mechanical">Mechanical</option>
                    <option value="Civil">Civil</option>
                </select>
                </div>
                <div className="input-group mb-3">
                {/* <label htmlFor="sem">Semester</label> */}
                <div className="input-group-prepend">
                    <label className="input-group-text">Semester</label>
                </div>
                <select className="custom-select" name="sem" onChange={this.onChange}>
                    <option selected>Choose...</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                </select>
                </div>
                <div className="input-group mb-3">
                {/* <label htmlFor="date_time">Date and Time</label> */}
                <div className="input-group-prepend">
                    <label className="input-group-text">Date</label>
                    <input type="date" name="date_time" onChange={this.onChange}/>
                </div>
                </div>
                <div className="input-group mb-3">
                {/* <label htmlFor="no_of_hrs">No. of hrs</label> */}
                <input type="text" className="form-control" name="no_of_hrs" placeholder="No. of hours" value={this.state.no_of_hrs} onChange={this.onChange}/>
                </div>
                <div className="input-group mb-3">
                {/* <label htmlFor="action">Action</label> */}
                <input type="text" className="form-control" name="action" placeholder="Action" value={this.state.action} onChange={this.onChange}/>
                </div>
                <div className="input-group mb-3">
                {/* <label htmlFor="status">Status</label> */}
                <input type="text" className="form-control" name="status" placeholder="Status" value={this.state.status} onChange={this.onChange}/>
                </div>
            </form>
        );
    }
}

export default Exam;
