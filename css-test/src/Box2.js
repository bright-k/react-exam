import React from 'react';
import cn from 'classnames';
import style from './Box2.module.scss';

function Box({ size }) {
    const isBig = 'big' === size;
    const label = isBig ? '큰 박스' : '작은 박스';

    return (
        <div className={cn(style.box, { [style.big]: isBig, [style.small]: !isBig})}>
            {label}
        </div>
    )
}
export default Box;