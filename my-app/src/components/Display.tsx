import React, { useState } from 'react';
import { Screen } from '../interfaces/Screen'




<<<<<<< Updated upstream
export const Display = ({text}: {text: string}): JSX.Element => {
    return (
        <div>
            {text}
=======
export const Display = ({calcSays}: {calcSays: string}): JSX.Element =>  {
    return (
        <div>
            {calcSays}
>>>>>>> Stashed changes
        </div>
    )
}