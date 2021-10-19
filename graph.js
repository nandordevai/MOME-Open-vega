function hsl(h, s, l) {
    return `hsl(${h}, ${s * 100}%, ${l * 100}%)`;
}

const h = 200;
const s = .6;
const l = .4;
const colors = {
    meteor: hsl(h + 120, s, l),
    corn: hsl(h, s, l),
};

const schema = {
    $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
    config: {
        axis: {
            labelFontSize: 14,
            titleFontSize: 18,
            titleFontWeight: 'normal',
        },
    },
    data: {
        url: 'data.csv',
    },
    width: 1000,
    height: 500,
    encoding: {
        x: {
            field: 'year',
            type: 'temporal',
            timeUnit: 'year',
            axis: {
                tickCount: 'year',
                title: null,
            },
        },
    },
    layer: [
        {
            mark: {
                type: 'line',
                interpolate: 'monotone',
                color: colors.meteor,
            },
            encoding: {
                y: {
                    field: 'meteors',
                    type: 'quantitative',
                    axis: {
                        title: 'Total meteors observed',
                        titleColor: colors.meteor,
                    },
                    scale: {
                        domain: [20000, 120000],
                    },
                    orient: 'left',
                },
            },
        },
        {
            mark: {
                type: 'line',
                interpolate: 'monotone',
                color: colors.corn,
            },
            encoding: {
                y: {
                    field: 'corn',
                    type: 'quantitative',
                    axis: {
                        title: 'Fresh sweet corn (lbs per capita)',
                        titleColor: colors.corn,
                    },
                    scale: {
                        domain: [5.0, 10.0],
                    },
                },
            },
        }
    ],
    resolve: {
        scale: {
            y: 'independent',
        },
    },
};

vegaEmbed('#graph', schema);
