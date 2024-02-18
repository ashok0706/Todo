'use client';
import { useState } from 'react';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import {
  FaBriefcase,
  FaCalendarAlt,
  FaEnvelope,
  FaFileWord,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaPlus,
} from 'react-icons/fa';


import { GoCopy } from "react-icons/go";
import { IoIosArrowDown } from 'react-icons/io';
import SearchBox from '../components/Searchbox';
import SortOrder from '../components/sortbox';


const initialCandidatesData = [
  {
    id: 1,
    name: 'John Doe',
    role: 'Frontend Developer',
    score: 85,
    stage: 'Interview',
    stages: ['Application', 'Screening', 'Interview', 'Offer', 'Hired'],
    applicationDate: '2023-02-01',
    email: 'johndoe@example.com',
    phone: '+123456789',
    experience: '3 years',
    lastCompany: 'Tech Solutions',
    skills: ['JavaScript', 'React', 'CSS'],
    location: 'New York, NY',
    availability: 'Immediate',
    linkedInProfile: 'https://www.linkedin.com/in/johndoe',
    resumeLink: 'https://example.com/resume/johndoe.docx',
  },
  {
    id: 1,
    name: 'Aisha Khan',
    role: 'Frontend Developer',
    score: 50,
    stage: 'Screening',
    stages: ['Application', 'Screening', 'Interview', 'Offer', 'Hired'],
    applicationDate: '2023-02-01',
    email: 'johndoe@example.com',
    phone: '+123456789',
    experience: '3 years',
    lastCompany: 'Tech Solutions',
    skills: ['JavaScript', 'React', 'CSS'],
    location: 'New York, NY',
    availability: 'Immediate',
    linkedInProfile: 'https://www.linkedin.com/in/johndoe',
    resumeLink: 'https://example.com/resume/johndoe.docx',
  },
  {
    id: 1,
    name: 'Mike DAngelo',
    role: 'Frontend Developer',
    score: 45,
    stage: 'Offer',
    stages: ['Application', 'Screening', 'Interview', 'Offer', 'Hired'],
    applicationDate: '2023-02-01',
    email: 'johndoe@example.com',
    phone: '+123456789',
    experience: '3 years',
    lastCompany: 'Tech Solutions',
    skills: ['JavaScript', 'React', 'CSS'],
    location: 'New York, NY',
    availability: 'Immediate',
    linkedInProfile: 'https://www.linkedin.com/in/johndoe',
    resumeLink: 'https://example.com/resume/johndoe.docx',
  },
];

const stageColors = {
  Application: 'bg-gray-200',
  Screening: 'bg-yellow-200',
  Interview: 'bg-blue-200',
  Offer: 'bg-green-200',
  Hired: 'bg-purple-200',
};
const skillColors = [
  'bg-blue-100 text-blue-800 ',
  'bg-green-100 text-green-800',
  'bg-red-100 text-red-800',
  'bg-yellow-100 text-yellow-800',
  'bg-purple-100 text-purple-800',
];

const sortOptions = [
  { value: 'score_desc', label: 'Score (High to Low)' },
  { value: 'applicationDate_desc', label: 'Application Date (Newest First)' },
  { value: 'applicationDate_asc', label: 'Application Date (Oldest First)' },
  { value: 'experience_desc', label: 'Experience (High to Low)' },
  { value: 'availability_asc', label: 'Availability (Sooner to Later)' },
  { value: 'name_asc', label: 'Name (A to Z)' },
  { value: 'name_desc', label: 'Name (Z to A)' },
  { value: 'local_candidates', label: 'Local Candidates First' },
  { value: 'skills_match_desc', label: 'Skills Match (High to Low)' },
  { value: 'recent_activity', label: 'Recent Activity' },
  { value: 'education_level_desc', label: 'Education Level (High to Low)' },
  {
    value: 'salary_expectation_asc',
    label: 'Salary Expectation (Low to High)',
  },
  { value: 'certifications_desc', label: 'Certifications (Most to Fewest)' },
];

const CandidatesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const [selectedSortOption, setSelectedSortOption] = useState(
    sortOptions[0].value
  );

  const handleSortChange = (e) => {
    setSelectedSortOption(e.target.value);
    // Implement the sorting logic based on selected option
  };

  const [isTableView, setIsTableView] = useState(false);

  const handleToggleView = () => {
    setIsTableView(!isTableView);
  };

  const CopyIcon = ({ text }) => {
    const handleCopyClick = () => {
      navigator.clipboard.writeText(text)
        .then(() => {
          window.alert('Copied: ' + text);
        })
        .catch((error) => {
          console.error('Failed to copy to clipboard:', error);
          // Handle any errors
        });
    };
  
    return (
      <span
        className="inline-block w-3 h-3 mx-1 text-gray-400 hover:text-blue-600 cursor-pointer"
        onClick={handleCopyClick}
      >
        <GoCopy />
      </span>
    );
  };

  return (
    <div className="container mx-auto px-4 py-8 w-3/4">
      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-4 items-center">
          <SearchBox
            value={searchTerm}
            onChange={setSearchTerm}
            placeholder="Search setup options..."
          />

          <SortOrder
            options={sortOptions}
            selectedValue={selectedSortOption}
            onChange={handleSortChange}
          />
        </div>
        <div className='flex gap-6'>
        <label class="inline-flex items-center cursor-pointer gap-2">
        <span class="text-m text-neutral-600 font-semibold">Table view</span>
  <input type="checkbox" value="" class="sr-only peer"/>
  <div onClick={handleToggleView} class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
  
</label>
     
        <button className="flex items-center bg-blue-600 text-white rounded-full py-2 px-6 hover:bg-blue-700 transition-colors">
          <FaPlus className="mr-2" /> Create Candidate
        </button>
      </div>
      </div>

      {isTableView ?

      (

        
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
   

    ):
      (<div className="-my-4 divide-y divide-gray-200 ">
        {initialCandidatesData.map((candidate, index) => (
          <div
            key={candidate.id}
            className={`bg-white ${index === 0 ? 'rounded-t-xl' : ''} ${
              index === initialCandidatesData.length - 1 ? 'rounded-b-xl' : ''
            } shadow p-4 flex items-center justify-between`}
          >
            {/* Score */}
            <div className="flex items-center mr-4">
              <span
                className={`inline-flex items-center justify-center h-10 w-10 ${
                  candidate.score >= 80
                    ? 'bg-green-200 text-green-900'
                    : candidate.score >= 50
                    ? 'bg-orange-200 text-orange-900'
                    : 'bg-red-200 text-red-900'
                } text-white text-sm font-bold rounded-full shadow-sm`}
              >
                {candidate.score}
              </span>
            </div>
            <div className="flex-grow mx-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <h3 className="text-lg font-semibold text-blue-600 flex items-center">
                    <span className="text-lg text-blue-700 ml-2">
                      {candidate.name}
                    </span>
                    <span className="text-sm text-neutral-600 ml-2">
                      ({candidate.role})
                    </span>
                    {candidate.skills.map((skill, index) => (
                      <span
                        key={index}
                        className={`text-xs font-semibold mx-1 px-2.5 py-0.5 rounded-full ${
                          skillColors[index % skillColors.length]
                        }`}
                      >
                        {skill}
                      </span>
                    ))}

                    {candidate.linkedInProfile && (
                      <a
                        href={candidate.linkedInProfile}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 ml-2"
                      >
                        <FaLinkedin />
                      </a>
                    )}
                    {candidate.resumeLink && (
                      <a
                        href={candidate.resumeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 ml-2"
                      >
                        <FaFileWord />
                      </a>
                    )}
                  </h3>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap items-center text-sm text-neutral-600 gap-4">
                <FaCalendarAlt className="text-gray-400" />
                <span>{candidate.applicationDate}</span>
                <FaEnvelope className="text-gray-400" />
                <span>{candidate.email}</span>
                <FaPhone className="text-gray-400" />
                <span>{candidate.phone}</span>
                <FaBriefcase className="text-gray-400" />
                <span>
                  {candidate.experience} at {candidate.lastCompany}
                </span>
                <FaMapMarkerAlt className="text-gray-400" />
                <span>{candidate.location}</span>
                <BsFillPersonLinesFill className="text-gray-400" />
                <span>{candidate.availability}</span>
              </div>
            </div>
            {/* Stage */}
            <div>
              <div
                className={`${
                  stageColors[candidate.stage]
                } rounded-full py-1 px-3 text-sm font-semibold flex items-center`}
              >
                {candidate.stage} <IoIosArrowDown className="ml-2" />
              </div>
            </div>
          </div>
        ))}
      </div>)}

      

    </div>
  );
};

export default CandidatesPage;
