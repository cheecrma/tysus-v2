import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";

// 제품 이미지 import
import coilImg from "../assets/스테인리스 코일.png";
import plateImg from "../assets/스테인리스 판.png";
import pipeImg from "../assets/배관용 파이프.jpg";
import structurePipeImg from "../assets/구조용파이프.jpg";
import elbowImg from "../assets/배관용 엘보.png";
import teeImg from "../assets/배관용 티.png";
import flangeImg from "../assets/스테인리스 배관용 플렌지.jpg";
import valveImg from "../assets/밸브.jpg";
import angleImg from "../assets/스테인리스 앵글, 평철, 환봉.png";

function Products() {
  const products = [
    {
      id: "stainless-coil",
      name: "스테인리스 코일",
      category: "코일/판재",
      description: "다양한 두께와 폭으로 제공되는 고품질 스테인리스 코일",
      image: coilImg
    },
    {
      id: "stainless-plate",
      name: "스테인리스 판재",
      category: "코일/판재",
      description: "정밀 가공된 평활도 높은 스테인리스 판재",
      image: plateImg
    },
    {
      id: "piping-pipe",
      name: "배관용 파이프",
      category: "파이프",
      description: "내식성이 뛰어난 산업용 스테인리스 배관 파이프",
      image: pipeImg
    },
    {
      id: "structure-pipe",
      name: "구조용 파이프",
      category: "파이프",
      description: "건축 및 산업 구조물용 고강도 스테인리스 파이프",
      image: structurePipeImg
    },
    {
      id: "elbow",
      name: "배관용 엘보",
      category: "피팅",
      description: "배관 방향 전환을 위한 고품질 엘보 피팅",
      image: elbowImg
    },
    {
      id: "tee",
      name: "배관용 티",
      category: "피팅",
      description: "배관 분기를 위한 T자형 피팅",
      image: teeImg
    },
    {
      id: "flange",
      name: "배관용 플랜지",
      category: "피팅",
      description: "배관 연결을 위한 스테인리스 플랜지",
      image: flangeImg
    },
    {
      id: "valve",
      name: "밸브",
      category: "밸브",
      description: "유량 제어를 위한 산업용 스테인리스 밸브",
      image: valveImg
    },
    {
      id: "angle-flatbar-roundbar",
      name: "앵글/평철/환봉",
      category: "형강",
      description: "건축 및 산업용 스테인리스 형강류",
      image: angleImg
    }
  ];

  return (
    <div className="page-container">
      <motion.div
        className="page-header"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>제품 소개</h1>
        <p>태영스텐레스의 고품질 스테인리스 제품 라인업</p>
      </motion.div>

      <div className="product-grid">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <Link to={`/products/${product.id}`} style={{ textDecoration: "none" }}>
              <div className="product-card">
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-content">
                  <span className="product-tag">{product.category}</span>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="cta-box"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h3>원하시는 제품을 찾지 못하셨나요?</h3>
        <p>맞춤 제품 제작 및 특수 규격 문의를 받고 있습니다.</p>
        <Link to="/contact" className="btn-navy">
          <Phone size={18} />
          문의하기
        </Link>
      </motion.div>
    </div>
  );
}

export default Products;
