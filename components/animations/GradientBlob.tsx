export function GradientBlob() {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      {/* Main Blob */}
      <div
        className="h-[450px] w-[450px] blur-[40px]"
        style={{
          borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
          background: `linear-gradient(135deg,
            rgba(0, 255, 136, 0.2) 0%,
            rgba(0, 212, 255, 0.15) 50%,
            rgba(139, 92, 246, 0.1) 100%)`,
          animation: 'blobMorph 8s ease-in-out infinite',
        }}
      >
        {/* Inner Glow */}
        <div
          className="absolute -inset-5 blur-[60px]"
          style={{
            borderRadius: 'inherit',
            background: `linear-gradient(135deg,
              rgba(0, 255, 136, 0.15) 0%,
              rgba(0, 212, 255, 0.1) 100%)`,
            animation: 'blobMorph 8s ease-in-out infinite reverse',
          }}
        />
      </div>
    </div>
  );
}
