import React from "react";
import { motion } from "framer-motion";
import { Phone, Printer, Mail, Clock, MapPin } from "lucide-react";

function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: "전화",
      value: "02-893-5734",
      description: "평일 09:00 - 18:00",
    },
    {
      icon: Printer,
      title: "팩스",
      value: "02-893-5742",
      description: "24시간 접수",
    },
    {
      icon: Mail,
      title: "이메일",
      value: "@",
      description: "영업 문의",
    },
    {
      icon: Clock,
      title: "업무시간",
      value: "09:00 ~ 18:00",
      description: "토/일/공휴일 휴무",
    },
  ];

  return (
    <div className="page-container">
      <motion.div
        className="page-header"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>문의처</h1>
        <p>궁금하신 사항은 언제든 연락주세요.</p>
      </motion.div>

      <div className="contact-grid">
        {contactInfo.map((item, index) => (
          <motion.div
            key={index}
            className="contact-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div className="contact-icon">
              <item.icon size={22} color="#2c4a7c" />
            </div>
            <h3>{item.title}</h3>
            <p>{item.value}</p>
            <span
              style={{
                fontSize: "0.85rem",
                color: "#64748b",
                marginTop: "0.25rem",
                display: "block",
              }}
            >
              {item.description}
            </span>
          </motion.div>
        ))}
      </div>

      <motion.div
        style={{
          background: "#f8fafc",
          borderRadius: "12px",
          border: "1px solid #e5e7eb",
          padding: "2rem",
          display: "flex",
          alignItems: "flex-start",
          gap: "1.5rem",
        }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "10px",
            background: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            border: "1px solid #e5e7eb",
          }}
        >
          <MapPin size={22} color="#2c4a7c" />
        </div>
        <div>
          <h3
            style={{
              fontSize: "1.15rem",
              marginBottom: "0.5rem",
              color: "#1a2a4a",
              fontWeight: 700,
            }}
          >
            본사 및 공장
          </h3>
          <p style={{ color: "#475569", lineHeight: "1.7" }}>
            서울특별시 금천구 시흥대로 46, 12동 1층 106호(시흥동,
            중앙철재종합상가)
            <br />
            <span style={{ color: "#64748b", fontSize: "0.9rem" }}>
              지하철 1호선 석수역 1번 출구 하차 후 도보 5분
            </span>
          </p>
        </div>
      </motion.div>

      <motion.div
        className="cta-box"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h3>빠른 상담이 필요하신가요?</h3>
        <p>전화 주시면 친절하게 상담해 드리겠습니다.</p>
        <a href="tel:02-893-5734" className="btn-navy">
          <Phone size={18} />
          전화 상담하기
        </a>
      </motion.div>
    </div>
  );
}

export default Contact;
