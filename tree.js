const schema = {
    $schema: 'https://vega.github.io/schema/vega/v5.json',
    data: [
        {
            name: 'tree',
            url: 'top-1000-extended-posters.json',
            transform: [
                {
                    type: 'nest',
                    keys: ['year', 'genre'],
                },
                {
                    type: 'tree',
                    method: 'tidy',
                    separation: true,
                    as: ['y', 'x', 'depth', 'children'],
                },
            ],
        },
        {
            name: 'links',
            source: 'tree',
            transform: [
                {
                    type: 'treelinks',
                },
                {
                    type: 'linkpath',
                    orient: 'horizontal',
                    shape: 'diagonal',
                },
            ],
        },
    ],
    width: 800,
    height: 500,
    padding: 0,
    config: {
        axis: {
            labelFontSize: 12,
            titleFontSize: 14,
            titleFontWeight: 'normal',
        },
        style: {
            cell: {
                stroke: '#d5d5d5',
                strokeOpacity: 0.8,
                strokeWidth: 1,
            },
        },
    },
    marks: [
        {
            type: 'path',
            from: { data: 'links' },
            encode: {
                update: {
                    path: { field: 'path' },
                    stroke: { value: '#ccc' },
                },
            },
        },
        {
            type: 'symbol',
            from: { data: 'tree' },
            encode: {
                enter: {
                    size: { value: 100 },
                    stroke: { value: '#fff' }
                },
                update: {
                    x: { field: 'x' },
                    y: { field: 'y' },
                    fill: { value: 'hsla(120, 25%, 60%, 1)' },
                },
            },
        },
    ],
};
