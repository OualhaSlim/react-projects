import React from 'react';

const Spinner = (props) =>{
    return(
        <div className="ui active dimmer">
            <div className="ui big text loader">
                {props.msg}
            </div>
        </div>
    );
};

// default props
Spinner.defaultProps = {
    msg: 'Loading...',
}

export default Spinner