import { createTheme } from "@mui/material/styles";
import { brand, colors } from "./style.palette";
import {
  baseFontFamily,
  fontSize,
  fontWeight,
  quaternaryFontFamily,
} from "./style.typography";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0, // Extra small devices (up to 767px)
      sm: 768, // Small devices (768px and up)
      md: 1024, // Medium devices (1024px and up)
      lg: 1600, // Large devices (1600px and up)
      xl: 1921, // Extra large devices (1920px and up)
    },
  },
  typography: {
    fontFamily: baseFontFamily,
    h1: {
      fontSize: fontSize.h1,
      fontWeight: fontWeight.regular,
    },
    h2: {
      fontSize: fontSize.h2,
      fontWeight: fontWeight.regular,
    },
    h3: {
      fontSize: fontSize.h3,
      fontWeight: fontWeight.medium,
    },
    h4: {
      fontSize: fontSize.h4,
      fontWeight: fontWeight.medium,
    },
    body1: {
      fontSize: fontSize.b1,
      fontWeight: fontWeight.regular,
    },
    body2: {
      fontSize: fontSize.b2,
      fontWeight: fontWeight.regular,
    },
    subtitle1: {
      fontSize: fontSize.b2,
      fontWeight: fontWeight.medium,
    },
    subtitle2: {
      fontSize: fontSize.b2,
      fontWeight: fontWeight.semiBold,
    },
  },
  palette: {
    primary: {
      main: brand.secondaryMain,
    },
    secondary: {
      main: brand.secondaryMain,
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: `${baseFontFamily}`,
          fontSize: `${fontSize.b2}`,
          borderRadius: "10px",
          height: "65px",
          lineHeight: "20px",
          textTransform: "none",
          padding: "20px 32px",
          "&.MuiButton-contained": {
            color: `${colors.white}`,
            backgroundColor: `${brand.secondaryMain}`,
            "&:hover": {
              color: `${brand.primaryMain}`,
              backgroundColor: `${brand.secondaryMain}`,
            },
          },
        },
        outlined: {
          color: `${brand.secondaryMain}`,
          borderColor: `${brand.secondaryMain}`,
          "&:hover": {
            borderColor: `${brand.secondaryMain}`,
            backgroundColor: `${brand.primaryMain}`,
          },
        },
        text: {
          height: "unset",
          padding: "5px 10px",
          color: `${brand.secondaryMain}`,
          "&:hover": {
            backgroundColor: `${brand.primaryMain}`,
          },
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: `${colors.boxShadow}`,
          backgroundColor: `${colors.white}`,
          borderRadius: "30px",
          minWidth: "400px",
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          display: "flex",
          padding: "15px 30px",
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "15px 30px",
          borderBottom: "0",
        },
      },
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          display: "flex",
          alignItems: "center",
          gap: "12px",
        },
      },
    },

    MuiSelect: {
      styleOverrides: {
        root: {
          boxSizing: "border-box",
          color: `${colors.black10}`,
          fontSize: "14px",
          lineHeight: "20px",
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: `${colors.black10}`,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "&.Mui-focused": {
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "rgba(0, 0, 0, 0.1) !important",
              borderWidth: "1px !important",
            },
          },
          "&:hover": {
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "rgba(0, 0, 0, 0.1) !important",
            },
          },
        },
      },
    },

    MuiGrid: {
      styleOverrides: {
         container: {
          padding:"30px",
        //   flexWrap: "nowrap",
        //   gap: "15px",
         },
        // item: {
        //   flex: "1",
        // },
      },
    },

    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: "#787880",
          padding: "6px 12px",
          color: "white",
          height: "auto",
          gap: "5px",
          "& .MuiChip-icon": {
            padding: "0px",
            margin: "0px",
          },
          "& .MuiChip-label": {
            fontSize: "12px",
            padding: "0px",
          },
        },
      },
    },

    MuiContainer: {
      styleOverrides: {
        root: {
          display: "flex",
          background: colors.bgColor,
          padding: "16px 24px",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          fontFamily: baseFontFamily,
          fontSize: fontSize.b2,
          textDecoration: "none",
          "&:hover": {
            textDecoration: "underline",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          width: "100%",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontSize: fontSize.b1,
          borderRadius: "10px",
          backgroundColor: colors.white,
          // border: 'none',
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: `${brand.primaryMain} !important`,
          },
          "&.Mui-error": {
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: `${colors.danger} !important`,
            },
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderWidth: "1px !important",
            borderColor: `${brand.primaryMain} !important`,
          },
          "&.Mui-error.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: `${colors.danger} !important`,
          },
          "&.Mui-disabled": {
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: `#BBBBBF !important`,
            },
          },
        },
        input: {
          // padding: "8px 32px 8px 15px !important",
        },
        inputMultiline: {
          padding: "0px !important",
        },
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: {
          top: -2,
          color: colors.grey100,
          "&.Mui-focused": {
            color: brand.primaryMain,
          },
          "&.Mui-error": {
            color: colors.danger,
          },
        },
        shrink: {
          top: 0,
        },
        asterisk: {
          color: colors.danger,
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            padding: "6px",
          },
        },
        option: {
          "&.Mui-focused": {
            backgroundColor: `${colors.grey10} !important`,
          },
          '&[aria-selected="true"]': {
            backgroundColor: `${brand.primaryMain} !important`,
          },
        },
        paper: {
          boxShadow: "0px 2px 15px 0px rgba(0, 0, 0, 0.12)",
        },
        input: {
          minWidth: "0px !important",
        },
        tag: {
          display: "flex",
          padding: "2px 10px",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: brand.primaryMain,
          color: brand.primaryMain,
          borderRadius: "60px",
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          boxShadow: "none",

          "&.Mui-expanded": {},
          "&:before": {
            display: "none",
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          background: `${brand.primaryMain}`,
          border: `1px solid ${brand.secondaryMain}`,
          bordeRadius: "10px",
          padding: "0px 0px 0px 14px",
          alignItems: `center`,
          "&.Mui-expanded": {
            padding: "0",
            background: "transparent",
            border: "none",
            justifyContent: "space-between",
          },
          "& .MuiAccordionSummary-content": {
            columnGap: "10px",
          },
          "&.MuiAccordionSummary-root.Mui-expanded": {
            "& .MuiAccordionSummary-content": {
              justifyContent: "space-between",
            },
          },
        },
      },
    },

    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          padding: "0",
        },
      },
    },
  },
});

export default theme;
