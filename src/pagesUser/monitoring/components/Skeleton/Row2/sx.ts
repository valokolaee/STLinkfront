import { SxProps } from "@mui/material";
import { Theme } from "@mui/system";

const stackStrategy = {
    stack: 'total',
    area: true,
    stackOffset: 'none',
} as const;

export const customize = {
    // height: 350,
    hideLegend: true,
    experimentalFeatures: { preferStrictDomainInLineCharts: true },
};

const margin = { right: 5, left: 0 };


export const sx: SxProps<Theme> =
{
    '& .MuiChartsAxis-tickLabel': {
        fill: '#888',
    },
    '& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel':
    {
        fill: 'white',
    },
    '& .MuiChartsAxis-left .MuiChartsAxis-tickLabel':
    {
        fill: 'white',
    },
    '& .MuiPieArc-label': {
        fill: 'white', // Labels inside pie slices
        fontSize: '14px',
        fontWeight: 'bold',
    },
    '& .MuiChartsLegend-series text': {
        fill: 'white', // For light backgrounds
    },

 
    // Legend labels
    '& .MuiChartsLegend-series': {
        '& text': {
            fill: 'white',
            fontSize: '14px',
        },
    },


    '& .MuiChartsTooltip-root': {
        '& .MuiChartsTooltip-table': {
            '& .MuiChartsTooltip-cell': {
                color: 'white',
            },
            '& .MuiChartsTooltip-mark': {
                fill: 'white',
            },
        },
    },

}
