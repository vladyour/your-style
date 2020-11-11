import {animate, animation, state, style, transition, trigger, useAnimation} from '@angular/animations';

export const expandableAreaAnimation = () => {
  return trigger(`expandableAreaTrigger`, [
    state('collapsed', style({
      height: '{{minHeight}}',
      overflow: 'hidden'
    }), { params: {minHeight: '0'}}),
    state('expanded', style({
      height: '{{maxHeight}}',
      overflow: 'scroll'
    }), { params: {maxHeight: '*'}}),
    transition('collapsed <=> expanded', [
      useAnimation(expandingAnimation)
    ])
  ]);
};

const timingFunction = 'cubic-bezier( 0.5, 0, 0.8, 1)';

export const expandingAnimation = animation([
  animate(`500ms ${timingFunction}`)
]);
