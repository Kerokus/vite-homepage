import "../styles/Card.css";

export default function Card({ image, title, description, url }) {
  const combinedImage = `/images/${image}`;

  return (
    <a href={url} className="card" target="_blank" rel="noopener noreferrer">
      <img src={combinedImage} alt={title} className="card-image" />
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </a>
  );
}
