export function FloatingPackage() {
  const faceStyles = {
    base: 'absolute flex h-[160px] w-[160px] items-center justify-center border-2 border-[rgba(0,255,136,0.3)] backdrop-blur-[10px]',
  };

  return (
    <div className="absolute left-1/2 top-1/2 h-[160px] w-[160px] -translate-x-1/2 -translate-y-1/2 [transform-style:preserve-3d]"
      style={{ animation: 'packageFloat 6s ease-in-out infinite' }}
    >
      {/* Package Particles */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="absolute h-[6px] w-[6px] rounded-full bg-[var(--accent)]"
            style={{
              top: i === 0 ? '0' : i === 1 ? '50%' : i === 2 ? '100%' : i === 3 ? '50%' : i === 4 ? '20%' : '20%',
              left: i === 0 ? '50%' : i === 1 ? '100%' : i === 2 ? '50%' : i === 3 ? '0' : i === 4 ? '20%' : '80%',
              right: i === 1 ? '0' : 'auto',
              bottom: i === 2 ? '0' : 'auto',
              width: i >= 4 ? '4px' : '6px',
              height: i >= 4 ? '4px' : '6px',
              animation: 'particleOrbit 8s linear infinite',
              animationDelay: `${-i * 2}s`,
            }}
          />
        ))}
      </div>

      {/* 3D Package Box */}
      <div className="absolute h-full w-full [transform-style:preserve-3d]">
        {/* Front Face */}
        <div
          className={faceStyles.base}
          style={{
            background: 'linear-gradient(135deg, rgba(0, 255, 136, 0.2), rgba(0, 212, 255, 0.1))',
            transform: 'translateZ(80px)',
            boxShadow: '0 0 40px rgba(0, 255, 136, 0.3)',
          }}
        >
          <div className="absolute left-1/2 h-full w-[30px] -translate-x-1/2 bg-gradient-to-b from-[rgba(0,255,136,0.4)] to-[rgba(0,255,136,0.2)]" />
          <svg className="relative z-10 h-[50px] w-[50px] stroke-[var(--accent)] drop-shadow-[0_0_15px_rgba(0,255,136,0.5)]" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
            <path d="M21 8v13H3V8" />
            <path d="M1 3h22v5H1z" />
            <path d="M10 12h4" />
          </svg>
        </div>

        {/* Back Face */}
        <div
          className={faceStyles.base}
          style={{
            background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.15), rgba(139, 92, 246, 0.1))',
            transform: 'rotateY(180deg) translateZ(80px)',
          }}
        >
          <div className="absolute left-1/2 h-full w-[30px] -translate-x-1/2 bg-gradient-to-b from-[rgba(0,255,136,0.4)] to-[rgba(0,255,136,0.2)]" />
        </div>

        {/* Right Face */}
        <div
          className={faceStyles.base}
          style={{
            background: 'linear-gradient(135deg, rgba(0, 255, 136, 0.15), rgba(0, 212, 255, 0.1))',
            transform: 'rotateY(90deg) translateZ(80px)',
          }}
        >
          <div className="absolute left-1/2 h-full w-[30px] -translate-x-1/2 bg-gradient-to-b from-[rgba(0,255,136,0.4)] to-[rgba(0,255,136,0.2)]" />
        </div>

        {/* Left Face */}
        <div
          className={faceStyles.base}
          style={{
            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(0, 255, 136, 0.15))',
            transform: 'rotateY(-90deg) translateZ(80px)',
          }}
        >
          <div className="absolute left-1/2 h-full w-[30px] -translate-x-1/2 bg-gradient-to-b from-[rgba(0,255,136,0.4)] to-[rgba(0,255,136,0.2)]" />
        </div>

        {/* Top Face */}
        <div
          className={faceStyles.base}
          style={{
            background: 'linear-gradient(135deg, rgba(0, 255, 136, 0.25), rgba(0, 212, 255, 0.15))',
            transform: 'rotateX(90deg) translateZ(80px)',
            borderColor: 'rgba(0, 255, 136, 0.5)',
          }}
        >
          <div className="absolute left-1/2 top-1/2 h-[30px] w-full -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[rgba(0,255,136,0.4)] to-[rgba(0,255,136,0.2)]" />
        </div>

        {/* Bottom Face */}
        <div
          className={faceStyles.base}
          style={{
            background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2))',
            transform: 'rotateX(-90deg) translateZ(80px)',
          }}
        />
      </div>
    </div>
  );
}
