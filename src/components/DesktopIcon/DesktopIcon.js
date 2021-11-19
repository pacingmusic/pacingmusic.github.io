import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './DesktopIcon.scss';

class DesktopIcon extends Component {
    render() {
        return (
            <div className="DesktopIcon" id={'icon-' + this.props.idNum}>
                <div hidden={!this.props.icon} className={"DesktopIcon__icon"}>
                    <img src={this.props.icon} />
                </div>
                <div hidden={!this.props.img} className={"DesktopIcon__img"}>
                    <img src={this.props.img} />
                </div>
                <div className={"DesktopIcon__name"}>
                    {this.props.name}
                </div>
            </div>
        )
    };
}


DesktopIcon.propTypes = {
    img: PropTypes.element,
    icon: PropTypes.element,
    name: PropTypes.string,
    idNum: PropTypes.number
};

DesktopIcon.defaultProps = {};

export default DesktopIcon;
