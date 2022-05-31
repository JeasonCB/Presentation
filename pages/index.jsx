import Head from 'next/head'
import { Grid, Text } from '@nextui-org/react'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'


export default function Home() {
  const [isVisible, setIsVisible] = useState(true)
  const toggle = () => setIsVisible(!isVisible)
  return (
    <>
    <Head>
      <title>Coming Soon</title>
      <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Coming Soon" />
        <meta name="keywords" content="next, create next app, create next, next app, next ui, next ui org, next ui org" />
        <meta name="author" content="JECB" />
    </Head>

      <Grid justify='center' alignItems='center' alignContent='center' css={{ h: '100vh', w: '100%', bg: 'rgb(234,230,160)', d: 'flex' }}>
        <AnimatePresence>
          {isVisible && (
            <Text
              as={motion.h1} css={{ position: 'absolute', fs: '4vw' }}
              key={setTimeout(() => {
                toggle()
                return () => clearTimeout()
              }, 3000)
              }

              initial={{ opacity: 0, scale: 0.1 }}
              animate={{ opacity: 1, scale: 2, transition: { duration: 1, delay: 0 } }}
              exit={{ opacity: 0, scale: 0.1, transition: { duration: 2 } }}
            >

              #YOURBUSSINES </Text>)}
        </AnimatePresence>

        {!isVisible && (
          <Text css={{ fs: '4vw' }}
            as={motion.h1}
            initial={{ opacity: 0, scale: 0.0001 }}
            animate={{ opacity: 1, scale: 2 }}
            transition={{ duration: 2, delay: 1.4 }}
          >
            #YOURLOGO
            <Text css={{ d: 'flex', justifyItems: 'center', justifyContent: 'center', fs: '1.6vw' }}>#ComingSoon</Text>
          </Text>
        )}

      </Grid>
    </>
  )
}
