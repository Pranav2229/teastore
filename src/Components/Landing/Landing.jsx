import React from 'react'
import { ExpandCollection } from '../ExpandCollection/ExpandCollection'
import { TeaCollection } from './TeaCollection'
import { Herosection } from './Herosection'
import { WhyUs } from './WhyUs'
import { Footer } from '../Footer/Footer'
import { Wholeseller } from './Wholeseller'
export function Landing(props) {

    return (
        <>
            {/* <h1>Landing</h1> */}
            <Herosection/>
            <TeaCollection/>
            <Wholeseller/>
            <WhyUs/>
            <Footer/>
        </>
    )
}
