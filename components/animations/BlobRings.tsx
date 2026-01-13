export function BlobRings() {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      {/* Outer Ring */}
      <div
        className="h-[350px] w-[350px] rounded-full border border-[rgba(0,255,136,0.2)]"
        style={{ animation: 'ringPulse 4s ease-in-out infinite' }}
      >
        {/* Middle Ring */}
        <div
          className="absolute inset-[30px] rounded-full border border-[rgba(0,255,136,0.15)]"
          style={{ animation: 'ringPulse 4s ease-in-out infinite 0.5s' }}
        />

        {/* Inner Ring */}
        <div
          className="absolute inset-[60px] rounded-full border border-[rgba(0,255,136,0.1)]"
          style={{ animation: 'ringPulse 4s ease-in-out infinite 1s' }}
        />
      </div>
    </div>
  );
}
