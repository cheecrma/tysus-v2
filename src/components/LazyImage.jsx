import React, { useState } from "react";

function LazyImage({ src, alt, className = "" }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`lazy-image-wrapper ${className}`}>
      {/* 로딩 중 표시될 스켈레톤 */}
      {!isLoaded && !hasError && (
        <div className="image-skeleton">
          <div className="skeleton-shimmer"></div>
        </div>
      )}

      {/* 실제 이미지 */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        style={{
          opacity: isLoaded ? 1 : 0,
          transition: "opacity 0.3s ease-in-out"
        }}
      />

      {/* 에러 시 표시 */}
      {hasError && (
        <div className="image-error">
          <span>이미지를 불러올 수 없습니다</span>
        </div>
      )}
    </div>
  );
}

export default LazyImage;
