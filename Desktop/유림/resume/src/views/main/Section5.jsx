import React from 'react'
import '../../App.scss'
import { Link } from 'react-router-dom'

const Section5 = () => {
  return (
    <>
        <section className='section5'>
        <div className='cont'>
            <h1><span>"Contact</span><span>✉"</span></h1>
            <article>
                    <div className='row-center'>
                        <h2>함께 흥미로운 작업을 만들어보고 싶다면 혹은 조직 내에서 해야할 일이 있는데 담당할 사람이 필요하다면 연락 주세요.설레는 마음으로 기다리고 있겠습니다<em>.</em></h2>
                        <ul>
                            <li>
                                <Link to="https://github.com/yu-rim95" target='blank'>깃허브</Link>
                            </li>
                            <li>
                                <Link to="https://www.notion.so/2506b0d445544109b1b218fafde4672d?pvs=4" target='blank'>기술이력서 노션 페이지</Link>
                            </li>
                        </ul>
                    </div>
             </article>
        </div>
        </section>
    </>
  )
}

export default Section5
