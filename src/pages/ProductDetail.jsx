import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Phone, ChevronRight } from "lucide-react";
import LazyImage from "../components/LazyImage";

// 제품 이미지 import
import coilImg from "../assets/스테인리스 코일.png";
import plateImg from "../assets/스테인리스 판.png";
import plateCoilImg from "../assets/스테인리스 판, 코일.png";
import pipeImg from "../assets/배관용 파이프.jpg";
import pipeSpecImg from "../assets/배관용 스테인리스 규격표.png";
import structurePipeImg from "../assets/구조용파이프.jpg";
import circularPipeImg from "../assets/기계구조용_원형강관.png";
import rectangularPipeImg from "../assets/기계 구조용_직사각 강관.png";
import seamlessPipeImg from "../assets/심리스 강관.png";
import generalPipeImg from "../assets/일반 배관용 스테인리스 파이프.png";
import elbowImg from "../assets/배관용 엘보.png";
import elbowImg2 from "../assets/스테인리스 배관용 엘보.png";
import teeImg from "../assets/배관용 티.png";
import flangeImg from "../assets/스테인리스 배관용 플렌지.jpg";
import nippleImg from "../assets/배관용 니플.webp";
import valveImg from "../assets/밸브.jpg";
import angleImg from "../assets/스테인리스 앵글, 평철, 환봉.png";
import angleSpecImg from "../assets/스테인리스 앵글, 평철, 환봉 규격표.png";
import gutterImg from "../assets/물홈통.jpg";
import chemicalImg from "../assets/화학성분 및 용도.jpg";

// 제품 데이터
const productsData = {
  "stainless-coil": {
    id: "stainless-coil",
    name: "스테인리스 코일",
    category: "코일/판재",
    description: "다양한 두께와 폭으로 제공되는 고품질 스테인리스 코일",
    mainImage: coilImg,
    detailImages: [coilImg, plateCoilImg],
    features: [
      "다양한 두께 (0.3mm ~ 6.0mm) 제공",
      "폭 규격 맞춤 제작 가능",
      "우수한 내식성 및 내열성",
      "표면 처리 옵션 다양",
    ],
    specs: [
      { label: "재질", value: "STS 304, 316, 316L, 430 등" },
      { label: "두께", value: "0.3mm ~ 6.0mm" },
      { label: "폭", value: "1000mm ~ 1524mm (맞춤 가능)" },
      { label: "표면", value: "2B, BA, HL, No.4, Mirror 등" },
    ],
    applications: ["주방기기", "건축자재", "자동차 부품", "화학설비"],
  },
  "stainless-plate": {
    id: "stainless-plate",
    name: "스테인리스 판재",
    category: "코일/판재",
    description: "정밀 가공된 평활도 높은 스테인리스 판재",
    mainImage: plateImg,
    detailImages: [plateImg, plateCoilImg],
    features: [
      "고정밀 평탄도 보장",
      "다양한 사이즈 절단 가능",
      "표면 품질 우수",
      "맞춤 규격 제작",
    ],
    specs: [
      { label: "재질", value: "STS 304, 316, 316L, 430 등" },
      { label: "두께", value: "1.0mm ~ 100mm" },
      { label: "사이즈", value: "4x8자, 5x10자 (맞춤 가능)" },
      { label: "표면", value: "2B, HL, No.4, Mirror 등" },
    ],
    applications: ["산업설비", "건축 내외장", "조리기구", "의료기기"],
  },
  "piping-pipe": {
    id: "piping-pipe",
    name: "배관용 파이프",
    category: "파이프",
    description: "내식성이 뛰어난 산업용 스테인리스 배관 파이프",
    mainImage: pipeImg,
    detailImages: [pipeImg, generalPipeImg, pipeSpecImg],
    features: [
      "뛰어난 내식성",
      "다양한 규격 보유",
      "용접 및 이음새 품질 우수",
      "KS 규격 준수",
    ],
    specs: [
      { label: "재질", value: "STS 304, 316L" },
      { label: "규격", value: "6A ~ 300A" },
      { label: "스케줄", value: "Sch.5S, 10S, 40S, 80S" },
      { label: "길이", value: "6M (맞춤 절단 가능)" },
    ],
    applications: ["화학플랜트", "식품공장", "제약설비", "수처리시설"],
  },
  "structure-pipe": {
    id: "structure-pipe",
    name: "구조용 파이프",
    category: "파이프",
    description: "건축 및 산업 구조물용 고강도 스테인리스 파이프",
    mainImage: structurePipeImg,
    detailImages: [
      structurePipeImg,
      circularPipeImg,
      rectangularPipeImg,
      seamlessPipeImg,
    ],
    features: [
      "높은 강도와 내구성",
      "원형 및 각형 규격 다양",
      "건축 구조물 적합",
      "심리스/용접 제품 보유",
    ],
    specs: [
      { label: "재질", value: "STS 304, 316" },
      { label: "형태", value: "원형, 사각, 직사각" },
      { label: "두께", value: "1.0mm ~ 10mm" },
      { label: "길이", value: "6M (맞춤 절단 가능)" },
    ],
    applications: ["건축 구조물", "핸드레일", "인테리어", "기계 구조물"],
  },
  elbow: {
    id: "elbow",
    name: "배관용 엘보",
    category: "피팅",
    description: "배관 방향 전환을 위한 고품질 엘보 피팅",
    mainImage: elbowImg,
    detailImages: [elbowImg, elbowImg2],
    features: [
      "90도, 45도 각도 제공",
      "LR(Long Radius), SR(Short Radius) 옵션",
      "완벽한 용접 품질",
      "다양한 규격 보유",
    ],
    specs: [
      { label: "재질", value: "STS 304, 316L" },
      { label: "규격", value: "15A ~ 300A" },
      { label: "각도", value: "45°, 90°, 180°" },
      { label: "타입", value: "용접형, 나사형" },
    ],
    applications: ["배관 시스템", "화학플랜트", "식품설비", "수처리"],
  },
  tee: {
    id: "tee",
    name: "배관용 티",
    category: "피팅",
    description: "배관 분기를 위한 T자형 피팅",
    mainImage: teeImg,
    detailImages: [teeImg],
    features: [
      "동경 및 이경 티 제공",
      "완벽한 용접 품질",
      "압력 테스트 통과",
      "다양한 규격 보유",
    ],
    specs: [
      { label: "재질", value: "STS 304, 316L" },
      { label: "규격", value: "15A ~ 300A" },
      { label: "타입", value: "동경티, 이경티" },
      { label: "연결", value: "용접형, 나사형" },
    ],
    applications: ["배관 분기", "화학플랜트", "식품공장", "제약설비"],
  },
  flange: {
    id: "flange",
    name: "배관용 플랜지",
    category: "피팅",
    description: "배관 연결을 위한 스테인리스 플랜지",
    mainImage: flangeImg,
    detailImages: [flangeImg, nippleImg],
    features: [
      "다양한 플랜지 타입",
      "정밀 가공 품질",
      "KS/JIS/ANSI 규격",
      "압력 등급별 제공",
    ],
    specs: [
      { label: "재질", value: "STS 304, 316L" },
      { label: "규격", value: "15A ~ 600A" },
      { label: "압력", value: "5K, 10K, 20K, 150LB, 300LB" },
      { label: "타입", value: "SO, WN, BL, SW, TH" },
    ],
    applications: ["배관 연결", "탱크 연결", "펌프 연결", "밸브 연결"],
  },
  valve: {
    id: "valve",
    name: "밸브",
    category: "밸브",
    description: "유량 제어를 위한 산업용 스테인리스 밸브",
    mainImage: valveImg,
    detailImages: [valveImg],
    features: [
      "다양한 밸브 타입",
      "정밀 유량 제어",
      "내식성 우수",
      "오래 사용 가능",
    ],
    specs: [
      { label: "재질", value: "STS 304, 316" },
      { label: "규격", value: "15A ~ 200A" },
      { label: "압력", value: "10K, 20K" },
      { label: "타입", value: "게이트, 글로브, 볼, 체크" },
    ],
    applications: ["유량 제어", "차단 밸브", "압력 조절", "역류 방지"],
  },
  "angle-flatbar-roundbar": {
    id: "angle-flatbar-roundbar",
    name: "앵글/평철/환봉",
    category: "형강",
    description: "건축 및 산업용 스테인리스 형강류",
    mainImage: angleImg,
    detailImages: [angleImg, angleSpecImg, gutterImg, chemicalImg],
    features: [
      "다양한 규격 보유",
      "고강도 및 내식성",
      "맞춤 절단 서비스",
      "건축/산업용 적합",
    ],
    specs: [
      { label: "재질", value: "STS 304, 316" },
      { label: "앵글", value: "25x25 ~ 100x100mm" },
      { label: "평철", value: "폭 20~150mm, 두께 3~20mm" },
      { label: "환봉", value: "직경 6mm ~ 300mm" },
    ],
    applications: ["건축 구조물", "기계 제작", "인테리어", "산업설비"],
  },
};

function ProductDetail() {
  const { productId } = useParams();
  const product = productsData[productId];
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return (
      <div
        className="page-container"
        style={{ textAlign: "center", paddingTop: "150px" }}
      >
        <h2 style={{ fontSize: "clamp(1.25rem, 5vw, 1.75rem)" }}>
          제품을 찾을 수 없습니다.
        </h2>
        <Link
          to="/products"
          className="btn-navy"
          style={{
            marginTop: "2rem",
            display: "inline-flex",
            fontSize: "clamp(0.875rem, 3vw, 1rem)",
          }}
        >
          <ArrowLeft size={18} />
          제품 목록으로
        </Link>
      </div>
    );
  }

  return (
    <div className="page-container">
      {/* 뒤로가기 */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        style={{ marginBottom: "clamp(1rem, 3vw, 1.5rem)" }}
      >
        <Link
          to="/products"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            color: "#64748b",
            textDecoration: "none",
            fontSize: "clamp(0.813rem, 2.5vw, 0.9rem)",
            fontWeight: 500,
          }}
        >
          <ArrowLeft size={18} />
          제품 목록
        </Link>
      </motion.div>

      {/* 제품 상세 헤더 */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "clamp(1.5rem, 4vw, 3rem)",
          marginBottom: "clamp(2rem, 5vw, 3rem)",
        }}
      >
        {/* 메인 이미지 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div
            style={{
              background: "#f8fafc",
              borderRadius: "clamp(12px, 3vw, 16px)",
              overflow: "hidden",
              border: "1px solid #e5e7eb",
            }}
          >
            <img
              src={product.detailImages[selectedImage]}
              alt={product.name}
              loading="lazy"
              style={{
                width: "100%",
                height: "clamp(250px, 50vw, 400px)",
                objectFit: "cover",
              }}
            />
          </div>

          {/* 썸네일 이미지 */}
          {product.detailImages.length > 1 && (
            <div
              style={{
                display: "flex",
                gap: "clamp(0.5rem, 2vw, 0.75rem)",
                marginTop: "clamp(0.75rem, 2vw, 1rem)",
                overflowX: "auto",
                paddingBottom: "0.5rem",
              }}
            >
              {product.detailImages.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  style={{
                    minWidth: "clamp(60px, 15vw, 80px)",
                    height: "clamp(60px, 15vw, 80px)",
                    borderRadius: "8px",
                    overflow: "hidden",
                    border:
                      selectedImage === idx
                        ? "2px solid #2c4a7c"
                        : "1px solid #e5e7eb",
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                >
                  <img
                    src={img}
                    alt=""
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              ))}
            </div>
          )}
        </motion.div>

        {/* 제품 정보 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span
            className="product-tag"
            style={{
              marginBottom: "clamp(0.75rem, 2vw, 1rem)",
              display: "inline-block",
              fontSize: "clamp(0.75rem, 2vw, 0.875rem)",
            }}
          >
            {product.category}
          </span>
          <h1
            style={{
              fontSize: "clamp(1.5rem, 5vw, 2rem)",
              fontWeight: 800,
              color: "#1a2a4a",
              marginBottom: "clamp(0.75rem, 2vw, 1rem)",
              lineHeight: 1.2,
            }}
          >
            {product.name}
          </h1>
          <p
            style={{
              color: "#64748b",
              fontSize: "clamp(0.938rem, 3vw, 1.1rem)",
              lineHeight: 1.7,
              marginBottom: "clamp(1.5rem, 4vw, 2rem)",
            }}
          >
            {product.description}
          </p>

          {/* 특징 */}
          <div style={{ marginBottom: "clamp(1.5rem, 4vw, 2rem)" }}>
            <h3
              style={{
                fontSize: "clamp(0.938rem, 3vw, 1rem)",
                fontWeight: 700,
                color: "#1a2a4a",
                marginBottom: "clamp(0.75rem, 2vw, 1rem)",
              }}
            >
              제품 특징
            </h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {product.features.map((feature, idx) => (
                <li
                  key={idx}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.75rem",
                    padding: "0.5rem 0",
                    color: "#475569",
                    fontSize: "clamp(0.875rem, 2.5vw, 1rem)",
                  }}
                >
                  <ChevronRight
                    size={16}
                    color="#2c4a7c"
                    style={{ flexShrink: 0, marginTop: "0.2rem" }}
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 문의 버튼 */}
          <Link
            to="/contact"
            className="btn-navy"
            style={{
              display: "inline-flex",
              fontSize: "clamp(0.875rem, 2.5vw, 1rem)",
              padding: "clamp(0.75rem, 2vw, 1rem) clamp(1.5rem, 4vw, 2rem)",
              width: "100%",
              justifyContent: "center",
            }}
          >
            <Phone size={18} />
            제품 문의하기
          </Link>
        </motion.div>
      </div>

      {/* 규격 정보 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{
          background: "#f8fafc",
          borderRadius: "clamp(12px, 3vw, 16px)",
          padding: "clamp(1.5rem, 4vw, 2rem)",
          marginBottom: "clamp(1.5rem, 4vw, 2rem)",
          border: "1px solid #e5e7eb",
        }}
      >
        <h3
          style={{
            fontSize: "clamp(1.063rem, 3.5vw, 1.25rem)",
            fontWeight: 700,
            color: "#1a2a4a",
            marginBottom: "clamp(1rem, 3vw, 1.5rem)",
          }}
        >
          제품 규격
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "clamp(1rem, 3vw, 1.5rem)",
          }}
        >
          {product.specs.map((spec, idx) => (
            <div key={idx}>
              <p
                style={{
                  fontSize: "clamp(0.75rem, 2vw, 0.85rem)",
                  color: "#64748b",
                  marginBottom: "0.25rem",
                }}
              >
                {spec.label}
              </p>
              <p
                style={{
                  fontSize: "clamp(0.875rem, 2.5vw, 1rem)",
                  fontWeight: 600,
                  color: "#1a2a4a",
                  wordBreak: "keep-all",
                }}
              >
                {spec.value}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* 적용 분야 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        style={{
          background: "#fff",
          borderRadius: "clamp(12px, 3vw, 16px)",
          padding: "clamp(1.5rem, 4vw, 2rem)",
          marginBottom: "clamp(2rem, 5vw, 3rem)",
          border: "1px solid #e5e7eb",
        }}
      >
        <h3
          style={{
            fontSize: "clamp(1.063rem, 3.5vw, 1.25rem)",
            fontWeight: 700,
            color: "#1a2a4a",
            marginBottom: "clamp(1rem, 3vw, 1.5rem)",
          }}
        >
          적용 분야
        </h3>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "clamp(0.5rem, 2vw, 0.75rem)",
          }}
        >
          {product.applications.map((app, idx) => (
            <span
              key={idx}
              style={{
                padding: "clamp(0.5rem, 2vw, 0.5rem) clamp(0.75rem, 3vw, 1rem)",
                background: "#f1f5f9",
                borderRadius: "20px",
                fontSize: "clamp(0.813rem, 2.5vw, 0.9rem)",
                color: "#475569",
              }}
            >
              {app}
            </span>
          ))}
        </div>
      </motion.div>

      {/* 추가 이미지 갤러리 */}
      {product.detailImages.length > 1 && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{ marginBottom: "clamp(2rem, 5vw, 3rem)" }}
        >
          <h3
            style={{
              fontSize: "clamp(1.063rem, 3.5vw, 1.25rem)",
              fontWeight: 700,
              color: "#1a2a4a",
              marginBottom: "clamp(1rem, 3vw, 1.5rem)",
            }}
          >
            상세 이미지
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "clamp(0.75rem, 2vw, 1rem)",
            }}
          >
            {product.detailImages.map((img, idx) => (
              <div
                key={idx}
                style={{
                  borderRadius: "12px",
                  overflow: "hidden",
                  border: "1px solid #e5e7eb",
                }}
              >
                <img
                  src={img}
                  alt=""
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "clamp(200px, 40vw, 250px)",
                    objectFit: "cover",
                  }}
                />
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* CTA */}
      <motion.div
        className="cta-box"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        style={{
          padding: "clamp(2rem, 6vw, 3rem) clamp(1.5rem, 4vw, 2rem)",
          textAlign: "center",
        }}
      >
        <h3 style={{ fontSize: "clamp(1.25rem, 4vw, 1.75rem)" }}>
          다른 제품도 확인해 보세요
        </h3>
        <p style={{ fontSize: "clamp(0.938rem, 3vw, 1.1rem)" }}>
          태영스텐레스의 다양한 스테인리스 제품을 만나보세요.
        </p>
        <Link
          to="/products"
          className="btn-navy"
          style={{
            fontSize: "clamp(0.875rem, 2.5vw, 1rem)",
            padding: "clamp(0.75rem, 2vw, 1rem) clamp(1.5rem, 4vw, 2rem)",
          }}
        >
          전체 제품 보기
        </Link>
      </motion.div>
    </div>
  );
}

export default ProductDetail;
