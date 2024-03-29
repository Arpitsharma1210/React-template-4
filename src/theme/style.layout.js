/*
this file is related to breakpoints etc.
 */

export const breakpoints = {
    smphone: 500,
    phone: 767,
    tablet: 1024,
    laptop: 1299,
    desktop: 1599,
};

export const respondTo = {
    extSm: `@medis only screen and (max-width: ${breakpoints.smphone})`,
    smOnly: `@media only screen and (max-width: ${breakpoints.phone}px)`,
    smUp: `@media only screen and (min-width: ${breakpoints.phone + 1}px)`,
    mdUp: `@media only screen and (min-width: ${breakpoints.tablet + 1}px)`,
    mdDown: `@media only screen and (max-width: ${breakpoints.tablet}px)`,
    lgUp: `@media only screen and (min-width: ${breakpoints.laptop + 1}px)`,
    lgDown: `@media only screen and (max-width: ${breakpoints.laptop}px)`,
    xlUp: `@media only screen and (min-width: ${breakpoints.desktop}px)`,
    screenHeight950: `@media only screen and (max-height: 950px)`,
    screenDown: sizeInPixel => `@media only screen and (max-width: ${sizeInPixel}px)`,
    screenUp: sizeInPixel => `@media only screen and (min-width: ${sizeInPixel}px)`,
    screenRange: (sizeInPixelL, sizeInPixelH) =>
        `@media only screen and (min-width: ${sizeInPixelL}px) and (max-width: ${sizeInPixelH}px)`,
    screenHight: sizeInPixel => `@media only screen and (max-height: ${sizeInPixel}px)`,
};

export const fixedHeightSectionContentStyle = { 
    height: '184px',
    overflowY: 'auto'
};  