const gamePhases = {
  PREP: { duration: 5, theme: 'calm' },      // 准备阶段
  COLLECT: { duration: 20, theme: 'intense' }, // 主要收集阶段
  FINAL: { duration: 5, theme: 'frantic' },  // 最后冲刺
  REVIEW: { duration: 10, theme: 'reflective' } // 回顾阶段
};
// 泡泡出现频率与时间相关
function getBubbleSpawnRate(elapsedTime, totalTime) {
  // 开始慢，中间快，最后非常密集
  const progress = elapsedTime / totalTime;
  return 500 + Math.sin(progress * Math.PI) * 400; // 毫秒
}