import './Header.scss';
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false); // 새로운 상태 추가
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    const handleScroll = () => {
      // 스크롤 위치에 따라 헤더를 숨기거나 나타나게 함
      if (window.scrollY > 50) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll); // 스크롤 이벤트 추가

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll); // 이벤트 리스너 제거
    };
  }, []);

  const handleMenuToggle = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <>
      <header className={`h_v1 ${isHidden ? 'hidden' : ''}`}>
        <nav className={isMobile ? 'mobile-nav' : 'desktop-nav'}>
          <NavLink to="/" className='logo'></NavLink>
          {isMobile ? (
            <div className="hamburger-menu" onClick={handleMenuToggle}>
              ☰
            </div>
          ) : (
            <div className='meun'>
              <NavLink to="/write" className={`write ${isActive('/write')}`}>
                <p>글작성</p>
              </NavLink>
              <NavLink to="/locker" className={`locker ${isActive('/locker')}`}>
                <p>보관함</p>
              </NavLink>
              <NavLink to="/login" className={`login ${isActive('/login')}`}>
                <p>로그인</p>
              </NavLink>
            </div>
          )}
        </nav>
        {isMobile && menuOpen && (
          <div className="mobile-menu">
            <div className='meun'>
              <NavLink to="/write" className={`write ${isActive('/write')}`}>
                <p>글작성</p>
              </NavLink>
              <NavLink to="/locker" className={`locker ${isActive('/locker')}`}>
                <p>보관함</p>
              </NavLink>
              <NavLink to="/login" className={`login ${isActive('/login')}`}>
                <p>로그인</p>
              </NavLink>
            </div>
          </div>
        )}
      </header>
    </>
  )
}

export default Header;
