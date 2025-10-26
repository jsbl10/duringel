import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   output: "export", // indica que tu app se generará como HTML/CSS/JS estáticos
  images: {
    unoptimized: true, // evita errores al exportar imágenes
  },
};

export default nextConfig;
