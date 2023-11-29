import * as echarts from 'echarts';
import { echartOption } from './custom-bar-width-by-value-range';

const dom: HTMLElement | null = document.getElementById('chart-container');

const myChart = echarts.init(dom, null, {
    renderer: 'canvas',
    useDirtyRect: false,
});

myChart.setOption(echartOption);

window.addEventListener('resize', _ => myChart.resize());
