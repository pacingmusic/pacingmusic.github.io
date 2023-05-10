import React from 'react';
import PropTypes from 'prop-types';
import './Secrets2.scss';
import WindowBlock from '../../components/WindowBlock/WindowBlock';
import { Link } from "react-router-dom";


const Secrets2 = () => (
  <div className="Secrets Homepage">
      <WindowBlock header={'anxiety.place'} color={'purple'}>
          <div className={'message'}>
              
                    <div className={'message_body'}>
                        <div className={'message_body_subject'}>
                            Subject: <span className={'subjectline'}>upload your deepest insecurities</span>
                            <span className={'date'}>May 13, 2023</span>
                        </div>
                        <div className={'message_body_email'}>
                            <p>
                              A few months ago I asked strangers on the internet to anonymously send me their deepest insecurities to be featured in the music video for my song "Who has ADHD now lol." 
                              </p>
                            <p>
                              I am so grateful to every single person who sent one. It made me sad to hear how mean people can be to themselves, but it’s also comforting to know that I am not alone. I hope that when you see the video, it makes you feel like you are not alone.
                            </p>
                            <p>
                              You can still submit your insecurities below, and I read every single one. I might even do another video with them or write songs using them.
                            </p>
                            <p>
                              &#60;3 Pacing
                            </p>
                            <p>
                              <a href="https://dustyorgan.com/2022/07/12/premiere-indie-singer-songwriter-pacing-turns-insecurities-into-a-collage-for-new-music-video-for-who-has-adhd-now-lol/" target="_blank">
                                Watch the premiere of the "Who has ADHD now lol" music video on Dusty Organ.
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
  </div>
);

Secrets2.propTypes = {};

Secrets2.defaultProps = {};

export default Secrets2;
