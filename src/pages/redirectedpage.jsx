import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function RedirectPage() {
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://blinkapi.vercel.app/c=${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          window.location.href = data.url;
        } else {
          console.error('Invalid short URL');
        }
      })
      .catch((err) => console.error('Error fetching URL:', err));
  }, [id]);

  return (
    <div className="loader-container2">
      <div className="loader2"></div>
    </div>
  );
}
