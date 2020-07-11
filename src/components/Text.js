import React from 'react';
import { withReverseText } from '../hocs/Reverse';

function Text(props) {
    return (
        <div>
            {props.children}
        </div>
    )
}

export default withReverseText(Text);