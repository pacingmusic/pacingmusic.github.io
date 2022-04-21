import React from 'react';
import PropTypes from 'prop-types';
import './Secrets.scss';
import WindowBlock from '../../components/WindowBlock/WindowBlock';


const Secrets = () => (
  <div className="Secrets Homepage">
      <WindowBlock header={'angst.txt'}>
          <div className='form' dangerouslySetInnerHTML={{ __html: "" +
              "<iframe src=\"https://docs.google.com/forms/d/e/1FAIpQLSfABRaqF08bU8yEs-3WNhUxaUeNtnb3NgEdinKGCjuMU43WeA/viewform?embedded=true\" " +
              "width=\"100%\" height=\"1600\" frameborder=\"0\" marginheight=\"0\" marginwidth=\"0\">Loading…</iframe>"
          }} />
      </WindowBlock>
  </div>
);

Secrets.propTypes = {};

Secrets.defaultProps = {};

export default Secrets;
