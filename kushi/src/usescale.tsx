import { useEffect } from "react";

const useScaleGap = () => {
  useEffect(() => {
    const fix = () => {
      const el = document.querySelector(".page-scaler") as HTMLElement;
      if (!el) return;

      const w = window.innerWidth;
      let scale = 1;
      if (w <= 390) scale = 0.33;
      else if (w <= 480) scale = 0.38;
      else if (w <= 768) scale = 0.52;
      else if (w <= 1024) scale = 0.52;

      if (scale < 1) {
        // Fix width so content renders at full desktop width before scaling
        el.style.width = `${100 / scale}%`;
        el.style.transform = `scale(${scale})`;
        el.style.transformOrigin = "top left";

        // Fix gap: element still occupies original height in layout flow
        // Wait for browser to paint at new width, then measure
        requestAnimationFrame(() => {
          const originalHeight = el.scrollHeight;
          const scaledHeight = originalHeight * scale;
          const gap = originalHeight - scaledHeight;
          el.style.marginBottom = `-${gap}px`;
        });
      } else {
        el.style.width = "";
        el.style.transform = "";
        el.style.transformOrigin = "";
        el.style.marginBottom = "";
      }
    };

    fix();
    window.addEventListener("resize", fix);
    return () => window.removeEventListener("resize", fix);
  }, []);
};

export default useScaleGap;