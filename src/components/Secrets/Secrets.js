import React from 'react';
import PropTypes from 'prop-types';
import './Secrets.scss';
import WindowBlock from '../../components/WindowBlock/WindowBlock';
import { Link } from "react-router-dom";


const Secrets = () => (
  <div className="Secrets Homepage">
      <WindowBlock header={'anxiety.place'} color={'purple'}>
          <div className={'message'}>
              
                    <div className={'message_body'}>
                        <div className={'message_body_subject'}>
                            Subject: <span className={'subjectline'}>upload your anxiety</span>
                            <span className={'date'}>July 13, 2022</span>
                        </div>
                        <div className={'message_body_email'}>
                            <p>
                              A few months ago I asked strangers on the internet to anonymously send me their deepest insecurities to be featured in the music video for my song "Who has ADHD now lol." I am so grateful to every single person who sent one. It made me sad to hear how mean people can be to themselves, but it’s also comforting to know that I am not alone. I hope that when you see the video, it makes you feel like you are not alone.
                            </p>
                            <p>
                              You can still submit your insecurities below, and I read every single one. I might even do another video with them or write songs using them.
                            </p>
                            <p>
                              &#60;3 Pacing
                            </p>
                            <p>
                              <a href="https://dustyorgan.com/" target="_blank">
                                Watch the premeire of the "Who has ADHD now lol" music video on Dusty Organ on July 13, 2022.
                              </a>
                            </p>
                            <p>Hear all <em>my</em> deepest insecurities in my debut mixtape <a href="https://streamlink.to/hatemail" target="_blank">
                                 hatemail.
                              </a>
                            </p>
                        </div>
                    </div>
                </div>
      </WindowBlock>
      <WindowBlock header={'anonymously send me your deepest insecurities'} color={'blue'}>
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
