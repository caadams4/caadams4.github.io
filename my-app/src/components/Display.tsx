import React, { useState } from 'react';
import { Screen } from '../interfaces/Screen'




export const Display = ({text}: {text: string}): JSX.Element => {
    return (
        <div>
            {text}
        </div>
    )
}