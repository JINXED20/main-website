export function AuroraBlobs() {
  return (
    <div className="pointer-events-none absolute -bottom-1/2 -left-1/2 -right-1/2 -top-1/2 overflow-hidden">
      {/* Blob 1 - Green */}
      <div
        className="absolute -top-[10%] left-[5%] h-[600px] w-[600px] rounded-full opacity-40 blur-[100px]"
        style={{
          background: 'radial-gradient(circle, rgba(0, 255, 136, 0.3), transparent 70%)',
          animation: 'auroraFloat 20s ease-in-out infinite',
        }}
      />

      {/* Blob 2 - Cyan */}
      <div
        className="absolute right-[5%] top-[30%] h-[500px] w-[500px] rounded-full opacity-40 blur-[100px]"
        style={{
          background: 'radial-gradient(circle, rgba(0, 212, 255, 0.25), transparent 70%)',
          animation: 'auroraFloat 20s ease-in-out infinite',
          animationDelay: '-10s',
        }}
      />
    </div>
  );
}
