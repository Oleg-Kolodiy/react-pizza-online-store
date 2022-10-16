import React from "react";
import ContentLoader from "react-content-loader";

function LoadingBlock() {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#d1d1d1"
      foregroundColor="#ecebeb"
    >
      <circle cx="133" cy="99" r="98" />
      <rect x="20" y="222" rx="6" ry="6" width="224" height="25" />
      <rect x="20" y="258" rx="3" ry="3" width="225" height="84" />
      <rect x="20" y="360" rx="6" ry="6" width="73" height="29" />
      <rect x="139" y="354" rx="20" ry="20" width="108" height="44" />
    </ContentLoader>
  );
}

export default LoadingBlock;
