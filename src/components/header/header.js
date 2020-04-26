import React from 'react';
import Style from './style.module.css'

class Headers extends React.PureComponent {
    render() {
        return (
            <div className={Style.headers}>BlogPost</div>
        );
    }
}

export default Headers;