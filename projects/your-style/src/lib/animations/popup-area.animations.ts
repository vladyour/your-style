import {animate, animation, group, state, style, transition, trigger, useAnimation} from '@angular/animations';

const p100 = '100%';
const invisible = 'invisible';
const timings = '250ms ease-in-out';

export const popupAreaAnimation = () => {
  return trigger('popupAreaTrigger', [
    state(invisible, style({
      visibility: 'hidden',
      opacity: '0',
    })),
    state('top', style({bottom: p100})),
    state('right', style({left: p100})),
    state('bottom', style({top: p100})),
    state('left', style({right: p100})),
    transition('invisible => top', [
      group([useAnimation(getInAnimation('bottom')), useAnimation(appearingAnimation)])
    ]),
    transition('top => invisible', [
      group([useAnimation(getOutAnimation('bottom')), useAnimation(disappearingAnimation)])
    ]),
    transition('invisible => right', [
      group([useAnimation(getInAnimation('left')), useAnimation(appearingAnimation)])
    ]),
    transition('right => invisible', [
      group([useAnimation(getOutAnimation('left')), useAnimation(disappearingAnimation)])
    ]),
    transition('invisible => bottom', [
      group([useAnimation(getInAnimation('top')), useAnimation(appearingAnimation)])
    ]),
    transition('bottom => invisible', [
      group([useAnimation(getOutAnimation('top')), useAnimation(disappearingAnimation)])
    ]),
    transition('invisible => left', [
      group([useAnimation(getInAnimation('right')), useAnimation(appearingAnimation)])
    ]),
    transition('left => invisible', [
      group([useAnimation(getOutAnimation('right')), useAnimation(disappearingAnimation)])
    ]),
  ]);
};

const appearingAnimation = animation([
  style({visibility: 'visible', opacity: 0}),
  animate(timings, style({opacity: 1}))
]);

const disappearingAnimation = animation([
  style({'pointer-events': 'none'}),
  animate(timings, style({opacity: 0})),
]);

const getInAnimation = (prop: 'top' | 'right' | 'bottom' | 'left') => {
  return animation([
    style({[prop]: `calc(100% + 5px)`}),
    animate(timings, style({[prop]: p100}))
  ]);
};

const getOutAnimation = (prop: 'top' | 'right' | 'bottom' | 'left') => {
  return animation([
    animate(timings, style({[prop]: `calc(100% + 5px)`}))
  ]);
};
