import React from 'react';

function Student(props){
    return(
        <div>
            <h2>Student name is <a href="https://web.facebook.com/ahsanjutt438">{props.myname}</a></h2>
            <h2>Student age is {props.myage}</h2>
            <h2>Student course is {props.mycourse}</h2>
        </div>
    )
    
}
export default Student