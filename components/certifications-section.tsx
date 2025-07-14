"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Link as LinkIcon } from "lucide-react";

const certifications = [
	{
		title: 'Agile Project Management',
		issuer: 'HP LIFE',
		date: 'May 2025',
		credentialUrl: 'https://www.credly.com/badges/9ffadec9-1a5d-43d7-9a82-3288e7a5f51e',
		logoUrl: '/assets/images/hplife.jpg',
		logoAlt: 'HP LIFE logo',
	},
	{
		title: 'Effective Presentations',
		issuer: 'HP LIFE',
		date: 'Mar 2025',
		credentialUrl: 'https://www.credly.com/badges/f4703a3f-33c1-4607-954a-eec9f976f65b',
		skills: ['Presentation Skills'],
		logoUrl: '/assets/images/hplife.jpg',
		logoAlt: 'HP LIFE logo',
	},
	{
		title: 'Success Mindset',
		issuer: 'HP LIFE',
		date: 'Mar 2025',
		credentialUrl: 'https://www.credly.com/badges/0c4620bf-13ed-44be-99ba-21fccf3e00f5',
		skills: ['Goal Seek', 'Growth Strategies', 'Growth mindset', 'Self discipline', 'Business Habits'],
		logoUrl: '/assets/images/hplife.jpg',
		logoAlt: 'HP LIFE logo',
	},
	{
		title: 'Flutter Qwik Start',
		issuer: 'Google',
		date: 'Jul 2024',
		credentialUrl: 'https://www.cloudskillsboost.google/public_profiles/a9539f4e-272e-44d5-9275-5c6a5360c492/badges/3363385',
		logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg',
		logoAlt: 'Google logo',
	},
	{
		title: 'Working with Onscreen Data in a Flutter Application',
		issuer: 'Google',
		date: 'Jun 2024',
		credentialUrl: 'https://www.cloudskillsboost.google/public_profiles/a9539f4e-272e-44d5-9275-5c6a5360c492/badges/3363186',
		logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg',
		logoAlt: 'Google logo',
	},
	{
		title: 'Ethics, Technology and Engineering',
		issuer: 'Eindhoven University of Technology',
		date: 'Apr 2024',
		credentialUrl: 'https://www.coursera.org/account/accomplishments/certificate/B4YJ4JYYTLUA',
		logoUrl: '/assets/images/coursera.jpg',
		logoAlt: 'Coursera logo',
	},
	{
		title: 'Build a Two Screen Flutter Application',
		issuer: 'Coursera',
		date: 'Mar 2024',
		skills: ['Dart', 'Flutter'],
		credentialUrl: 'https://www.coursera.org/account/accomplishments/certificate/5WED7ACB8JJN',
		logoUrl: '/assets/images/coursera.jpg',
		logoAlt: 'Coursera logo',
	},
	{
		title: 'Getting started with Flutter Development',
		issuer: 'Coursera',
		date: 'Feb 2024',
		skills: ['Dart', 'Flutter'],
		credentialUrl: 'https://www.coursera.org/account/accomplishments/certificate/D4JYHGTBN8H9',
		logoUrl: '/assets/images/coursera.jpg',
		logoAlt: 'Coursera logo',
	},
	{
		title: 'Material Components for Flutter Basics',
		issuer: 'Google',
		date: 'Feb 2024',
		skills: ['Dart'],
		credentialUrl: 'https://www.cloudskillsboost.google/public_profiles/a9539f4e-272e-44d5-9275-5c6a5360c492/badges/2342930',
		logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg',
		logoAlt: 'Google logo',
	},
	{
		title: 'Create an Android App with Kotlin',
		issuer: 'Coursera',
		date: 'May 2023',
		credentialUrl: 'https://www.coursera.org/account/accomplishments/certificate/RFUQTXD2M6V5',
		logoUrl: '/assets/images/coursera.jpg',
		logoAlt: 'Coursera logo',
	},
	{
		title: 'The Blockchain System',
		issuer: 'Coursera',
		date: 'May 2023',
		credentialUrl: 'https://www.coursera.org/account/accomplishments/certificate/86HZPE4EVUVA',
		logoUrl: '/assets/images/coursera.jpg',
		logoAlt: 'Coursera logo',
	},
];

export function CertificationsSection() {
	return (
		<motion.section
			id="certifications"
			className="py-20 bg-background/50"
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.8 }}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
						Licenses & Certifications
					</h2>
					<p className="text-lg text-primary max-w-3xl mx-auto">
						My commitment to continuous learning and professional development.
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{certifications.map((cert, index) => (
						<motion.div
							key={index}
							className="bg-card rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 flex flex-col group hover:scale-105 hover:shadow-xl hover:shadow-purple-500/30 hover:bg-gradient-to-br from-purple-500 to-indigo-600"
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
						>
							<div className="p-6 flex flex-col flex-grow">
								<div className="flex items-start gap-4 mb-4">
									<Image src={cert.logoUrl} alt={cert.logoAlt} width={40} height={40} className="rounded-full object-contain p-1 bg-background group-hover:bg-white/20 transition-colors duration-300" />
									<div>
										<h3 className="text-xl font-bold text-card-foreground group-hover:text-white transition-colors duration-300">{cert.title}</h3>
										<p className="text-md text-muted-foreground group-hover:text-indigo-200 transition-colors duration-300">{cert.issuer}</p>
									</div>
								</div>
								<p className="text-sm text-muted-foreground group-hover:text-indigo-200 transition-colors duration-300 mb-4">Issued {cert.date}</p>
								{cert.skills && (
									<div className="mb-4">
										<div className="flex flex-wrap gap-2">
											{cert.skills.map(skill => (
												<span key={skill} className="bg-primary/10 text-primary group-hover:bg-white/20 group-hover:text-white transition-colors duration-300 text-xs font-medium px-2.5 py-0.5 rounded-full">
													{skill}
												</span>
											))}
										</div>
									</div>
								)}
								<div className="mt-auto">
									<a
										href={cert.credentialUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center gap-2 text-primary group-hover:text-white group-hover:underline transition-colors duration-300 font-semibold"
									>
										Show Credential <LinkIcon className="w-4 h-4" />
									</a>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</motion.section>
	);
}