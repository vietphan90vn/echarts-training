import { CustomSeriesOption, CustomSeriesRenderItem, SeriesOption } from "echarts";

var decalColor = "rgba(0, 0, 0, 0.8)";
var svg =
    "M136.71078,90.7149424 C135.038663,90.084817 133.319214,89.8204828 131.637995,89.8987366 C131.93792,88.5693311 132.022117,87.2371959 131.901965,85.9319035 C131.475516,81.1970909 128.414369,76.8944942 123.681104,75.0882862 C118.812669,73.2488659 113.532803,74.556888 110.072058,78.0014222 C111.44425,78.0132512 112.836467,78.2716709 114.184082,78.7876003 C120.385569,81.1311211 123.498145,88.0593162 121.156545,94.2582038 C120.289538,96.5421242 118.80038,98.4052027 116.960324,99.7405227 C113.796773,102.011704 109.591905,102.714169 105.683776,101.228711 C99.4827445,98.8915594 96.3669821,91.9606345 98.7113134,85.7581072 C99.0176102,84.9537305 99.4044636,84.2007647 99.8609505,83.4869258 L99.8545788,83.4869258 C99.8545788,83.4869258 99.8545788,83.4869258 99.8545788,83.4932953 C101.850742,80.3754255 103.561544,76.9968612 104.927364,73.3990041 C115.528966,45.4164295 101.427934,14.127175 73.4261234,3.52605368 C45.4215819,-7.07142797 14.1333382,7.02472855 3.52900521,35.0104878 C0.629425582,42.6470623 -0.42099504,50.523403 0.149272308,58.1686218 C0.16110547,58.4206719 0.185226914,58.6786366 0.209348358,58.9366014 C2.47266801,84.9182432 19.2184117,108.595036 45.2413538,118.442737 C71.7121355,128.45559 100.448968,121.413198 119.352898,102.762395 C122.585626,99.6263266 127.465895,98.4657129 131.950208,100.160455 C137.34704,102.203699 140.39954,107.712861 139.559386,113.191995 C141.579216,111.769777 143.215378,109.750646 144.163851,107.256987 C146.676122,100.628613 143.33553,93.2204304 136.71078,90.7149424 ZZ";
var base64 =
    "data:image/png;base64,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";

var imgPath = '../assets/Untitled.png';

var decals = [
    // {
    //     color: decalColor,
    //     backgroundColor: 'white',
    //     dashArrayX: [1, 0],
    //     dashArrayY: [2, 5],
    //     symbolSize: 1,
    //     rotation: Math.PI / 6,
    // },
    // {
    //     color: decalColor,
    //     backgroundColor: 'white',
    //     symbol: "circle",
    //     dashArrayX: [
    //         [8, 8],
    //         [0, 8, 8, 0],
    //     ],
    //     dashArrayY: [6, 0],
    //     symbolSize: 0.8,
    // },
    // {
    //     color: decalColor,
    //     backgroundColor: 'white',
    //     dashArrayX: [1, 0],
    //     dashArrayY: [4, 3],
    //     rotation: -Math.PI / 4,
    // },
    // {
    //     color: decalColor,
    //     backgroundColor: 'white',
    //     dashArrayX: [
    //         [6, 6],
    //         [0, 6, 6, 0],
    //     ],
    //     dashArrayY: [6, 0],
    // },
    // {
    //     color: decalColor,
    //     backgroundColor: 'white',
    //     dashArrayX: [
    //         [1, 0],
    //         [1, 6],
    //     ],
    //     dashArrayY: [1, 0, 6, 0],
    //     rotation: Math.PI / 4,
    // },
    // {
    //     color: decalColor,
    //     backgroundColor: 'white',
    //     symbol: "triangle",
    //     dashArrayX: [
    //         [9, 9],
    //         [0, 9, 9, 0],
    //     ],
    //     dashArrayY: [7, 2],
    //     symbolSize: 0.75,
    // },
    // {
    //     color: decalColor,
    //     backgroundColor: 'white',
    //     dashArrayX: [1, 0],
    //     dashArrayY: 10,
    //     rotation: 0,
    // },
    // {
    //     color: decalColor,
    //     backgroundColor: 'white',
    //     dashArrayX: [10, 10],
    //     dashArrayY: [1, 0],
    //     rotation: 0,
    // },
    // {
    //     color: decalColor,
    //     backgroundColor: 'white',
    //     dashArrayX: [10, 5, 20, 5],
    //     dashArrayY: 10,
    //     rotation: 0,
    // },
    // {
    //     color: decalColor,
    //     backgroundColor: 'white',
    //     dashArrayX: [
    //         [10, 5, 20, 5],
    //         [20, 5],
    //     ],
    //     dashArrayY: [10, 5],
    //     rotation: 0,
    // },
    // {
    //     symbol: "rect",
    //     backgroundColor: 'white',
    //     dashArrayX: [
    //         [8, 8],
    //         [0, 8, 8, 0],
    //     ],
    //     dashArrayY: [8, 0],
    //     symbolSize: 0.8,
    //     rotation: Math.PI / 4,
    //     color: "black",
    // },
    {
        color: 'green',
        backgroundColor: 'blue',
        dashArrayX: [
            [30, 30],
            [0, 30, 30, 0],
        ],
        dashArrayY: [30, 0],
        symbol: base64,
        symbolSize: 1,
    },
    {
        color: 'green',
        backgroundColor: 'blue',
        dashArrayX: [
            [30, 30],
            [0, 30, 30, 0],
        ],
        dashArrayY: [30, 0],
        symbol: "path://" + svg,
        symbolSize: 1,
    },
    {
        color: 'green',
        backgroundColor: 'blue',
        dashArrayX: [
            [30, 30],
            [0, 30, 30, 0],
        ],
        dashArrayY: [30, 0],
        symbol: imgPath,
        symbolSize: 1,
    },
];
var columns = 6;
var rows = Math.floor(decals.length / columns) + 1;

const renderItem: CustomSeriesRenderItem = (params, api) => {
    var paletteColor = api.visual("color");
    var paletteDecal = api.visual("decal");

    return {
        type: "group",
        x: ((api.value(0) as number) % columns) * 120 + 50,
        y: Math.floor((api.value(0) as number) / columns) * 120 + 50,
        children: [
            {
                type: "rect",
                shape: { x: 0, y: 0, width: 100, height: 100 },
                style: {
                    fill: paletteColor,
                    decal: paletteDecal
                },
            },
        ],
    };
};

var series: CustomSeriesOption[] = [];
for (var i = 0; i < decals.length; ++i) {
    series.push({
        type: "custom",
        data: [[i]],
        itemStyle: {
            decal: decals[i],
        },
        renderItem: renderItem,
    });
}

export const echartOption = {
    xAxis: {
        type: "value",
        max: 1,
        show: false,
    },
    yAxis: {
        type: "value",
        show: false,
    },
    series: series,
    aria: {
        enabled: true,
        decal: {
            show: true,
            // decals: decals,
        },
    },
    // color: ["#ddd"],
} as echarts.EChartsOption;
