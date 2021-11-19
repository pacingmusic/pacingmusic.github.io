import React from 'react';
import PropTypes from 'prop-types';
import DesktopIcon from '../DesktopIcon/DesktopIcon';
import './DesktopDecor.scss';
import note from '../../images/note.png';
import self from '../../images/self.png';
import bird from '../../images/bird.png';
import cd from '../../images/cd.png';
import folder from '../../images/folder.png';
import trash from '../../images/trash.png';
import family from '../../images/family.png';
import studio from '../../images/studio.png';
import mort from '../../images/mort.png';
import mort2 from '../../images/mort2.png';

const DesktopDecor = () => (
  <div className="DesktopDecor">
    <DesktopIcon idNum={1} icon={note} name={'1.txt'} />
    <DesktopIcon idNum={2} img={self} name={'self.portrait'} />
    <DesktopIcon idNum={3} img={bird} name={'thebigboss.jpeg'} />
    <DesktopIcon idNum={4} img={studio} name={'thestudio.png'} />
    <DesktopIcon idNum={5} img={mort2} name={'mood.paint'} />
    <DesktopIcon idNum={6} icon={trash} name={'discography'} />
  </div>
);

DesktopDecor.propTypes = {};

DesktopDecor.defaultProps = {};

export default DesktopDecor;
