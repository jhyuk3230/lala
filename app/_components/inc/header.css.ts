import { style } from '@vanilla-extract/css';
import * as reference from '@/_components/global.css'

export const header = style({
  padding: '16px 0',
	backgroundColor: '#fff'
});

export const headerContainer = style([reference.flexBetween]);

export const headerBtnWrap = style({
	display: 'flex',
	justifyContent: 'end',
	alignItems: 'center',
	gap: '16px'
})

export const adultBtn = style({
	width: '52px',
	height: '26px',
	borderRadius: '26px',
	backgroundColor: '#E5E7EB',
	position: 'relative',
})

export const adultBtnActive = style({
	backgroundColor: '#EF4444'
})

export const adultBtnInner = style({
	width: '26px',
	height: '26px',
	border: '2px solid #EF4444',
	borderRadius: '26px',
	backgroundColor: '#fff',
	fontSize: '12px',
	fontWeight: '700',
	position: 'absolute',
	top: '50%',
	left: '0',
	transform: 'translateY(-50%)',
	transitionDuration: '.3s',
})

export const adultBtnInnerActive = style({
	left: '26px'
})