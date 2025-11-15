export const AboutData = ({ data }) => {
  const {image, heading, paragraph} = data;

  return (
      <li className='inner-core-values'>
        <div>
          <div className="integrity">
            <div className="integrity-img">
              <img src={image} alt={heading} />
            </div>
            <div class="integrity-content">
              <h1>{heading}</h1>
              <p>{paragraph}</p>
            </div>
          </div>
        </div>
      </li>
  );
};
