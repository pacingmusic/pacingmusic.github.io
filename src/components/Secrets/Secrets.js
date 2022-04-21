import React from 'react';
import PropTypes from 'prop-types';
import './Secrets.scss';
import WindowBlock from '../../components/WindowBlock/WindowBlock';


const Secrets = () => (
  <div className="Secrets">
      <WindowBlock header={'Sunny <3 music video!'}>
          <div className={'playlists'}>
              <div className='video' dangerouslySetInnerHTML={{ __html: "" +
                  "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/0L9gUEWAmK4\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\"></iframe>"
              }} />
          </div>
      </WindowBlock>
  </div>
);

Secrets.propTypes = {};

Secrets.defaultProps = {};

export default Secrets;
