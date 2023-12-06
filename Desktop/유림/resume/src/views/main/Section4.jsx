import React from 'react'
import '../../App.scss'
import { Link } from 'react-router-dom'

const Section4 = () => {
  return (
    <>
        <section className='section4'>
            <div className='cont'>
                <h1>Project<em>🎈</em></h1>
                <article>
                    <div className="item">
                        <div className="polaroid"><img src={process.env.PUBLIC_URL + '/images/blog_img.png'} alt='블로그사이트'/>
                        <Link className="caption" to="https://velog.io/@yudidip" target='blank'>저의 블로그사이트입니다</Link>
                        </div>
                    </div>
                    <div>
                        <h3>개인적으로 Java 알고리즘이나 공부하고싶었던 내용들을 정리한 저의<strong>블로그</strong>입니다!</h3>
                        <p>게시물 업데이트중!</p>
                        <Link className="caption" to="https://velog.io/@yudidip">이미지 하단 텍스트 클릭시 사이트로 이동됩니다!👉</Link>
                    </div>
                </article>
                <article>
                    <div className="item">
                        <div className="polaroid"><img src={process.env.PUBLIC_URL + '/images/img02.png'} alt='블만블사이트'/>
                        <Link className="caption" to="#">블만블 사이트입니다</Link>
                        </div>
                    </div>
                    <div>
                        <h3>
                            팀원들과함께 기획부터 모든 개발까지 작업하고있는, &nbsp;<strong>Vue</strong>를 이용한 사이트입니다!
                            현재는 백단코드로직 구현중이며 추후에는<strong>Docker</strong>를 이용하여 서버배포도 완료할 예정입니다!
                        </h3>
                        <p>전 직장동료들과 퇴근후 스터디시간마다 작업 진행중 에있습니다</p>
                        <Link className="caption" to="#">현재 운영중인 페이지가없습니다!</Link>
                    </div>
                </article>
                <article>
                    <div className="item">
                        <div className="polaroid"><img src={process.env.PUBLIC_URL + '/images/img03.png'} alt='쇼핑몰 웹 사이트'/>
                            <Link className="caption" to="https://sparkling-unicorn-9bf787.netlify.app/" target='blank'>쇼핑몰 웹 사이트</Link>
                        </div>
                    </div>
                    <div>
                        <h3>
                            개인적으로 제작한 쇼핑몰 웹 사이트로  <strong>React</strong> 를 이용한 사이트입니다!
                            유저가 메뉴와 상품들을 볼수있는 데이터 api 를 구현하여 끌고와 페이지 구현과, 상품검색기능, 상품상세를 보기위한 로그인기능과 로그아웃기능을 구현했습니다!
                        </h3>
                        <p>2023.3.20 ~2023.3.27</p>
                        <Link className="caption" to="https://sparkling-unicorn-9bf787.netlify.app/">이미지 하단 텍스트 클릭시 사이트로 이동됩니다!👉</Link>
                    </div>
                </article>
                <article>
                    <div className="item">
                        <div className="polaroid"><img src={process.env.PUBLIC_URL + '/images/img04.png'} alt='점심메뉴사이트'/>
                        <Link className="caption" to="#">점심메뉴 프로젝트입니다</Link>
                        </div>
                    </div>
                    <div>
                        <h3>점심 메뉴 추천 게임 사이트로<strong>React</strong>를 이용한 점심메뉴 랜덤선택 게임 프로젝트입니다! 현재는 페이지 운영은하지않고 <strong>git</strong> 으로만 관리중입니다!</h3>
                        <p>2023.07.27~2023.07.28</p>
                        <Link className="caption" to="https://github.com/yu-rim95/lunch-menu-game" target='blank'>깃으로 보기👉</Link>
                    </div>
                </article>
                <article>
                    <div className="item">
                        <div className="polaroid"><img src={process.env.PUBLIC_URL + '/images/img05.png'} alt='개인포트폴리오'/>
                        <Link className="caption" to="https://yu-rim95.github.io/cherry/" target='blank'>저의 개인포트폴리오 입니다</Link>
                        </div>
                    </div>
                    <div>
                        <h3><strong>React</strong>를 이용한 개인 포트폴리오 페이지 입니다. 혼자 구성하고 작업을 진행하다보니 많은 오타와 소스코드가 정리되지않은 부분이 있지만 그부분은 계속 업데이트해 나가고있습니다! </h3>
                        <p>figma 를 이용해여 프로젝트 페이지마다 연결구성요소들과 프로젝트 전체 페이지 구성도를 제작하였습니다.</p>
                        <Link className="caption" to="https://www.notion.so/01-React-915e2c447b0047b0886b0073af9118ad?pvs=4" target='blank'>노션으로 보기👉</Link>
                    </div>
                </article>
                <article>
                    <div className="item">
                        <div className="polaroid"><img src={process.env.PUBLIC_URL + '/images/img06.png'} alt='퍼블리셔 포트폴리오'/>
                        <Link className="caption" to="https://publisherportpc.netlify.app/" target='blank'>저의 퍼블리셔 포트폴리오 입니다</Link>
                        </div>
                    </div>
                    <div>
                        <h3><strong>React</strong>를 이용한 저의 퍼블리셔 포트폴리오 페이지 입니다. 퍼블포트폴리오로 로딩페이지와 여러가지 <strong>애니메이션</strong>과 팝업, 탭등을 다양하게 구현해서 페이지를 구성해보았습니다!</h3>
                        <p>모바일 반응형은 아직 미구현입니다 PC로만 확인해주세요! 추후 업데이트 예정입니다!</p>
                        <Link className="caption" to="https://publisherportpc.netlify.app/" target='blank'>이미지 하단 텍스트 클릭시 사이트로 이동됩니다!👉</Link>
                    </div>
                </article>
            </div>
        </section>
    </>
  )
}

export default Section4
