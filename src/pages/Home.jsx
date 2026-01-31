import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Factory,
  ShieldCheck,
  Truck,
  ChevronDown,
  Phone,
  Search,
} from "lucide-react";
import LazyImage from "../components/LazyImage";

// 제품 이미지 import
import coilImg from "../assets/스테인리스 코일.png";
import plateImg from "../assets/스테인리스 판.png";
import pipeImg from "../assets/배관용 파이프.jpg";

function Home() {
  const features = [
    {
      icon: Factory,
      title: "전문 생산 설비",
      description:
        "최적화된 생산 설비와 숙련된 기술력으로 고품질 스테인리스 제품을 생산합니다.",
    },
    {
      icon: ShieldCheck,
      title: "품질 보증",
      description:
        "철저한 품질 관리 시스템으로 신뢰할 수 있는 제품만을 공급합니다.",
    },
    {
      icon: Truck,
      title: "신속한 배송",
      description: "전국 어디든 빠르고 안전하게 배송해 드립니다.",
    },
  ];

  const products = [
    { name: "스테인리스 코일", image: coilImg },
    { name: "스테인리스 판재", image: plateImg },
    { name: "배관용 파이프", image: pipeImg },
  ];

  return (
    <div>
      {/* 히어로 섹션 */}
      <header className="hero">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          스테인리스 전문 기업
          <br />
          <span>태영스텐레스</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          품질과 신뢰를 바탕으로 최고의 스테인리스 제품을 공급합니다.
          <br />
          파이프, 판재, 코일 등 다양한 제품을 만나보세요.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <Link to="/products" className="btn-primary">
            <Search size={18} />
            제품 보기
          </Link>
          <Link to="/contact" className="btn-secondary">
            <Phone size={18} />
            문의하기
          </Link>
        </motion.div>

        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <span>Scroll</span>
          <ChevronDown size={20} />
        </motion.div>
      </header>

      {/* 주요 제품 미리보기 */}
      <section className="section">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">주요 제품</h2>
          <p className="section-subtitle">
            태영스텐레스의 고품질 스테인리스 제품을 소개합니다.
          </p>
        </motion.div>

        <div className="product-grid">
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="product-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="product-image">
                <LazyImage src={product.image} alt={product.name} />
              </div>
              <div className="product-content">
                <h3>{product.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          style={{ textAlign: "center", marginTop: "2.5rem" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link to="/products" className="btn-navy">
            전체 제품 보기
          </Link>
        </motion.div>
      </section>

      {/* 특징 섹션 */}
      <section
        className="features"
        style={{ background: "#f8fafc", padding: "5rem 2rem" }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-title">태영스텐레스를 선택하는 이유</h2>
            <p className="section-subtitle">
              오랜 경험과 노하우로 최상의 서비스를 제공합니다.
            </p>
          </motion.div>

          <div className="grid">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="card-icon">
                  <feature.icon size={26} color="#2c4a7c" />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 통계 섹션 */}
      <section className="stats-section">
        <motion.div
          className="stats-grid"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="stat-item">
            <h3>30+</h3>
            <p>년 업력</p>
          </div>
          <div className="stat-item">
            <h3>500+</h3>
            <p>거래 고객사</p>
          </div>
          <div className="stat-item">
            <h3>99%</h3>
            <p>고객 만족도</p>
          </div>
        </motion.div>
      </section>

      {/* CTA 섹션 */}
      <section className="section">
        <motion.div
          className="cta-box"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3>제품 문의 및 견적 요청</h3>
          <p>필요하신 제품이나 궁금하신 사항이 있으시면 연락주세요.</p>
          <Link to="/contact" className="btn-navy">
            <Phone size={18} />
            문의하기
          </Link>
        </motion.div>
      </section>
    </div>
  );
}

export default Home;
