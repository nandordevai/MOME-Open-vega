const schema = {
    $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
    data: {
        url: 'data.csv',
    },
    width: 800,
    height: 500,
    config: {
        axis: {
            labelFontSize: 12,
            titleFontSize: 14,
            titleFontWeight: 'normal',
        },
    },
    encoding: {
        x: {
            field: 'year',
            type: 'temporal',
            timeUnit: 'year',
            axis: {
                title: null,
            },
        },
        y: {
            field: 'meteors',
            type: 'quantitative',
            axis: {
                title: 'Total meteors observed',
            },
            scale: {
                domain: [20000, 120000],
            },
        },
    },
    mark: {
        type: 'line',
        interpolate: 'monotone',
    },
};
