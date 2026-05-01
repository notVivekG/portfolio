export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
      <div className="animated-mesh absolute inset-0" />
      <div className="dot-grid-bg absolute inset-0" />
    </div>
  )
}
