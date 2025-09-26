const { vec2, vec3, vec4, sin, cos, smoothstep, time, mix, uv, distance, float, Fn } = await import('three/tsl');

const deform = Fn(([pos]) => {
  const strenght = float(0.15);
  const spd = float(1.0);
  return vec2(
    pos.x.add(sin(pos.y.mul(10).add(time.mul(spd))).mul(strenght)),
    pos.y.add(cos(pos.x.mul(10).add(time.mul(spd))).mul(strenght))
  );
});