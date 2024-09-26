import { style, globalStyle } from '@vanilla-extract/css';

export const innerLayout = style({
	maxHeight: "100vh",
	overflowY: "auto",
});

globalStyle(`${innerLayout}::-webkit-scrollbar`, {
  width: '3px',
  backgroundColor: 'transparent',
});

globalStyle(`${innerLayout}::-webkit-scrollbar-thumb`, {
  backgroundColor: '#dfdfdf',
  borderRadius: '5px',
});

globalStyle(`${innerLayout}::-webkit-scrollbar-track`, {
	width: '3px',
  backgroundColor: 'transparent',
});