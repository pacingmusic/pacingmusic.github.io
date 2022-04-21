import React from 'react';
import PropTypes from 'prop-types';
import './Secrets.scss';
import WindowBlock from '../../components/WindowBlock/WindowBlock';
import { Link } from "react-router-dom";


const Secrets = () => (
  <div className="Secrets Homepage">
      <WindowBlock header={'angst.txt'}>
          <div className={'text-box--small'}>
              <Link to={'/'} className={"text-link"}>
                  back
              </Link>
              {/*<Link to={{*/}
                    {/*pathname: "https://forms.gle/rNoVLBMwQ4RDYmag9" }}*/}
                    {/*target="_blank"*/}
                    {/*className={"text-link"}>*/}
                  {/*open in new tab*/}
              {/*</Link>*/}

              <a href={'https://forms.gle/rNoVLBMwQ4RDYmag9'} target={"_blank"} className={"text-link"}>
                  open in new tab
              </a>
          </div>

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
