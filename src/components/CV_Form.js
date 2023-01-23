import userEvent from '@testing-library/user-event';
import React, { useState, useEffect } from 'react';
import '../styles/styles.scss';
import CV_Result from './CV_Result';

const CV_Form = () => {
	const [submit, setSubmit] = useState(false);
	const [user, setUser] = useState({});
	const [project, setProject] = useState([
		{
			project_title: '',
			project_technology: '',
			project_description: '',
		},
	]);
	const [experience, setExprience] = useState([{ company_name: '', job_title: '', job_description: '' }]);
	const [show, setShow] = useState(false);
	const [fileDataURL, setFileDataURL] = useState(null);
	const imageType = /image\/(png|jpg|jpeg)/i;

	const add_project = (e) => {
		e.preventDefault();
		setProject([
			...project,
			{
				project_title: '',
				project_technology: '',
				project_description: '',
			},
		]);
	};
	const add_experience = (e) => {
		e.preventDefault();
		setExprience(...experience, {
			company_name: '',
			job_title: '',
			job_description: '',
		});
	};
	const goto = () => {
		setSubmit(true);
		console.log('user', user);
		console.log('exp', experience);
	};

	return (
		<div className='cv-form'>
			{submit ? (
				<div className='resulted-cv'>
					<div className='profile'>
						<div className='image-wrapper'>
							<div className='image'>
								<img src={`${user?.profileImg}`} alt='test' />
							</div>
						</div>
						<h1>PROFILE</h1>
						<p>{user.bio}</p>
						<h1>EDUCATION</h1>
						<div>
							<h3 style={{ display: 'flex', justifyContent: 'space-between', margin: '5px 0' }}>
								<span style={{ fontSize: '12px' }}>{user.recent_degree}</span>
							</h3>
							<h3 style={{ fontSize: '12px' }}>
								{user.degree_start}-{user.degree_ending}
							</h3>
							<h5>{user.university_name}</h5>
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
						{experience?.map((exp, i) => (
							<>
								<h3>{exp.company_name}</h3>
								<h2>{exp.job_title}</h2>
								<p>{exp.job_description}</p>
							</>
						))}
						<p className='experience'>{user.experience}</p>
						<div className='projects'>
							<h1>PROJECTS</h1>
							{project?.map((prj) => (
								<>
									<h3>{prj.project_title}</h3>
									<h3>{prj.project_description}</h3>
									<h3>{prj.project_technology}</h3>
								</>
							))}
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
						{project.map(() => (
							<div className='education'>
								<input
									type='text'
									onChange={(e) => (project[project.length - 1].project_title = e.target.value)}
									placeholder='enter project title'
								/>
								<input
									type='text'
									onChange={(e) => {
										project[project.length - 1].project_technology = e.target.value;
									}}
									placeholder='enter technology'
								/>
								<input
									style={{ marginRight: '0' }}
									type='text'
									onChange={(e) => {
										project[project.length - 1].project_description = e.target.value;
									}}
									placeholder='enter project description'
								/>
							</div>
						))}
						{project[project.length - 1]?.project_description && (
							<div>
								<a onClick={(e) => add_project(e)}>Add more</a>
							</div>
						)}
					</div>
					<div className='field-wrapper-multiple'>
						<label>Experience</label>
						<div className='education'>
							<input
								type='text'
								placeholder='company name'
								onChange={(e) => (experience[experience.length - 1].company_name = e.target.value)}
							/>
							<input
								type='text'
								placeholder='job title'
								onChange={(e) => (experience[experience.length - 1].job_title = e.target.value)}
							/>
							<input
								type='text'
								style={{ marginRight: 0 }}
								placeholder='job description'
								onChange={(e) => (experience[experience.length - 1].job_description = e.target.value)}
							/>
						</div>
						{experience[experience.length - 1].job_description && (
							<div>
								<a onClick={(e) => add_experience(e)}>Add more</a>
							</div>
						)}
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
