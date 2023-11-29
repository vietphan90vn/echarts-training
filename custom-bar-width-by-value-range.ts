const colorList = ['#4f81bd', '#c0504d', '#9bbb59', '#604a7b', '#948a54', '#e46c0b'];

interface DATA {
    value: number[],
    itemStyle: {
        color: string
    }
}

const data = [
    ['A', 10, 16, 10, 2, 4, 5], // [name, x1, x2, maxY, length, y1, y2, y3, y4 ...]
    ['B', 16, 19, 10, 2, 1, 7]
    // [10, 16, 3, 'A'],
    // [16, 18, 15, 'B'],
    // [18, 26, 12, 'C'],
    // [26, 32, 22, 'D'],
    // [32, 56, 7, 'E'],
    // [56, 62, 17, 'F'],
].map((item, index) => {
    return {
        value: item,
        itemStyle: {
            color: colorList[index],
        },
    };
}) as DATA[];

export const echartOption = {
    title: {
        text: 'Profit',
        left: 'center',
    },
    tooltip: {},
    xAxis: {
        scale: true,
    },
    yAxis: {},
    series: [
        {
            type: 'custom',
            renderItem: function (params, api) {
                const x = [api.value(1), api.value(2)] as number[];
                const length = api.value(4) as number;
                const ys: number[] = [];

                for (let i = 0; i < length; i++)
                {
                    ys.push(api.value(5 + i) as number)
                }

                const startPos: number[] = api.coord([x[0], ys[0]]);
                const size: number[] = api.size!([
                    x[1] - x[0],
                    ys[0],
                ]) as number[];

                const rect1 = {
                    x: startPos[0],
                    y: startPos[1],
                    width: size[0],
                    height: size[1],
                }

                const startPos1: number[] = api.coord([x[0], ys[1]]);
                const size1: number[] = api.size!([
                    x[1] - x[0],
                    ys[1] - ys[0],
                ]) as number[];

                const rect2 = {
                    x: startPos1[0],
                    y: startPos1[1],
                    width: size1[0],
                    height: size1[1],
                }

                var style = api.style();

                const shape = // Returns a group of elements.
                {
                    type: 'group',
                    // If diffChildrenByName is set as `true`, `child.name` will be used
                    // to diff children, which improves animation transition but degrade
                    // performance. The default value is `false`.
                    // diffChildrenByName: true,
                    children: [
                        {
                            type: 'rect',
                            shape: rect1,
                            style: {
                                fill: 'green'
                            },
                        },
                        {
                            type: 'rect',
                            shape: rect2,
                            style: {
                                fill: 'red'
                            },
                        },
                    ]
                }

                return shape;
            },
            dimensions: [null, 'from', 'to'],
            encode: {
                x: [1, 2],
                y: 3,
                tooltip: [1, 2],
                itemName: 0,
            },
            data: data,
        },
    ],
} as echarts.EChartsOption;
