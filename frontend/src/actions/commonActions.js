export const arrayToSentence = (a) => {
    if (a.length === 1) return a[0];
    const firsts = a.slice(0, a.length -1);
    const last = a[a.length -1];
    return firsts.join(', ') + ' and ' + last;
}