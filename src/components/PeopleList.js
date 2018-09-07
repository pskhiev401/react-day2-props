import React from 'react'

function PeopleList(props){
    return ( 
         <div> 
            <button onClick={() =>
             props.confirmMethod(props.name)}>{props.name}
            </button>
        </div>
    );
}

export default PeopleList;