import './Main.scss'
import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/header/Header'
import AllBlog from './all_blog/AllBlog'
import BestBlog from './best_blog/BestBlog'
import UserBlog from './user_blog/UserBlog'
import Footer from '../../components/footer/Footer'

function Main() {
  return (
    <>
        <Header/>
        <section className='main_wrap'>
            <div className='inner'>
                    <div className='s1_tit'>
                        <h1>AiCON BLOG</h1>
                        <p>
                            건축 이야기부터 부동산, 요즘 이슈까지 다양한 글을 만나보세요
                        </p>
                    </div>
                </div>
        </section>
        <AllBlog/>
        <BestBlog/>
        <UserBlog/>
        <section className='main_wrap2'>
          <div className='inner'>
                  <div className='s2_tit'>
                      <h1>AI 건축 계획검토 AiCON</h1>
                      <p>
                      비교견적, 도급계약, 공정/기성관리 AI인공지능 안심 건축 플랫폼 지금 바로 시작해보세요!
                      </p>
                      <Link to="https://aicon.city/home" target='blank'>AI건축 계획 바로가기 →</Link>
                  </div>
            </div>
        </section>
        <Footer/>
    </>
  )
}

export default Main
