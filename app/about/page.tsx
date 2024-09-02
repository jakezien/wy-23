'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import PageTitle from '../components/pageTitle'
import Image from 'next/image'
import OurTeam from './ourTeam.json'
import ExpeditionTeam from './expeditionTeam.json'
import Allies from './allies.json'


export default function About() {  
  
  type TeamMember = {
    name: string,
    role?: string,
    note?: string
  }

  function teamItem(member: TeamMember) {
    function slug(member: TeamMember): string {
      return member.name.toLowerCase().split(' ').join('-')
    }

    return (
      <>
        <li>
          <Image
            src={"/images/team/" + slug(member) + ".jpg"}
            alt=""
            width={300}
            height={400}
          />

          <p>{member.name}</p>
          <p>{member.role}</p>
          {member.note &&
            <p>{member.note}</p>
          }
        </li>
      </>
    )
  }

  return (
    <>
      <div className='min-h-screen'>
        <div className=''>
          <div className=''>
            <PageTitle title="About"></PageTitle>
            
            <div>
              <div className="bg">
                <div className="frame-img">
                  <div data-src="/web/20200130114425oe_/http://willkayachay.org/images/about/top-2.jpg"></div>
                </div>
              </div>

              <section id="top">
                <div className="cell">
                  <h1>About</h1>
                </div>
              </section>

              <section id="story">
  <div className="text">
    <h2>Our Story</h2>
    <div className="keyline"></div>
    <div className="col">
      <p>Hannah Rae Porst’s work in Q’eros began in 2010 when she lived among its people while researching the intersection of indigenous culture and global development. During a community dinner on the eve of her departure she asked village parents how she could thank them for their hospitality.</p>
      <p>There was initial talk about soccer shoes, but what they really needed, they told her, was a school.</p>
      <p>A Kathryn Davis Peace Prize winner as a senior in college,&nbsp;working with the Q’eros people Hannah raised funds for, founded and built the first primary school in the village of Ch’allmachimpana. She moved to Cusco in 2011 to continue her work there.</p>
    </div>
    <div className="col">
      <p>In 2012, Hannah founded a legal Peruvian NGO called Willka Yachay (Quechua for sacred wisdom) to develop education that enables young Q’eros to know their history and rights, avoid exploitation, build meaningful lives and develop their communities.</p>
      <p>Hannah is inspired by the Q’eros people. She adores the little kids and teenagers and respects and admires them and their parents for the love, warmth, perseverance, humor and integrity with which they confront the adversity of their daily lives.</p>
      <p>Despite harsh conditions, the Q’eros people endure. Willka Yachay’s goal is to help them thrive and share their wisdom. </p>
    </div>
  </div>
              </section>
              
              <section className="cta">
  <div className="wrapper">
    <p><i>Read a letter from our Director</i></p>
    <a href="/web/20200130114425/http://willkayachay.org/blog/2014/9/letter-from-our-director/" className="arrow-link">
      <div className="arrow-link-inner">
        <h3>Why&nbsp;We&nbsp;Do<br/>Our&nbsp;Work</h3>
        <div className="arrow-wrap">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30.7 19.7" enable-background="new 0 0 30.7 19.7"><g stroke="#533B3A" stroke-miterlimit="10" fill="none"><path d="M0 9.9h30M20.5 19.4l9.5-9.5-9.5-9.5"></path></g></svg>
        </div>
      </div>
      <div className="arrow-link-inner hover">
        <h3>Why&nbsp;We&nbsp;Do<br/>Our&nbsp;Work</h3>
      </div>
    </a>
  </div>
              </section>
              
              <section id="team">

                <div className="team">
                  <h2>Our Team</h2>
                  <div className="keyline"></div>
                  <ul>
                    {OurTeam.array.map(member => (
                      teamItem(member)
                    ))}
                  </ul>
                </div>

                <div className="expedition-team">
                  <h2>Expedition Team</h2>
                  <div className="keyline"></div>
                  <ul>
                    {ExpeditionTeam.array.map(member => (
                      teamItem(member)
                    ))}
                  </ul>
                </div>

                <div className="allies">
                  <h2>Our Allies &amp; Supporters</h2>
                  <div className="keyline"></div>
                  <ul>
                    {Allies.array.map(member => (
                      <li key={member.name}>
                        <p>
                          {member.name}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
                
              </section>
              
            </div> 
          </div>
        </div>
      </div>
    </>
  )
}



