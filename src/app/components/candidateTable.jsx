
function candidateTable() {
  return (
    <div className="  p-4   overflow-x-auto ">
    <table className=" ">
      <thead className='class="bg-gray-50 border-b-2  border-gray-200 text-sm text-neutral-600 ml-2 shadow rounded-t-xl'>
        <tr>
          <th className="px-4 py-3 text-left ">Score</th>
          <th className="px-4 py-2  text-left">Name</th>
          <th className="px-4 py-2  text-left">Role</th>
          <th className="px-4 py-2  whitespace-nowrap text-left ">Skills</th>
          <th className="px-4 py-2 whitespace-nowrap  text-left">Application Date</th>
          <th className="px-4 py-2  text-left">Email</th>
          <th className="px-4 py-2  text-left">Phone</th>
          <th className="px-4 py-2  text-left">Experience</th>
          <th className="px-4 py-2  text-left whitespace-nowrap">Company</th>
          <th className="px-4 py-2  text-left whitespace-nowrap">Location</th>
          <th className="px-4 py-2  text-left">Availability</th>
          <th className="px-4 py-2  text-left">Stage</th>
        </tr>
      </thead>
      <tbody className="divide-y text-sm divide-gray-100 text-gray-700 shadow">
        {initialCandidatesData.map((candidate, index) => (
          <tr key={candidate.id} className="bg-white">
            <td className={`px-3 py-3 inline-flex items-center justify-center my-2  text-xs font-semibold  rounded-full ${candidate.score >= 80 ? 'bg-green-200  text-green-900' : candidate.score >= 50 ? 'bg-orange-200 text-orange-900' : 'bg-red-200 text-red-900'} `}>
              {candidate.score}
            </td>
            <td className="px-4 py-3">{candidate.name}</td>
            <td className="px-4 py-2">{candidate.role}</td>
            <td className="px-4 py-2.5 ">{
              candidate.skills.map((skill, index) => (
                <span
                  key={index}
                  className={`text-xs font-semibold mx-1 px-2.5 py-0.5 my-0.5 rounded-full ${
                    skillColors[index % skillColors.length]
                  }`}
                >
                  {skill}
                </span>
              ))
            }</td>
            <td className="px-4 py-2">{candidate.applicationDate}</td>
            <td className="px-4 py-2 whitespace-nowrap">              
              {candidate.email}
              <span className=" inline-block w-3 h-3 mx-1 text-gray-400 hover:text-blue-600 cursor-pointer"
              >
              <CopyIcon text={candidate.email} />

              </span>
            </td>
            <td className="px-4 py-2 whitespace-nowrap ">
              {candidate.phone}
              <span className="inline-block w-3 h-3 mx-1 text-gray-400 hover:text-blue-600 cursor-pointer">
              <CopyIcon text={candidate.phone} />
              </span>
            </td>
            <td className="px-4 py-2">{candidate.experience} </td>
            <td className="px-4 py-2"> {candidate.lastCompany}</td>
            <td className="px-4 py-2 ">{candidate.location}</td>
            <td className="px-4 py-2">{candidate.availability}</td>
            <td className={` inline-block px-4 py-2 text-xs font-semibold mx-1 px-2.5 py-0.5 rounded-full ${stageColors[candidate.stage]}`}>
              <div className="flex items-center ">
                {candidate.stage } <IoIosArrowDown className="ml-1 text-sm " />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default candidateTable