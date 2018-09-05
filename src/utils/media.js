import {css} from 'styled-components'

// media query that accepts arguments from the 
// component it is used in
export const media = {

    handheld: (...args) => css`
        @media (max-width: 800px) {
            ${ css(...args) }
        }
    
    `
}