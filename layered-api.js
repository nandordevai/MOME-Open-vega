const schema = {
    $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
    config: {
        axis: {
            labelFontSize: 12,
            titleFontSize: 14,
            titleFontWeight: 'normal',
        },
    },
    data: {
        url: 'data.csv',
    },
    width: 800,
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

const options = {
    view: {
        renderer: "canvas",
    },
};

vl.register(vega, vegaLite, options);
vl.layer(
    vl.markLine({
        interpolate: 'monotone',
    })
        .encode(
            vl.x().field('year').type('temporal').timeUnit('year').axis({
                tickCount: 'year',
                title: null,
            }),
            vl.y().field('meteors').type('quantitative').axis({
                title: 'Total meteors observed',
                titleColor: colors.meteor,
            }).scale({
                domain: [20000, 120000],
            }),
            vl.color().value(colors.meteor),
        ),
    vl.markLine({
        interpolate: 'monotone',
    })
        .encode(
            vl.x().field('year').type('temporal').timeUnit('year').axis({
                tickCount: 'year',
                title: null,
            }),
            vl.y().field('corn').type('quantitative').axis({
                title: 'Fresh sweet corn (lbs per capita)',
                titleColor: colors.corn,
            }).scale({
                domain: [5.0, 10.0],
            }),
            vl.color().value(colors.corn),
        )
)
    .data('data.csv')
    .config({
        axis: {
            labelFontSize: 12,
            titleFontSize: 14,
            titleFontWeight: 'normal',
        },
    })
    .resolve({
        scale: {
            y: 'independent',
        },
    })
    .width(800)
    .height(500)
    .render()
    .then((el) => {
        document.querySelector('#graph').appendChild(el);
    });
