import React from 'react'
import Profile from '../FindTalentProfile/Profile'
import UserProfiles from '../UserProfileComp/UserProfiles'
import talentdata from '../Talentsdata.js'
const UserProfile = () => {
  return (
	<div>
		<div>
			<UserProfiles  {...talentdata[2]}/>
		</div>
	</div>
  )
}

export default UserProfile