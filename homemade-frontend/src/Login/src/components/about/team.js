import React from 'react';
import './team.css';

function Team() {
    const teamMembers = [
        {
            name: "Laxmi",
            role: "Project Lead, Web Scraping",
            description: "Led the project planning, coordinated tasks among all members, ensured timely delivery, and handled integration of frontend and backend components. Developed Python scripts to scrape and preprocess data from multiple online sources, ensuring structured and clean datasets for further use."
        },
        {
            name: "Lateef Unisa",
            role: "Frontend Developer",
            description: "Designed and implemented responsive UI using React.js, ensuring an intuitive user experience and seamless navigation across all components."
        },
        {
            name: "Divya",
            role: "Backend Developer (Flask)",
            description: "Built RESTful APIs using Flask, handled server-side logic, and connected the application with database and frontend for dynamic interaction."
        },
        {
            name: "Bhumika",
            role: "Database Designer(SQLite)",
            description: "Designed and managed the SQLite database schema, implemented queries for CRUD operations, and ensured data consistency and reliability."
        },
        {
           name: "Vaishnavi",
            role: "Testing and Documentation",
            description: "Performed testing and documentation of the project, ensuring that the project is working as expected and that the documentation is up to date."
        }
    ];

    return (
        <div className="team-section">
            <h2>Our Team Contribution</h2>
            <div className="team-grid">
                {teamMembers.map((member, index) => (
                    <div key={index} className="team-member">
                        <div className="member-avatar">
                            {member.name.charAt(0)}
                        </div>
                        <h3>{member.name}</h3>
                        <h4>{member.role}</h4>
                        <p>{member.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Team; 
