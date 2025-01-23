/* eslint-disable react/prop-types */
function Facebook ({ profiles }) {
  console.log(profiles)
  return (
    <div>
      {profiles.map((profile, index) => {
       return (

       <div key={index}>
          <img src={profile.img} alt="" />
          <p><strong>First Name: </strong> {profile.firstName} </p>
          <p><strong>Last Name: </strong> {profile.lastName} </p>
          <p><strong>Country: </strong> {profile.country} </p>
          <p><strong>Type: </strong> {profile.isStudent? "Student" : "Teacher"} </p>

        </div>
       ) 
        
      })}
    </div>
  )
}

export default Facebook