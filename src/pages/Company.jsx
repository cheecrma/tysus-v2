import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { MapPin, Train, Phone, Building2, Car } from "lucide-react";

function Company() {
  const mapRef = useRef(null);

  useEffect(() => {
    // 카카오맵 초기화
    if (window.kakao && window.kakao.maps) {
      window.kakao.maps.load(() => {
        // 시화공단 위치 (예시 좌표 - 실제 주소에 맞게 수정 필요)
        const position = new window.kakao.maps.LatLng(37.3419, 126.7351);

        const options = {
          center: position,
          level: 3
        };

        const map = new window.kakao.maps.Map(mapRef.current, options);

        // 마커 생성
        const marker = new window.kakao.maps.Marker({
          position: position,
          map: map
        });

        // 인포윈도우 생성
        const infowindow = new window.kakao.maps.InfoWindow({
          content: '<div style="padding:10px;font-size:14px;font-weight:600;color:#1a2a4a;">태영스텐레스</div>'
        });
        infowindow.open(map, marker);

        // 지도 컨트롤 추가
        const zoomControl = new window.kakao.maps.ZoomControl();
        map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT);
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
        <h2 className="section-title" style={{ textAlign: "left", marginBottom: "2rem" }}>
          CEO 인사말
        </h2>
        <div className="ceo-greeting">
          <div className="ceo-image">
            <Building2 size={64} color="#2c4a7c" strokeWidth={1} />
          </div>
          <div className="ceo-content">
            <h3>
              "변하지 않는 가치,
              <br />
              스텐레스의 미래를 엽니다."
            </h3>
            <p>
              안녕하십니까, 태영스텐레스 대표이사입니다.
              <br /><br />
              저희 태영스텐레스는 창립 이래 오직 최고의 품질만을 고집하며 성장해왔습니다.
              고객 여러분의 신뢰가 있었기에 지금의 태영이 있을 수 있었습니다.
              <br /><br />
              앞으로도 끊임없는 기술 개발과 혁신으로 보답하겠습니다.
              대한민국 소재산업의 미래를 함께 만들어 가겠습니다.
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
        <h2 className="section-title" style={{ textAlign: "left", marginBottom: "2rem" }}>
          오시는 길
        </h2>
        <div className="map-container">
          {/* 카카오맵 영역 */}
          <div
            ref={mapRef}
            style={{
              width: "100%",
              height: "400px",
              background: "#f1f5f9"
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
                gap: "1rem"
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
                <p>경기도 시흥시 공단대로 1234 (정왕동, 시화공단)</p>
              </div>
            </div>
            <div className="location-item">
              <div className="location-icon">
                <Train size={18} color="#2c4a7c" />
              </div>
              <div>
                <h4>대중교통</h4>
                <p>지하철 4호선 정왕역 하차 후 택시 10분</p>
              </div>
            </div>
            <div className="location-item">
              <div className="location-icon">
                <Car size={18} color="#2c4a7c" />
              </div>
              <div>
                <h4>자가용</h4>
                <p>서해안고속도로 비봉IC에서 10분</p>
              </div>
            </div>
            <div className="location-item">
              <div className="location-icon">
                <Phone size={18} color="#2c4a7c" />
              </div>
              <div>
                <h4>연락처</h4>
                <p>031-123-4567</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default Company;
