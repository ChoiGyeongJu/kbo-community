export const formatNumber = (count: number) => {
  if (count > 1000000) {
    const millions = Math.floor(count / 100000) / 10; // 100만 이상 백만(M) 단위로 변환
    return millions.toFixed(1) + 'M';
  } else if (count >= 1000) {
    const thousands = Math.floor(count / 100) / 10; // 1000 이상 100만 미만 천(K) 단위로 변환
    return thousands.toFixed(1) + 'K';
  } else {
    return count; // 1000 미만은 그대로 반환
  }
};
