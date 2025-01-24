import BestOfAirMax from '@/components/BestofAirMax'
import Dontmiss from '@/components/Dontmiss'
import Essentials from '@/components/Essentials'
import Featured from '@/components/Featured'
import GearUp from '@/components/GearUp'
import HeroSection from '@/components/HeroSection'
import List from '@/components/List'
import React from 'react';
import { WishlistProvider } from '../app/Context/WishlistContext';


const page = () => {
  return (
    <div>
      <WishlistProvider>
     <HeroSection />
      <BestOfAirMax />
      <Featured />
      <GearUp />
      <Dontmiss />
      <Essentials />
      <List />
      </WishlistProvider>
 
    </div>
  )
}

export default page
