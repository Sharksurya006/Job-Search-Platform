import React from 'react'
import SearchBar from '../FindTalentComp/SearchBarTalent';
import { Divider } from '@mantine/core';
import Talent from '../FindTalentComp/Talent';
const FindTalent = () => {
  return (
	<div>
	   <SearchBar/>
	   <Divider className="my-6" size="xs" color="black"/>
	   <Talent/>
	</div>
  )
}

export default FindTalent