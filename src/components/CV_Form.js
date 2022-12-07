import userEvent from '@testing-library/user-event';
import React, { useState, useEffect } from 'react';
import '../styles/styles.scss';
import CV_Result from './CV_Result';

const CV_Form = () => {
	const [submit, setSubmit] = useState(false);
	const [user, setUser] = useState({});
	const [obj, setObj] = useState({});
	const [project, setProject] = useState([]);
	const [show, setShow] = useState(false);
  const [fileDataURL, setFileDataURL] = useState(null);
	const imageType = /image\/(png|jpg|jpeg)/i;

	[
		
	]

	const goto = () => {
		setSubmit(true);
    console.log('user',user)
	};

	const handleAdd = () => {
		[...project, obj]
	}

	{console.log('.........', (!!project[0]?.project_title && !!project[0]?.project_description && !!project[0]?.project_technology))}
	return (

		<div className='cv-form'>
			{submit ? (
				<div className='resulted-cv'>
					<div className='profile'>
					<div className='image-wrapper'>
						<div className='image'>
							<img src={`${user?.profileImg}`} alt='test'/>
						</div>
					</div>
						<h1>PROFILE</h1>
						<p>{user.bio}</p>
						<h1>EDUCATION</h1>
						<div>
							<h3 style={{display: 'flex',justifyContent:"space-between", margin:"5px 0"}}>
							<span style={{fontSize:'12px'}}>Degree: {user.recent_degree}</span>
							<span style={{fontSize:'12px'}}>{user.degree_start}-{user.degree_ending}</span>
							</h3>
							<h5>University: {user.university_name}</h5>
						</div>
						<p>{user.education}</p>
						<h1>SOFTWARE SKILLS</h1>
						<p>{user.skills}</p>
						<h1>HOBBIES</h1>
						<p>{user.hobbies}</p>
						<h1>CONTACT</h1>
						<p>{user.contact}</p>
					</div>
					<div className='detail'>
						<h1 className='name'>
							{user.firstname} {user.lastname}
						</h1>
						<p className='designation'>{user.designation}</p>
						<h2>WORK EXPERIENCE</h2>
						<p>{user.experience}</p>
						<div className='projects'>
							<h1>PROJECTS</h1>
							<h3>{project[project.length - 1]?.project_title}</h3>
							<h3>{project[project.length - 1]?.project_description}</h3>
							<h3>{project[project.length - 1]?.project_technology}</h3>
						</div>
					</div>
				</div>
			) : (
				<>
					<div className='field-wrapper'>
						<label>First Name</label>
						<input
							type='text'
							value={user.firstname}
							onChange={(e) => setUser({ ...user, firstname: e.target.value })}
							placeholder='enter your first name'
						/>
					</div>

					<div className='field-wrapper'>
						<label>Last Name</label>
						<input
							type='text'
							value={user.lastname}
							onChange={(e) => setUser({ ...user, lastname: e.target.value })}
							placeholder='enter your last name'
						/>
					</div>

					<div className='field-wrapper'>
						<label>Contact</label>
						<input
							type='number'
							value={user.contact}
							onChange={(e) => setUser({ ...user, contact: e.target.value })}
							placeholder='enter your contact'
						/>
					</div>

					<div className='field-wrapper'>
						<label>Designation</label>
						<input
							type='text'
							value={user.designation}
							onChange={(e) => setUser({ ...user, designation: e.target.value })}
							placeholder='enter your first name'
						/>
					</div>

					<div className='field-wrapper'>
						<label>Bio</label>
						<input
							type='text'
							value={user.bio}
							onChange={(e) => setUser({ ...user, bio: e.target.value })}
							placeholder='enter your designation'
						/>
					</div>

					<div className='field-wrapper-multiple'>
						<label>Education</label>
						<div className='education'>
							<input
								type='text'
								value={user.recent_degree}
								onChange={(e) => setUser({ ...user, recent_degree: e.target.value })}
								placeholder='enter recent degree'
							/>
							<input
								type='text'
								value={user.university_name}
								onChange={(e) => setUser({ ...user, university_name: e.target.value })}
								placeholder='enter university name'
							/>
							<input
							type='number'
							value={user.degree_start}
							onChange={(e) => setUser({ ...user, degree_start: e.target.value })}
							placeholder='starting date'
						/>
						<input
							type='number'
							value={user.degree_ending}
							onChange={(e) => setUser({ ...user, degree_ending: e.target.value })}
							placeholder='ending date'
						/>
						</div>
					</div>
					
					<div className='field-wrapper-multiple'>
						<label>Projects</label>
						<div className='education'>
						
							<input
								type='text'
								onBlur={(e) => setProject([...project, { project_title: e.target.value }])}
								placeholder='enter project title'
							/>
							<input
							type='text'
							value={project[project?.length - 1]?.project_technology}
              onBlur={(e) => {
								project[project.length - 1].project_technology = e.target.value;
							}}
              placeholder='enter technology'
						/>
							<input
								style={{marginRight: "0"}}
								type='text'
								value={project[project?.length - 1]?.project_description}
								onBlur={(e) => {
									project[project.length - 1].project_description = e.target.value;
								}}
								placeholder='enter project description'
							/>
							{
								(
									!!project[0].project_title &&
									!!project[0].project_description &&
									!!project[0].project_technology
								) &&
								(
									<div>
										<a onClick={handleAdd}>Add more</a>
									</div>
								)
							}
						</div>
					</div>
					<div className='field-wrapper'>
						<label>Experience</label>
						<input
							type='text'
							value={user.experience}
							onChange={(e) => setUser({ ...user, experience: e.target.value })}
							placeholder='enter your experience'
						/>
					</div>

					<div className='field-wrapper'>
						<label>Hobbies</label>
						<input
							type='text'
							value={user.hobbies}
							onChange={(e) => setUser({ ...user, hobbies: e.target.value })}
							placeholder='enter your hobbies'
						/>
					</div>

					<div className='field-wrapper'>
						<label>Skills</label>
						<input
							type='text'
							value={user.skills}
							onChange={(e) => setUser({ ...user, skills: e.target.value })}
							placeholder='enter your skills'
						/>
            </div>

					<div className='field-wrapper'>
          <label>Profile Picture</label>
          <input
            type='file'
						accept='.png, .jpg, .jpeg'
						onChange={(e) => setUser({ ...user, profileImg: URL.createObjectURL(e.target.files[0]) })}
            placeholder=''
        />
          </div>

					<button onClick={goto}>Submit</button>
				</>
			)}
		</div>
	);
};

export default CV_Form;
