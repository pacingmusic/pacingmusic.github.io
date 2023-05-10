import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Secrets2.scss';
import WindowBlock from '../../components/WindowBlock/WindowBlock';
import { Link } from "react-router-dom";

const listOfSecrets = [
    {
        "timestamp": "2022-04-26T03:39:19.766Z",
        "entry": "im really insecure about how annoying i am and im always worried my friends really dont like me.",
        "response": "fuck that!!!!!"
    },
    {
        "timestamp": "2022-04-25T21:41:22.666Z",
        "entry": "All your potential has been wasted you lazy bastard, and you’re too old now to rectify it.",
        "response": "fuck that!!!!!"
    },
    {
        "timestamp": "2022-04-30T06:14:54.381Z",
        "entry": "you don’t have a real personality, you just change yourself to please everyone. you’re a burden to your loved ones. you don’t deserve the love you receive. one day everyone will realize how annoying you are. ",
        "response": "fuck that!!!!!"
    },
    {
        "timestamp": "2022-04-25T17:57:24.848Z",
        "entry": "You are not good enough. \nYou only got by on luck so far, you have no actual skill. \nYou are a burden to your parents. \nYou don't know anything.\nYou are pathetic.\nYou have no other hobbies than watching tv.\nYou are basic and not interesting.\nNobody likes you.",
        "response": "fuck that!!!!!"
    },
    {
        "timestamp": "2022-04-25T15:53:50.686Z",
        "entry": "test",
        "response": "fuck that!!!!!"
    },
    {
        "timestamp": "2022-05-01T03:43:42.141Z",
        "entry": "you’ll never make it in the industry\nyou’re not talented \nyou’re selfish\nyour friends actually hate you\nyou’re boring ",
        "response": "fuck that!!!!!"
    },
    {
        "timestamp": "2022-04-26T15:43:31.302Z",
        "entry": "I'm a spineless twat who cannot get anything done. I make people uncomfortable by existing.",
        "response": "fuck that!!!!!"
    },
    {
        "timestamp": "2022-04-26T18:48:56.947Z",
        "entry": "Future will suck because I suck. ",
        "response": "fuck that!!!!!"
    },
    {
        "timestamp": "2022-05-05T01:44:02.943Z",
        "entry": "I think I'm failing at everything I do. That I'm a bad wife/mom/daughter/friend/person. That my friends and loved ones just feel bad for me and deal with me out of pity. That I'm mediocre at every creative thing I try.  ",
        "response": "fuck that!!!!!"
    },
    {
        "timestamp": "2022-04-30T05:02:46.407Z",
        "entry": "Acting weird in front of others\nmy weight\nI'm not productive enough\nI'm not good enough\nI'm too emotional",
        "response": "fuck that!!!!!"
    },
    {
        "timestamp": "2022-04-21T21:45:34.762Z",
        "response": "fuck that!!!!!"
    },
    {
        "timestamp": "2022-04-25T16:42:47.903Z",
        "entry": "Dunning-kruger effect",
        "response": "fuck that!!!!!"
    },
    {
        "timestamp": "2022-04-25T16:56:33.788Z",
        "entry": "Why would anyone want to talk to you?\nNo one cares",
        "response": "fuck that!!!!!"
    },
    {
        "timestamp": "2022-04-25T17:02:56.366Z",
        "entry": "Nobody actually likes you, everyone is just humoring you/ You're a worthless human being/  You're ugly and fat and lazy and stupid and have no right to ask for sympathy",
        "response": "fuck that!!!!!"
    },
    {
        "timestamp": "2022-04-25T17:22:40.426Z",
        "entry": "“What if I can’t do it” -brain, everyday",
        "response": "fuck that!!!!!"
    },
    {
        "timestamp": "2022-04-25T19:34:09.301Z",
        "entry": "Don't say hi to this person you knew from years ago, they won't remember you because you're not worth remembering",
        "response": "fuck that!!!!!"
    },
    {
        "timestamp": "2022-04-25T19:52:06.860Z",
        "entry": "Sometimes my brain tries to tell me that I'm self harming for attention even though I've only ever told my boyfriend",
        "response": "fuck that!!!!!"
    },
    {
        "timestamp": "2022-04-25T20:46:17.045Z",
        "entry": "Your colleagues know you’re stupid\nYou hurt the people you love by forgetting stuff\nPractising self-acceptance is just the easy way out so you don’t have to try harder",
        "response": "fuck that!!!!!"
    },
    {
        "timestamp": "2022-04-25T21:08:48.350Z",
        "entry": "Imposter syndrome, dying alone, not smart enough, not attractive ",
        "response": "fuck that!!!!!"
    },
    {
        "timestamp": "2022-04-25T22:15:01.251Z",
        "entry": "I won't be able to make rent and I'll be kicked out of my apartment\n\nPeople just (pretend to) tolerate me\n\nI'm ugly and fat",
        "response": "fuck that!!!!!"
    },
    {
        "timestamp": "2022-04-25T23:00:36.420Z",
        "entry": "I’ll never get anything done right. Everyone thinks I’m faking it. Happiness is not achievable for me. My boss thinks I suck and I’m going to get fired. Im the annoying one. I never do anything right. I’m lazy. I’m not good enough. Why can’t I just work like a normal person?! I only have like one person who really cares about me. I’m so bad that being miserable is my repayment to the people I know. I have to be the happy/good/nice/funny one or no one will like me. I’m not good enough. ",
        "response": "fuck that!!!!!"
    },
    {
        "timestamp": "2022-04-25T23:03:29.051Z",
        "entry": "Lol u suck and you’re the worst person ever and you’re just faking everything for attention even though you don’t actually tell anyone anything bc there’s no one to tell but you’re still just an annoying attention-seeking faker you stupid dumbass\n\n\n\n\n\nAlso this is a vent From here, but: oh my god I feel so dysphoric these days. Gender dysforiya (wtf how is it spelt) oh wait “dysphoria” there we go. And guess what. My mom’s not accepting of me being trans . She acts like I never said anything about that.  Woo-hoo how //wonderful//. Oh my god I can’t wait until I’m legally allowed to move out.\n\nGood luck to you ",
        "response": "fuck that!!!!!"
    },
    {
        "timestamp": "2022-04-26T01:30:01.856Z",
        "entry": "People not liking me",
        "response": "fuck that!!!!!"
    },
    {
        "timestamp": "2022-04-26T01:31:53.085Z",
        "entry": "People are only friends with you because they feel sorry for you\n\nPeople are afraid to be honest with you because you can get overwhelmed easily\n\nYou'll never find someone\n\n",
        "response": "fuck that!!!!!"
    },
    {
        "timestamp": "2022-04-26T09:43:04.560Z",
        "entry": "My friends are slowly beginning to not like me",
        "response": "fuck that!!!!!"
    },
    {
        "timestamp": "2022-04-26T09:48:41.501Z",
        "entry": "- You will never have a proper career. (a flightly moron like you can only be a burger flipper lol)\n- ADHD is the least of your worries. (the doctors were too nice to tell you what you really are: a hypochondriac)\n- Everything is your fault. (ESPECIALLY the shit you have no control over)\n- You use \"I\", \"me\" and \"my\" too much (you fucking narcissist lol)\n- You will never grow up (and not in the fun Peter Pan way either)",
        "response": "fuck that!!!!!"
    },
    {
        "timestamp": "2022-04-28T01:02:13.515Z",
        "entry": "I still can’t drive and I’m 18 I’m just so scared what if I kill someone? What if they kill me? I’m not ready and everyone hates me for it",
        "response": "fuck that!!!!!"
    },
    {
        "timestamp": "2022-04-28T03:02:05.151Z",
        "entry": "i tell everyone to love themselves but i can’t do it for me",
        "response": "fuck that!!!!!"
    },
    {
        "timestamp": "2022-04-28T07:46:14.806Z",
        "entry": "you’re not trying hard enough to get better\nyou’re not worth being around \neveryone thinks you’re annoying \nyou just bring everyone down",
        "response": "fuck that!!!!!"
    },
    {
        "timestamp": "2022-04-28T17:23:08.244Z",
        "entry": "why can’t you be more like ur sister\n\ni bet they think i’m weird",
        "response": "fuck that!!!!!"
    },
    {
        "timestamp": "2022-04-30T09:01:36.449Z",
        "entry": "You’re an idiot. You’re such a mess. Eventually everyone will see how broken you really are. Your family will give up on you once they realize you’re not worth the time and effort they’re putting in. People only compliment you because you’ve tricked them into thinking good things about you - but the truth will come out eventually. People only like you because you’ve deceived them into thinking you’re a decent person, and you can’t keep it up forever.",
        "response": "fuck that!!!!!"
    },
    {
        "timestamp": "2022-05-01T03:20:59.395Z",
        "entry": "One of my insecurities is people (in a work setting) catching on that I’m different and rejecting me and/or not taking me seriously.",
        "response": "fuck that!!!!!"
    },
    {
        "timestamp": "2022-05-01T03:55:32.547Z",
        "entry": "everyone can tell you don’t know what you’re doing. it’s so obvious and embarrassing ",
        "response": "fuck that!!!!!"
    },
    {
        "timestamp": "2022-05-02T13:14:55.435Z",
        "entry": "That nobody actually loves me. They’re just nicer to me than they should be because they feel bad.",
        "response": "fuck that!!!!!"
    },
    {
        "timestamp": "2022-05-04T12:51:24.161Z",
        "entry": "-you can’t have people over if the place looks like THIS\n-you should just be able to do it! \n-wow you have no self control ",
        "response": "fuck that!!!!!"
    },
    {
        "timestamp": "2022-05-09T21:33:50.958Z",
        "entry": "You are worthless.\nYou are not good at doing absolutely anything.\nYou should probably just stop speaking because everything you say is weird and annoying.",
        "response": "fuck that!!!!!"
    },
    {
        "timestamp": "2022-05-17T20:14:58.899Z",
        "entry": "I'm just an annoying dumb little child and because of that no one respects my opinions or emotions",
        "response": "fuck that!!!!!"
    },
    {
        "timestamp": "2022-06-15T05:57:23.061Z",
        "entry": "I’m a bit of a toothless freak & not very good at the guitar.",
        "response": "fuck that!!!!!"
    },
    {
        "timestamp": "2022-06-15T18:42:40.791Z",
        "entry": "i’ll never be able to be independent ",
        "response": "fuck that!!!!!"
    },
    {
        "timestamp": "2022-06-15T18:59:23.362Z",
        "entry": "You're not worth loving because you'll fuck it up anyways",
        "response": "fuck that!!!!!"
    },
    {
        "timestamp": "2022-06-15T19:25:40.144Z",
        "entry": "I realise that based off the countdown this isn’t a thing anymore but I just want to know that someone has seen the shit inside my head instead of just writing it in a book for no one to see.\nAnyway there is a girl I’ve know her for so long, she’s my best mate. I’m absolutely head over heels. She is the funniest, kindest, most gorgeous person I have ever met, for those reasons I couldn’t bare her not being around. So I grit my teeth and play nice with all her boyfriends scared that I’m not capable to be “the one,” that I would try fail and lose my friendship in the process. \nThat is the only thing I fear more than dying alone",
        "response": "fuck that!!!!!"
    },
    {
        "timestamp": "2022-06-15T19:28:44.629Z",
        "entry": "sometimes i think i'm too lucky and i don't deserve the people i love, and i often worry its just a matter of time before they get \"bored\" of me and move on. i don't tell people i feel bad because i don't want them to feel uncomfortable",
        "response": "fuck that!!!!!"
    },
    {
        "timestamp": "2022-06-15T21:03:04.266Z",
        "entry": "I feel disconnected from my life and my self and worry that I always will. Friends, things, events, successes, epiphanies, feelings, food, etc. seem like they will all amount to nothing if I am unable to sense that I exist within myself and my life environment in a meaningful way.",
        "response": "fuck that!!!!!"
    },
    {
        "timestamp": "2022-06-15T22:58:14.450Z",
        "entry": "I don‘t have imposter syndrome, I just suck.\n\nAmericans will never be free from gun violence\n\nI always feel guilty \n\n",
        "response": "fuck that!!!!!"
    },
    {
        "timestamp": "2022-06-15T23:24:52.452Z",
        "entry": "you’ll never get out of where you are now and progress to the next level 🤡",
        "response": "fuck that!!!!!"
    },
    {
        "timestamp": "2022-06-16T16:32:05.507Z",
        "entry": "You didn't do this really important thing and now no one likes you",
        "response": "fuck that!!!!!"
    },
    {
        "timestamp": "2022-06-19T00:27:53.752Z",
        "entry": "I’m really insecure about my weight. That’s gotta be the number one thing honestly. But I’m too depressed to fix that so I’ll move on lol. I’m also really insecure about my intelligence - especially as it pertains to my job. I almost feel like I am experiencing imposter syndrome… it sucks haha… I’m insecure about my autism",
        "response": "fuck that!!!!!"
    },
    {
        "timestamp": "2022-07-09T01:48:19.584Z",
        "entry": "The only thing you're good for is living up to your family's expectations, and even that will never happen. Also your music sucks and you should give up. ",
        "response": "fuck that!!!!!"
    },
    {
        "timestamp": "2022-07-13T13:35:17.630Z",
        "entry": "You're not worth loving. You'll just end up boring them or scaring them off again",
        "response": "fuck that!!!!!"
    },
    {
        "timestamp": "2022-08-20T00:46:39.072Z",
        "entry": "sometimes I feel like I’ll never be good enough, or in the back of my head some dude is telling me that there will always be someone better or more successful at my passions. Or that I’m a horrible friend and that my friends should find someone happier or better then me. Core beliefs suck man.",
        "response": "fuck that!!!!!"
    },
    {
        "timestamp": "2023-01-03T00:11:44.749Z",
        "entry": "I’m going to end up just like my biological father who was an asshole and drug addict. And sometimes in trying to be the complete opposite of him I find I need to be more like him. ",
        "response": "fuck that!!!!!"
    }
];


export default class Secrets2 extends Component {

  constructor() {
        super();

        this.destroyAnxiety = this.destroyAnxiety.bind(this);
}

  destroyAnxiety(id) {
    let deepestInsecurity = document.getElementById(id);
    deepestInsecurity.classList.add('explode');

    setTimeout(function(){
    deepestInsecurity.classList.remove('explode');
    deepestInsecurity.classList.add('exploded');
    }, 2000);    

  }

  render() {
    return(
      <div className="Secrets2 Homepage">

      <div className="Secrets2__links">
        <a href="https://pacingmusic.com/">back to my stupid website</a><br/>
        <a href="https://streamlink.to/hatemail">stream my stupid record</a>
      </div>

      {/*Intro*/}
            <WindowBlock header={'anxiety.place'}>
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
                            Subject: <span className={'subjectline'}>your deepest insecurities</span>
                            <span className={'date'}>May 13, 2023</span>
                        </div>
                        <div className={'message_body_email'}>
                            <p>
                              Last year I asked strangers on the internet to anonymously send me their deepest insecurities to be featured in <a href="https://youtu.be/wbhXwZdr5uc">a music video.</a> 
                              </p>
                            <p>
                              I am so grateful to every single person who sent one. It made me sad to hear how mean people can be to themselves, but it’s also comforting to know that I am not alone.
                            </p>
                            <p>
                              But I think it's time we all move on now. We're better than this. 
                            </p>

                            <p>
                              &#60;3 Pacing
                            </p>

                            <p>
                              PS. You can still submit your insecurities <a href="https://forms.gle/kkaftvfLGdu4enLFA">here</a> if you want. And of course you can hear all <em>my</em> deepest insecurities in my debut record <a href='https://streamlink.to/hatemail' target='_blank'>
                                 hatemail.
                              </a>
                            </p>

                        
                        </div>
                    </div>
                </div>
            </WindowBlock>

            <div className="fuckit">FUCK THOSE INSECURITIES RIGHT UP</div>

      <div className="listOfSecrets">

        {listOfSecrets.map( card => (
                          <div key={card.timestamp} id={card.timestamp} className={'secret'}>
                          <div className={'response'}>{card.response}</div>
                            <div className={'message'}>
                              <div className={'message_body'}>
                                <div className={'message_body_subject'}>{card.timestamp}</div>
                                <div className={'message_body_email'}>{card.entry}</div>
                                <div className={'message_body_email_attachments'}>
                                  <button className='delete' onClick={() => { this.destroyAnxiety(card.timestamp); }}>delete</button>
                                </div>
                              </div>
                            </div>

                          </div>
        ))}

        </div>
      </div>
      );
  }
}
