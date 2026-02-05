const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

export const generateChartData = (points, minVal, maxVal) => {
    return Array.from({ length: points }, (_, i) => ({
        label: points === 24 ? `${i}:00` : `Day ${i + 1}`,
        value: getRandom(minVal, maxVal),
    }));
};
