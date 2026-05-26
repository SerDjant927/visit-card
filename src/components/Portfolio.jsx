import "./Portfolio.scss";

const Portfolio = () => {
    const projects = [
        { name: "E-Commerce Website", image: "/path-to-project1.jpg" },
        { name: "Dashboard Application", image: "/path-to-project2.jpg" },
        { name: "Landing Page Design", image: "/path-to-project3.jpg" },
    ];

    return (
        <section className="portfolio">
            <h2>Portfolio</h2>
            <p>Some of my recent projects</p>
            <div className="portfolio-grid">
                {projects.map((project, index) => (
                    <div key={index} className="portfolio-item">
                        <img src={project.image} alt={project.name} />
                        <p>{project.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;
