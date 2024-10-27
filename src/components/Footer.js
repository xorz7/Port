// Footer.js
import React, { useEffect } from 'react';
import './Footer.css';

function Footer() {
  useEffect(() => {
    const icons = document.querySelectorAll('.icon-image');

    icons.forEach(icon => {
      const originalSrc = icon.src;
      const hoverSrc = icon.getAttribute('data-hover');

      icon.addEventListener('mouseenter', () => {
        icon.src = hoverSrc;
      });

      icon.addEventListener('mouseleave', () => {
        icon.src = originalSrc;
      });
    });

    return () => {
      icons.forEach(icon => {
        icon.removeEventListener('mouseenter', () => {});
        icon.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  return (
    <footer className="footer">
      <a href="mailto:singhvinit3108@gmail.com" target="_blank" rel="noopener noreferrer" className="icon">
        <img
          src="/images/gmailbefore.png"
          alt="Gmail"
          className="icon-image"
          data-hover="/images/gmailAfter.png"
        />
      </a>
      <a href="https://www.linkedin.com/in/singhvinit3108/" target="_blank" rel="noopener noreferrer" className="icon">
        <img
          src="/images/linkedinBefore.png"
          alt="LinkedIn"
          className="icon-image"
          data-hover="/images/linkedinAfter.png"
        />
      </a>
      <a href="https://www.github.com/xorz7" target="_blank" rel="noopener noreferrer" className="icon">
        <img
          src="/images/gitBefore.png"
          alt="LinkedIn"
          className="icon-image"
          data-hover="/images/gitAfter.png"
          style={{width:"45px", height: "45px"}}
        />
      </a>
    </footer>
  );
}

export default Footer;
