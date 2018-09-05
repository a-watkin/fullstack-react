import React from 'react'
import styled from 'styled-components'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import Menu from 'material-ui/svg-icons/navigation/menu'

// if the props.open make the margin the width ofthe prop
// otherwise do nothing

// regular CSS in a string literal
const StayVisible = styled.div`
	position: absolute;
	margin-left: ${(props) => (props.open) ? `${props.width}px` : 'none'};
	transition: margin .2s;
`


export const NavToggleButton = (props) => {
    return (
        <StayVisible
            {...props}
        >

            <FloatingActionButton 
                onTouchTap={props.toggle}
            >
                <Menu/>
            </FloatingActionButton>

        </StayVisible>


    )
}