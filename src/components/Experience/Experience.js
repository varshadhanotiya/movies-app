import { Container } from 'react-bootstrap';
import Particle from '../Particle';

function Experience() {

    const experiences = [
        {
            company: 'A3logics',
            location: 'Jaipur, Rajasthan',
            role: 'Associate Software Engineer',
            duration: 'September 2023 - present',
            responsibilities: [
                'Developed a high-performance cross-platform mobile app from scratch, integrating payment gateway systems and Google Analytics, driving a 40% increase in user engagement.',
                'Configured and managed Apple Push Notifications (APNs) and incorporated in-app purchase functionality for subscriptions, enhancing user interaction and monetization features on iOS devices.',
                'Improved code quality in a React application by resolving bugs in 10 major releases, significantly enhancing application stability and performance across all user interactions.',
                'Collaborated to resolve 20+ critical bugs in a Workiva Design System project, optimizing key features and improving usability and performance across multiple modules.',
                'Developed and integrated encrypted links using Java API for secure email delivery, automating user linkage processes; achieved a 99% success rate in seamless transitions while ensuring data integrity through robust encryption and decryption algorithms.',
                'Designed and optimized REST APIs, enhancing system performance and reducing latency by 25%, ensuring efficient communication between microservices.'
            ],
            skills: 'React.js, Redux, Next.js, TypeScript, React Native, Java, Spring JPA, MySQL, Git',
        },
        {
            company: 'Essentia Softserv LLP',
            location: 'New Delhi, India',
            role: 'Software Developer Intern',
            duration: 'January 2023 - June 2023',
            responsibilities: [
                'Designed and implemented an advanced Invoice Management System featuring automated itemization and branding customization; streamlined workflow efficiency, resulting in a 40% reduction in manual entry errors.',
                'Created an intuitive QR and Barcode Generator, integrating it into invoicing processes to enhance tracking capabilities and enable 40% faster retrieval of invoice data, increasing operational efficiency.',
                'Worked on a responsive and dynamic user interface, ensuring seamless interactions and a high level of usability across devices, resulting in a 30% increase in user satisfaction.',
                'Collaborated with back-end developers to integrate RESTful APIs with the front-end, improving data flow and enhancing user experience.',
                'Implemented efficient state management techniques, optimizing performance and ensuring consistent, scalable state across the application.'
            ],
            skills: 'Java, JavaScript, TypeScript, SQL, HTML, React, Spring Boot, REST API, GitHub, Agile',
        }
    ];

    return (
        <Container fluid className="about-section">
            <Particle />
            <section className="experience-section">
                <h2 className="project-heading">Work <span className="purple">Experience</span></h2>
                <div className="experience-container">
                    <div className="experience-list">
                        {experiences.map((experience, index) => (
                            <div key={index} className="experience-item">
                                <h3>{experience.role} - {experience.company}</h3>
                                <p className="location">{experience.location}</p>
                                <p className="duration">{experience.duration}</p>
                                <ul className="responsibilities-list">
                                    {experience.responsibilities.map((task, index) => (
                                        <li key={index}>{task}</li>
                                    ))}
                                </ul>
                                <p className="skills-used"><strong>Skills used:</strong> {experience.skills}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </Container>
    );
}

export default Experience;
