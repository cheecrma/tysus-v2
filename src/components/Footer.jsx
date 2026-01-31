import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-brand">
          <h4>TYSUS 태영스텐레스</h4>
          <p>
            스테인리스 전문 기업으로서
            <br />
            최고의 품질과 서비스를 제공합니다.
          </p>
        </div>
        <div className="footer-links">
          <h5>바로가기</h5>
          <ul>
            <li><Link to="/company">회사소개</Link></li>
            <li><Link to="/products">제품소개</Link></li>
            <li><Link to="/contact">문의처</Link></li>
          </ul>
        </div>
        <div className="footer-links">
          <h5>연락처</h5>
          <ul>
            <li><a href="tel:031-123-4567">TEL: 031-123-4567</a></li>
            <li><a href="mailto:info@tysus.co.kr">info@tysus.co.kr</a></li>
            <li><span style={{ color: "rgba(255,255,255,0.7)" }}>FAX: 031-123-4568</span></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          대표자: 홍길동 | 사업자등록번호: 123-45-67890
          <br />
          주소: 경기도 시흥시 공단대로 1234 (정왕동)
        </p>
        <p>
          © 2026 Taeyoung Stainless Co., Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
