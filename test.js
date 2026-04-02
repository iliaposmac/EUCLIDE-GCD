function canTheNumberBeReachedBySumOfAandB(a, b, target) {
  const A = BigInt(a);
  const B = BigInt(b);
  const С = BigInt(target);

  if (С == A || С == B) return true;
  if (С < A && С < B) return false;

  const getGreaterCommonDivider = (x, y) => {
    while (y != 0n) {
      x %= y;
      [x, y] = [y, x];
    }
    return x;
  };

  const commonDivisor = getGreaterCommonDivider(A, B);

  const isReachedValue = С % commonDivisor == 0n;

  return isReachedValue ? RESULT.YES : RESULT.NO;
}

const A = "123";
const B = "321";
const C = "121231123123231231231231233";

const RESULT = {
  YES: "YES",
  NO: "NO",
};

console.log(canTheNumberBeReachedBySumOfAandB(A, B, C));
