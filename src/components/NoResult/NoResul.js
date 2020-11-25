import Img from '../../img/NoRes.svg'
import {motion, AnimatePresence} from 'framer-motion'

const parentContainer={
    hidden:{
        opacity:0,
    },
    animate:{
        opacity:1,
    },
    exit:{
        opacity:0,
    }
}


function NoResul() {
    return (
        <AnimatePresence>
            <motion.div 
            variants={parentContainer}
            initial='hidden'
            animate='animate'
            exit='exit'
            className='no-result'>
                <img src={Img} alt='No-Result' className='no-result-image' />
                <motion.div className='no-result-title'>No Results Found!!!!</motion.div>
            </motion.div>
        </AnimatePresence>
    )
}

export default NoResul
