import React, { useEffect, useRef } from "react";
import { color, motion } from "framer-motion";
import { MapPin, Train, Phone, Building2, Car } from "lucide-react";
import TysusLogo from "../assets/TYSUS2.png";
import TysusLogoMob from "../assets/TYSUS.png";

function Company() {
  const mapRef = useRef(null);

  useEffect(() => {
    if (window.kakao && window.kakao.maps) {
      window.kakao.maps.load(() => {
        const position = new window.kakao.maps.LatLng(37.436803, 126.903591);
        const options = {
          center: position,
          level: 4,
        };

        const map = new window.kakao.maps.Map(mapRef.current, options);

        // --- 1. 여기부터 고정 설정 추가 ---
        map.setDraggable(false); // 마우스 드래그로 지도 이동 막기
        map.setZoomable(false); // 마우스 휠로 지도 확대/축소 막기
        // -------------------------------

        const marker = new window.kakao.maps.Marker({
          position: position,
          map: map,
        });

        const infowindow = new window.kakao.maps.InfoWindow({
          content:
            '<div style="padding:10px;font-size:14px;font-weight:600;color:#1a2a4a;">태영스텐레스</div>',
        });
        infowindow.open(map, marker);

        // --- 2. 지도 컨트롤(줌 버튼)은 필요 없으므로 삭제하거나 주석 처리 ---
        // const zoomControl = new window.kakao.maps.ZoomControl();
        // map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT);
      });
    }
  }, []);

  return (
    <div className="page-container">
      <motion.div
        className="page-header"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>회사 소개</h1>
        <p>스테인리스 전문 기업 태영스텐레스입니다.</p>
      </motion.div>

      {/* CEO 인사말 섹션 */}
      <motion.section
        className="company-section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h2
          className="section-title"
          style={{ textAlign: "left", marginBottom: "2rem" }}
        >
          CEO 인사말
        </h2>
        <div className="ceo-greeting">
          <div className="ceo-image">
            <picture style={{ width: "100%", height: "100%" }}>
              {/* 768px 이하일 때 TYSUS2.png를 보여줌 */}
              <source srcSet={TysusLogoMob} media="(max-width: 768px)" />

              {/* 기본값 및 768px 초과일 때 TYSUS.png를 보여줌 */}
              <img
                src={TysusLogo}
                alt="TYSUS Logo"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover", // 3:4 비율 이미지가 200px 높이에 꽉 차게 조절
                  borderRadius: "12px",
                  display: "block",
                }}
              />
            </picture>
          </div>
          <div className="ceo-content">
            <h3>
              "변하지 않는 가치,
              <br />
              스텐레스의 미래를 엽니다."
            </h3>
            <p>
              안녕하십니까, 태영스텐레스입니다.
              <br />
              <br />
              우선 저희 태영스텐레스 홈페이지를 방문해 주신 여러분께 진심으로
              감사의 말씀을 드립니다. <br />
              저희는
              <span style={{ color: "#2c4a7c", fontWeight: 700 }}>
                스텐레스를 전문으로 취급
              </span>
              하고 있습니다.
              <br />
              <br />
              다각화를 통해 지속적으로 성장하는 회사, 든든한 내실을 다진 믿음을
              줄 수 있는 회사가 되기 위해 노력할 것이며 그 결실이 고객
              여러분에게 돌아갈 수 있도록 최선을 다하겠습니다. 앞으로 보다 나은
              태영스텐레스가 되도록 노력하겠습니다. 감사합니다.
              <br />
              <br />
              대표 김형길
            </p>
          </div>
        </div>
      </motion.section>

      {/* 오시는 길 섹션 */}
      <motion.section
        className="company-section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2
          className="section-title"
          style={{ textAlign: "left", marginBottom: "2rem" }}
        >
          오시는 길
        </h2>
        <div className="map-container">
          {/* 카카오맵 영역 */}
          <div
            ref={mapRef}
            style={{
              width: "100%",
              height: "400px",
              background: "#f1f5f9",
            }}
          >
            {/* 카카오맵 API 키가 없을 경우 안내 메시지 */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                color: "#64748b",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <MapPin size={48} color="#2c4a7c" />
              <p>카카오맵 API 키를 설정해주세요</p>
              <p style={{ fontSize: "0.85rem", color: "#94a3b8" }}>
                index.html에서 YOUR_KAKAO_APP_KEY를 실제 키로 교체하세요
              </p>
            </div>
          </div>

          <div className="location-info">
            <div className="location-item">
              <div className="location-icon">
                <MapPin size={18} color="#2c4a7c" />
              </div>
              <div>
                <h4>주소</h4>
                <p>
                  서울특별시 금천구 시흥대로 46, 12동 1층 106호(시흥동,
                  중앙철재종합상가)
                </p>
              </div>
            </div>
            <div className="location-item">
              <div className="location-icon">
                <Train size={18} color="#2c4a7c" />
              </div>
              <div>
                <h4>대중교통</h4>
                <p>지하철 1호선 석수역 하차 후 도보 5분</p>
              </div>
            </div>
            <div className="location-item">
              <div className="location-icon">
                <Car size={18} color="#2c4a7c" />
              </div>
              <div>
                <h4>자가용</h4>
                <p>강남순환로 소하 IC 진출 후 5분</p>
              </div>
            </div>
            <div className="location-item">
              <div className="location-icon">
                <Phone size={18} color="#2c4a7c" />
              </div>
              <div>
                <h4>연락처</h4>
                <p>02-893-5734</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default Company;
