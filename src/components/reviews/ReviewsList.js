const ReviewsList = ({ reviews }) => {
  return (
    <>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <h3>Author: {review.author}</h3>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ReviewsList;
