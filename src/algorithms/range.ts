function range (n: number, offset: number = 0): number[] {
    const array = [...Array(n).keys()];

    return offset ? array.map((key) => key + offset): array;
}

// TODO: Implement recursive range function

module.exports = { range };