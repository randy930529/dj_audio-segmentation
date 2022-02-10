export function useRoundToNum(num, r = 2) {
    return +(Math.round(num + "e+" + r) + "e-" + r);
}