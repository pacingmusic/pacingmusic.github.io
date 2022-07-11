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
import tiktok from './images/tiktok.png';
import hatemail from './images/cover_hatemail-front--webres.jpeg';

function Homepage() {
    return (
        <div className="Homepage">

            {/*Intro*/}
            <WindowBlock header={'Welcome to my little world'}>
                <div className={'intro'}>
                    <div className={'intro-pic'}>
                        <img src={headshot} className={'intro-pic--pic'}/>
                        <div className={'intro-pic__name'}>Pacing</div>
                        <div className={'intro-pic__desc'}>Musician / Band</div>
                        <div className={'intro-pic__desc'}>Pittsburgh, PA</div>
                        <div className={'intro-pic__desc'}>
                            <a href={'https://streamlink.to/hatemail'}>+ Be My BFF</a>
                        </div>
                    </div>
                    <div className={'intro-text-box'}>
                        <div>
                            <p>Hi, I'm Katie!</p>
                            <p>
                                Pacing is a project where I get to try on a bunch of different characters and see what they have
                                to say. Most of them are profane, self-obsessed, shameless, unreliable narrators… I guess a
                                little bit of the real me always manages to slip in.
                            </p>
                            <p>
                                My writing has been described as “tongue firmly planted in cheek” (Surviving the Golden Age, 2022), an “off-kilter and wonderfully weird world” (CLOUT, 2022), and “I don’t get it” (multiple sources).
                            </p>
                            <p>
                                My debut mixtape "<a href={'https://streamlink.to/hatemail'}>hatemail</a>" is out now!
                                Since I've shared all my deepest insecurities with you, it's only fair that you <a href={'/#/angst'}>send me yours</a>.
                            </p>
                        </div>
                    </div>
                </div>
            </WindowBlock>

            {/*Links*/}
            <WindowBlock header={'Find my music'} color={'blue'}>
                <div className={'links'}>
                    <BigLink name='bandcamp' img={bandcamp} link={'https://pacingmusic.bandcamp.com'} />
                    <BigLink name='spotify' img={spotify} link={'https://open.spotify.com/artist/7mJOp9EcXEdAH6TL36flXw?si=CNLQNti2RWS1EOWVD17USQ'} />
                    <BigLink name='apple music' img={apple} link={'https://music.apple.com/us/artist/pacing/1493615757'} />
                    <BigLink name='soundcloud' img={soundcloud} link={'https://soundcloud.com/pacingmusic'} />
                    <BigLink name='pandora' img={pandora} link={'https://www.pandora.com/playlist/PL:126724214806811588:342066879'}/>
                </div>
            </WindowBlock>

            {/*Intro*/}
            <WindowBlock header={'My debut mixtape: hatemail'}>
                <div className={'message'}>
                    <div className={'message_sidebar'}>
                        <div className={'message_sidebar_item'}>
                            inbox
                        </div>
                        <div className={'message_sidebar_item'}>
                            sent
                        </div>
                        <div className={'message_sidebar_item message_sidebar_item--selected'}>
                            hatemail ->
                        </div>
                        <div className={'message_sidebar_item'}>
                            ¯\_(ツ)_/¯
                        </div>
                        <div className={'message_sidebar_item'}>
                            drafts
                        </div>
                        <div className={'message_sidebar_item'}>
                            spam
                        </div>
                        <div className={'message_sidebar_item'}>
                            @( * O * )@
                        </div>
                        <div className={'message_sidebar_item'}>
                            (✖╭╮✖)
                        </div>
                        <div className={'message_sidebar_item'}>
                            love letters
                        </div>
                    </div>
                    <div className={'message_body'}>
                        <div className={'message_body_subject'}>
                            Subject: <span className={'subjectline'}>about hatemail</span>
                            <span className={'date'}>May 13, 2022</span>
                        </div>
                        <div className={'message_body_email'}>
                            <p>
                                I like to deal with my anxiety in the very healthy manner of repeatedly telling myself what an annoying idiot jerk I am. Every once in a while it works because I realize how ridiculous I sound.
                            </p>
                            <p>
                                My theory is that fully succumbing to the mean voices in your lizard brain can be a helpful form of immersion therapy, in small doses. I tested this theory out on the characters of this record, from a macho mafia-aspirant plotting to kill Tony Soprano, to a FOMO-plagued socialite having a panic attack, to - well, myself. These characters dramatically lash out at themselves and others, with mixed results.
                            </p>
                            <p>
                                The mixtape starts off bold and angry and gradually runs out of steam until the narrator is left standing alone, with no choice but to make friends with themself.
                            </p>
                            {/*<p>*/}
                                {/*“hatemail” was recorded with love in my home studio (“the fortress of songitude") with the help of my ex-music-theorist husband Ben and our two cats, who are professional sound engineers. The result is an indie-pop soundscape of anxiety, with ubiquitous foley and a cruel-but-angelic backing vocals of those pesky voices in your head.*/}
                            {/*</p>*/}
                            <p>
                                I like to think this is the <a href={'https://open.spotify.com/playlist/6SmcICY21TGSLH4o3ct3Nk?si=7b86b85f5c7e4584'}>mixtape you would make for the person you hate most.</a> &lt;3
                            </p>

                            <div className={'message_body_email_attachments'}>
                                Attachments:
                                <div className={'links'}>
                                    <BigLink name='buy it' img={bandcamp} link={'https://pacingmusic.bandcamp.com/album/hatemail-2'} />
                                    <BigLink name='stream it' img={spotify} link={'https://streamlink.to/hatemail'} />
                                    <img className={'cover'} src={hatemail} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </WindowBlock>

            {/*MP3*/}
            <WindowBlock header={'MP3 player'} color={'green'}>
                <div className={'links'}>
                    <div className='mp3' dangerouslySetInnerHTML={{ __html: "<iframe style=\"border: 0; width: 200px; height: 342px;\" src=\"https://bandcamp.com/EmbeddedPlayer/album=254267567/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/track=486000797/transparent=true/\" seamless><a href=\"https://pacingmusic.bandcamp.com/album/hatemail-2\">hatemail by Pacing</a></iframe>"}} />
                    <div className='mp3' dangerouslySetInnerHTML={{ __html: "<iframe style=\"border: 0; width: 200px; height: 342px;\" src=\"https://bandcamp.com/EmbeddedPlayer/album=254267567/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/track=29022724/transparent=true/\" seamless><a href=\"https://pacingmusic.bandcamp.com/album/hatemail-2\">hatemail by Pacing</a></iframe>"}} />
                    <div className='mp3' dangerouslySetInnerHTML={{ __html: "<iframe style=\"border: 0; width: 200px; height: 342px;\" src=\"https://bandcamp.com/EmbeddedPlayer/album=3166585439/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/\" seamless><a href=\"https://pacingmusic.bandcamp.com/album/june-tinfoil-hat-song\">June / Tinfoil Hat Song by Pacing</a></iframe>"}} />
                    {/*<div className='mp3' dangerouslySetInnerHTML={{ __html: "<iframe style=\"border: 0; width: 200px; height: 342px;\" src=\"https://bandcamp.com/EmbeddedPlayer/track=2612382935/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/\" seamless><a href=\"https://pacingmusic.bandcamp.com/track/snow\">Snow by Pacing</a></iframe>"}} />*/}
                    {/*<div dangerouslySetInnerHTML={{ __html: "<iframe src='https://www.youtube.com/embed/cWDJoK8zw58' />"}} />*/}
                </div>
            </WindowBlock>

            {/*Social*/}
            <WindowBlock header={'Be my internet friend <3'} color={'blue'}>
                <div className={'links'}>
                    <BigLink name='instagram' img={instagram} link={'https://www.instagram.com/pacingmusic/'} />
                    <BigLink name='youtube' img={youtube} link={'https://www.youtube.com/channel/UCu9Dm575IZ4ICBZ-Bm6B9qw/featured'} />
                    <BigLink name='twitter' img={twitter} link={'https://twitter.com/pacingmusic'} />
                    <BigLink name='tiktok' img={tiktok} link={'https://www.tiktok.com/@pacingmusic'} />

                </div>
            </WindowBlock>

            {/*MP3*/}
            <WindowBlock header={'Weirdly specific playlists'} color={'green'}>
                <div className={'playlists'}>
                    <div className='mp3' dangerouslySetInnerHTML={{ __html: "<iframe style=\"border-radius:12px\" src=\"https://open.spotify.com/embed/playlist/6SmcICY21TGSLH4o3ct3Nk?utm_source=generator\" width=\"100%\" height=\"80\" frameBorder=\"0\" allowfullscreen=\"\" allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\"></iframe>"}} />
                    <div className='mp3' dangerouslySetInnerHTML={{ __html: "<iframe style=\"border-radius:12px\" src=\"https://open.spotify.com/embed/playlist/58vWvsVh9r9Eo9Jal8SPQu?utm_source=generator\" width=\"100%\" height=\"80\" frameBorder=\"0\" allowfullscreen=\"\" allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\"></iframe>"}} />
                    <div className='mp3' dangerouslySetInnerHTML={{ __html: "<iframe style=\"border-radius:12px\" src=\"https://open.spotify.com/embed/playlist/0qwVuQSDwZ4spFARvzanUR?utm_source=generator\" width=\"100%\" height=\"80\" frameBorder=\"0\" allowfullscreen=\"\" allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\"></iframe>"}} />
                </div>
            </WindowBlock>

            {/*Contact*/}
            <WindowBlock header={'Contact me'} color={'purple'}>
                <div className={'text-box--small'}>
                    For sync licensing, collabs, press, EPK access, cat pics:
                </div>
                <div className={'text-box--large'}>
                    pacingband@gmail.com
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
