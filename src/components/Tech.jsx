import React from 'react'

import { PhysicsSimulation } from './canvas'
import { SectionWrapper } from '../hoc'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { textVariant } from '../utils/motion'

const Tech = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} text-center`}>
                    My favourite tools and utilities
                </p>
                <h2 className={`${styles.sectionHeadText} text-center`}>
                    TECHNOLOGIES
                </h2>
            </motion.div>
            <PhysicsSimulation />
            <span>
                Click on canvas to spawn new cubes!!! Spent an embarassing
                amount of time on this
            </span>
        </>
    )
}

export default SectionWrapper(Tech, '')
