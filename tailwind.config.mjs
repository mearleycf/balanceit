/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'
import plugin from 'tailwindcss/plugin'

export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './src/components/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './src/layouts/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './src/pages/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter var"', 'Inter', ...defaultTheme.fontFamily.sans],
        display: [
          '"Righteous"',
          '"Lilita One"',
          ...defaultTheme.fontFamily.sans,
        ],
      },
      colors: {
        brightpink: {
          50: '#FFEBF7',
          100: '#FED2ED',
          200: '#FEAADC',
          300: '#FD7CCA',
          400: '#FD54B9',
          500: '#FC28A8',
          600: '#E7038C',
          700: '#AB0268',
          800: '#740246',
          900: '#370122',
          950: '#1E0012',
        },
        pink: {
          50: '#FFE5FF',
          100: '#FFCCFF',
          200: '#FF99FF',
          300: '#FF66FF',
          400: '#FF33FF',
          500: '#FF00FF',
          600: '#CC00CC',
          700: '#990099',
          800: '#660066',
          900: '#330033',
          950: '#190019',
        },
        red: {
          50: '#FFE8E5',
          100: '#FFD2CC',
          200: '#FFA599',
          300: '#FF7866',
          400: '#FF4B33',
          500: '#FF1E01',
          600: '#CC1800',
          700: '#991200',
          800: '#660C00',
          900: '#330600',
          950: '#190300',
        },
        lightpink: {
          50: '#FFF5FF',
          100: '#FFF0FF',
          200: '#FFDBFF',
          300: '#FFCCFF',
          400: '#FFBDFF',
          500: '#FFAAFF',
          600: '#FF57FF',
          700: '#FF00FF',
          800: '#A800A8',
          900: '#570057',
          950: '#290029',
        },
        purple: {
          50: '#EFDBFF',
          100: '#E1BDFF',
          200: '#C175FF',
          300: '#A333FF',
          400: '#8400F0',
          500: '#5E00AB',
          600: '#4C008A',
          700: '#380066',
          800: '#240042',
          900: '#140024',
          950: '#08000F',
        },
        darkcyan: {
          50: '#DBF7FF',
          100: '#BDF0FF',
          200: '#7AE0FF',
          300: '#38D1FF',
          400: '#00B8F0',
          500: '#0087AF',
          600: '#006A8A',
          700: '#00526B',
          800: '#003747',
          900: '#001B24',
          950: '#000C0F',
        },
        cyan: {
          50: '#E6FDFF',
          100: '#CDFCFE',
          200: '#9AF9FE',
          300: '#68F6FD',
          400: '#35F3FD',
          500: '#03EDF9',
          600: '#02C0CA',
          700: '#029097',
          800: '#016065',
          900: '#013032',
          950: '#001819',
        },
        blue: {
          50: '#EDE5FF',
          100: '#DBCCFF',
          200: '#B899FF',
          300: '#9466FF',
          400: '#7033FF',
          500: '#4E00FF',
          600: '#3D00CC',
          700: '#2E0099',
          800: '#1F0066',
          900: '#0F0033',
          950: '#080019',
        },
        lightcyan: {
          50: '#F5FFFF',
          100: '#E5FFFF',
          200: '#D1FFFF',
          300: '#B8FFFF',
          400: '#A3FFFF',
          500: '#8BFFFF',
          600: '#3DFFFF',
          700: '#00EBEB',
          800: '#009E9E',
          900: '#004D4D',
          950: '#002929',
        },
        deeppurple: {
          50: '#EAD8F8',
          100: '#D4B1F1',
          200: '#A75FE2',
          300: '#7B23C2',
          400: '#471470',
          500: '#150621',
          600: '#10051A',
          700: '#0E0416',
          800: '#08020D',
          900: '#050209',
          950: '#030104',
        },
        bra: {
          50: '#EBEBFF',
          100: '#D2D2FE',
          200: '#A6A4FE',
          300: '#7E7CFD',
          400: '#524FFD',
          500: '#2522FC',
          600: '#0703E2',
          700: '#0502AB',
          800: '#03026F',
          900: '#020137',
          950: '#01001E',
        },
        lightpurple: {
          50: '#F6EEFB',
          100: '#ECDAF6',
          200: '#DBB9EE',
          300: '#C894E6',
          400: '#B773DE',
          500: '#A34DD5',
          600: '#892DBE',
          700: '#65218C',
          800: '#44165F',
          900: '#210B2D',
          950: '#120619',
        },
        brightpurple: {
          50: '#F4EAFA',
          100: '#E8D2F4',
          200: '#D2A8EB',
          300: '#BB7BE0',
          400: '#A34DD5',
          500: '#8A2DC0',
          600: '#6E2499',
          700: '#531B74',
          800: '#38124E',
          900: '#1B0925',
          950: '#0F0515',
        },
        deepblue: {
          50: '#DEDEED',
          100: '#C0C0DD',
          200: '#8181BC',
          300: '#4C4C8F',
          400: '#2B2B50',
          500: '#08080F',
          600: '#07070D',
          700: '#05050A',
          800: '#040407',
          900: '#020203',
          950: '#000000',
        },
        lavender: {
          50: '#F4F0FF',
          100: '#EAE0FF',
          200: '#D4C2FF',
          300: '#BFA3FF',
          400: '#A985FF',
          500: '#9466FF',
          600: '#621FFF',
          700: '#4000D6',
          800: '#2B008F',
          900: '#150047',
          950: '#0B0024',
        },
        slateblue: {
          50: '#EAECF5',
          100: '#D9DCED',
          200: '#B0B6D8',
          300: '#8B94C6',
          400: '#6571B3',
          500: '#495495',
          600: '#3B4478',
          700: '#2C3259',
          800: '#1D213A',
          900: '#0F111F',
          950: '#07080E',
        },
        mintgreen: {
          50: '#E7FEF5',
          100: '#CEFDEC',
          200: '#99FAD6',
          300: '#68F8C3',
          400: '#37F6B0',
          500: '#0BEB99',
          600: '#09BE7C',
          700: '#078D5C',
          800: '#045D3C',
          900: '#023120',
          950: '#011810',
        },
        brightgreen: {
          50: '#F2FCE9',
          100: '#E6F8D3',
          200: '#CFF2AB',
          300: '#B5EB7F',
          400: '#9CE453',
          500: '#84DD29',
          600: '#69B41D',
          700: '#4F8816',
          800: '#365C0F',
          900: '#1A2C07',
          950: '#0D1603',
        },
        lightgreen: {
          50: '#F8FFF0',
          100: '#EEFFDB',
          200: '#DFFFBD',
          300: '#CEFF99',
          400: '#BFFF7A',
          500: '#ADFF56',
          600: '#8EFF14',
          700: '#69CC00',
          800: '#478A00',
          900: '#224200',
          950: '#122400',
        },
        yellow: {
          50: '#FFFAE5',
          100: '#FFF5CC',
          200: '#FFEB99',
          300: '#FFE066',
          400: '#FFD633',
          500: '#FFCC00',
          600: '#CCA300',
          700: '#997A00',
          800: '#665200',
          900: '#332900',
          950: '#191400',
        },
        white: {
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FFFFFF',
          300: '#FFFFFF',
          400: '#FFFFFF',
          500: '#FFFFFF',
          600: '#CCCCCC',
          700: '#999999',
          800: '#666666',
          900: '#333333',
          950: '#1A1A1A',
        },
        lightgrey: {
          50: '#FCFCFC',
          100: '#F7F7F7',
          200: '#F2F2F2',
          300: '#EBEBEB',
          400: '#E3E3E3',
          500: '#DDDDDD',
          600: '#B0B0B0',
          700: '#858585',
          800: '#595959',
          900: '#2B2B2B',
          950: '#171717',
        },
        warmgrey: {
          50: '#F8F7F7',
          100: '#F0EFEF',
          200: '#E1DFDF',
          300: '#D3D0D0',
          400: '#C4C0C0',
          500: '#B6B1B1',
          600: '#938B8B',
          700: '#6F6868',
          800: '#4A4545',
          900: '#252323',
          950: '#121111',
        },
        darkwarmgrey: {
          50: '#F0EFEF',
          100: '#E1DFDF',
          200: '#C6C2C2',
          300: '#A9A3A3',
          400: '#8E8686',
          500: '#6F6868',
          600: '#5A5454',
          700: '#423E3E',
          800: '#2D2A2A',
          900: '#151414',
          950: '#0B0A0A',
        },
        black: {
          50: '#E6E6E6',
          100: '#CCCCCC',
          200: '#999999',
          300: '#666666',
          400: '#333333',
          500: '#000000',
          600: '#000000',
          700: '#000000',
          800: '#000000',
          900: '#000000',
          950: '#000000',
        },
        orange: {
          50: '#FFF5E5',
          100: '#FFEBCC',
          200: '#FFD899',
          300: '#FFC466',
          400: '#FFB133',
          500: '#FF9E01',
          600: '#CC7E00',
          700: '#995E00',
          800: '#663F00',
          900: '#331F00',
          950: '#191000',
        },
        lightslate: {
          50: '#F8F0FE',
          100: '#EEDDFD',
          200: '#DCBBFC',
          300: '#CB99FA',
          400: '#BA77F9',
          500: '#A855F7',
          600: '#8815F4',
          700: '#6609BE',
          800: '#44067F',
          900: '#22033F',
          950: '#120222',
        },
        lightslateblue: {
          50: '#F5F6FA',
          100: '#E7E9F3',
          200: '#CFD3E7',
          300: '#BBC0DD',
          400: '#A3AAD2',
          500: '#8B94C6',
          600: '#5E6BB0',
          700: '#434E89',
          800: '#2C3259',
          900: '#16192C',
          950: '#0C0E18',
        },
      },
    },
    plugins: [],
  },
}
