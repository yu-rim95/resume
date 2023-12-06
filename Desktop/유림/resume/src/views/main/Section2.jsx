import React from 'react'
import '../../App.scss'
import { Link } from 'react-router-dom'


function Section2() {
  return (
    <>
    <section className='section2'>
        <div className='cont'>
            <h1>경력<em>🎈</em></h1>
            <article>
                <div className='row-left'>
                    <h2>닥터빌드<em>.</em></h2>
                    <p>Frontend Developer</p>
                    <p>2023.05.02 ~ 재직중</p>
                    <p>Angular,TypeScript,Java,React</p>
                    <Link to="https://aicon.city/home" target='blank'>https://aicon.city/home</Link>
                    <Link to="https://drbuild.co.kr/" target='blank'>https://drbuild.co.kr</Link>
                    <Link to="https://blog.aicon.city/" target='blank'>https://blog.aicon.city</Link>
                </div>
                <div className='row-right'>
                    <h3>프롬테크 IT사업부분 프론트개발</h3>
                    <ul>
                        <li>자사사이트 전반적인 프론트 개발 & 퍼블</li>
                        <li>어드민 사이트 템플릿을 사용한 프론트 개발 & 퍼블</li>
                        <li>자사블로그사이트 기획및 스토리북 설계</li>
                        <li>자사블로그사이트 프론트개발 & 퍼블</li>
                        <li>자사사이트 공적장부이벤트페이지 공부24전체 퍼블</li>
                        <li>이외에 자사 사이트 계정 및 도메인 정보 관리</li>
                        <li>aicon.pro등 php로 구성된 자사 사이트 유지보수</li>
                    </ul>
                </div>
            </article>
            <article>
                <div className='row-left'>
                    <h2>트라이씨클<em>.</em></h2>
                    <p>Web Publisher</p>
                    <p>2021.09.23. ~ 2023.01.27</p>
                    <p>jQuery,JavaScript ,SCSS,HTML,Angular</p>
                    <Link to="https://www.halfclub.com/main" target='blank'>하프클럽</Link>
                    <Link to="https://nm.boribori.co.kr/?cateType=D06599" target='blank'>보리보리</Link>
                </div>
                <div className='row-right'>
                    <h3>서비스플랫폼팀 웹 퍼블리싱</h3>
                    <ul>
                        <li>하프클럽/보리보리 PC/모바일 이벤트 페이지 제작 </li>
                        <li>기획전외 전체페이지 운영 퍼블리싱</li>
                        <li>상품상세 리스트 상품평 전체퍼블리싱</li>
                        <li>하프클럽/보리보리 PC/모바일 운영 퍼블리싱</li>
                        <li>행사 프로젝트 일정 관리</li>
                        <li>이벤트페이지 템플릿 제작</li>
                        <li>회사 내 평가제도 개편관련 차트표 퍼블리싱</li>
                        <li>회사 내 백오피스 페이지세팅 템플릿 퍼블리싱</li>
                        <li>외주 인력 일정조율</li>
                    </ul>
                </div>
            </article>
        </div>
    </section>
</>
  )
}

export default Section2
