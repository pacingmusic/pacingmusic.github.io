import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './WindowBlock.scss';
import icons from '../../images/windowicons.png';

// const WindowBlock = ({children}) => (
//   <div className="WindowBlock">
//     <div className="WindowBlock__header">
//         <h1>
//             {this.props.header}
//         </h1>
//     </div>
//       <div className="WindowBlock__body">
//           {children}
//       </div>
//   </div>
// );

class WindowBlock extends Component {
    render() {
        return (
            <div className={'WindowBlock' + ' ' + this.props.color}>
                <div className="WindowBlock__header">
                    <h1>
                        {this.props.header}
                    </h1>
                    <img src={icons} className={'WindowBlock__header__icons'} />
                </div>
                <div className="WindowBlock__body">
                    {this.props.children}
                </div>
            </div>
        )
    };
}

WindowBlock.propTypes = {
    header: PropTypes.string,
    color: PropTypes.string
};

WindowBlock.defaultProps = {
    header: 'Header',
    color: 'purple'
};

export default WindowBlock;
