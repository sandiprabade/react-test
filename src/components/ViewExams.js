import React from 'react';
import './ViewExams.css';

function ViewExams(props){
    return (
        <div>
            <div className="card text-white bg-dark align-items-center">
                <div className="card-body">
                    Sr.no | Subject Code | Courses | Department | Semester | Date and Time | No of Hrs | Action | Status
                </div>
            </div>
            {
                props.exams.map((e,i) => {
                    return (
                        <div  key={i}>
                            <div className="card align-items-center bg-light">
                                <div className="card-body">
                                    {i+1} | {e.sub_code} | {e.subject} | {e.courses} | {e.dept} | {e.sem} | {e.date_time} | {e.no_of_hrs} | {e.action} | {e.status}
                                </div>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
    
}

export default ViewExams;
