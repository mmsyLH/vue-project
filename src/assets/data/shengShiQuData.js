// shengShiQuData.js

const areaOptions = [
    {
        label: '北京市',
        value: 'beijing',
        children: [
            {
                label: '东城区',
                value: 'dongcheng',
            },
            {
                label: '西城区',
                value: 'xicheng',
            },
            // 其他区县
        ],
    },
    {
        label: '上海市',
        value: 'shanghai',
        children: [
            {
                label: '黄浦区',
                value: 'huangpu',
            },
            {
                label: '徐汇区',
                value: 'xuhui',
            },
            // 其他区县
        ],
    },
    // 其他省市
];

export default areaOptions;
