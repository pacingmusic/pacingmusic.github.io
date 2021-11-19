import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './BigLink.scss';


class BigLink extends Component {
    render() {
        return (
            <a className="BigLink" href={this.props.link} target={'_blank'}>
                <div className={"big-icon"}>
                    <img src={this.props.img} />

                </div>
                <div className={"icon-text"}>
                    {this.props.name}
                </div>
            </a>
        )
    };
}

BigLink.propTypes = {
    name: PropTypes.string,
    img: PropTypes.element,
    link: PropTypes.string
};

BigLink.defaultProps = {};

export default BigLink;
