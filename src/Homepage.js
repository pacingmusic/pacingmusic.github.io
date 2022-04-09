import './Homepage.scss';
import WindowBlock from './components/WindowBlock/WindowBlock';
import BigLink from './components/BigLink/BigLink';
import headshot from './images/headshot.jpg';
import bandcamp from './images/bandcamp.png';
import spotify from './images/spotify.png';
import apple from './images/apple.png';
import soundcloud from './images/soundcloud.png';
import pandora from './images/pandora.png';
import instagram from './images/instagram.png';
import youtube from './images/youtube.png';
import twitter from './images/twitter.png';

function Homepage() {
    return (
        <div className="Homepage">

            {/*Intro*/}
            <WindowBlock header={'Welcome!'}>
                <div className={'intro'}>
                    <div className={'intro-pic'}>
                        <img src={headshot} className={'intro-pic--pic'}/>
                        <div className={'intro-pic__name'}>Pacing</div>
                        <div className={'intro-pic__desc'}>Musician / Band</div>
                        <div className={'intro-pic__desc'}>Pittsburgh, PA</div>
                    </div>
                    <div className={'intro-text-box'}>
                        <div>
                            <p>Hi, I'm Katie!</p>
                            <p>
                                Pacing is a project where I get to try on a bunch of different characters and see what they have
                                to say. Most of them are profane, self-obsessed, shameless, unreliable narrators… I guess a
                                little bit of the real me always manages to slip in...
                            </p>
                            <p>
                                My writing has been described as “tongue firmly planted in cheek” (Surviving the Golden Age, 2022), an “off-kilter and wonderfully weird world” (CLOUT, 2022), and “I don’t get it” (multiple sources).
                            </p>
                            <p>
                                My debut mixtape "hatemail" comes out Friday, May 13! “hatemail” is a manifesto of adult angst. It pokes fun at how ridiculous it would sound if you said the mean stuff in your head out loud.
                            </p>
                        </div>
                    </div>
                </div>
            </WindowBlock>

            {/*Links*/}
            <WindowBlock header={'Find My Music'} color={'blue'}>
                <div className={'links'}>
                    <BigLink name='bandcamp' img={bandcamp} link={'https://pacingmusic.bandcamp.com'} />
                    <BigLink name='spotify' img={spotify} link={'https://open.spotify.com/artist/7mJOp9EcXEdAH6TL36flXw?si=CNLQNti2RWS1EOWVD17USQ'} />
                    <BigLink name='apple music' img={apple} link={'https://music.apple.com/us/artist/pacing/1493615757'} />
                    <BigLink name='soundcloud' img={soundcloud} link={'https://soundcloud.com/pacingmusic'} />
                    <BigLink name='pandora' img={pandora} link={'https://www.pandora.com/playlist/PL:126724214806811588:342066879'}/>
                </div>
            </WindowBlock>

            {/*MP3*/}
            <WindowBlock header={'MP3 Player'} color={'green'}>
                <div className={'links'}>
                    <div className='mp3' dangerouslySetInnerHTML={{ __html: "<iframe style=\"border: 0; width: 200px; height: 314px;\" src=\"https://bandcamp.com/EmbeddedPlayer/track=986361956/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/\" seamless><a href=\"https://pacingmusic.bandcamp.com/track/im-getting-kicked-out-of-the-world\">I&#39;m Getting Kicked Out of the World by Pacing</a></iframe>"}} />
                    <div className='mp3' dangerouslySetInnerHTML={{ __html: "<iframe style=\"border: 0; width: 200px; height: 342px;\" src=\"https://bandcamp.com/EmbeddedPlayer/album=3166585439/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/\" seamless><a href=\"https://pacingmusic.bandcamp.com/album/june-tinfoil-hat-song\">June / Tinfoil Hat Song by Pacing</a></iframe>"}} />
                    <div className='mp3' dangerouslySetInnerHTML={{ __html: "<iframe style=\"border: 0; width: 200px; height: 314px;\" src=\"https://bandcamp.com/EmbeddedPlayer/track=2612382935/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/\" seamless><a href=\"https://pacingmusic.bandcamp.com/track/snow\">Snow by Pacing</a></iframe>"}} />
                    {/*<div dangerouslySetInnerHTML={{ __html: "<iframe src='https://www.youtube.com/embed/cWDJoK8zw58' />"}} />*/}
                </div>
            </WindowBlock>

            {/*Contact*/}
            <WindowBlock header={'Contact Me'} color={'purple'}>
                <div className={'text-box-large'}>
                    pacingband@gmail.com
                </div>
            </WindowBlock>

            {/*Social*/}
            <WindowBlock header={'Be My Internet Friend'} color={'blue'}>
                <div className={'links'}>
                    <BigLink name='instagram' img={instagram} link={'https://www.instagram.com/pacingmusic/'} />
                    <BigLink name='youtube' img={youtube} link={'https://www.youtube.com/channel/UCu9Dm575IZ4ICBZ-Bm6B9qw/featured'} />
                    <BigLink name='twitter' img={twitter} link={'https://twitter.com/pacingmusic'} />

                </div>
            </WindowBlock>

            {/*Footer*/}
            <div className="footer">
                <p>© {new Date().getFullYear()} Pacing Music</p>
            </div>
        </div>
    );
}

export default Homepage;
