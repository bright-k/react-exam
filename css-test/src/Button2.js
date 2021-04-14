import React from 'react';
import cn from 'classnames';
import style from './Button2.module.scss';

function Button({ size }) {
    if ('big' === size) {
        return <Button className={cn(style.button, style.big)}>큰 버튼</Button>
    } else {
        return <Button className={cn(style.button, style.small)}>작은 버튼</Button>
    }
}
export default Button;