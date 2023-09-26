import { Link, NavLink } from 'react-router-dom'
import './Footer.scss'
import React from 'react'

function Footer() {
  return (
    <>
      <footer className='footer'>
        <div className="footer-inner">
            <div className="footer-info">
                <Link href="/terms">이용약관</Link> 
                <Link href="/terms?term=private">개인정보취급방침</Link> 
                <Link href="/terms?term=other">제3자 정보제공동의</Link>
                <p> (주)닥터빌드ㅣ대표 민경호ㅣ사업자등록번호 733-88-00961 
                 통신판매업 신고번호 2019-서울강남-93021  서울특별시 강남구 테헤란로 63길 9, 2층 | 대표번호 : 1544-8383 </p>
            </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
