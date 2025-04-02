'use client'
import React from 'react'
import {Link} from 'react-scroll'


//@ts-ignore
const LinkScroll =({children, to, ...props})=>{

    console.log(to)

    return(
        <Link to={to} {...props} >{children}</Link>
    )


}

export default LinkScroll;