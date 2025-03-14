// filepath: c:\Users\adams\vtt-project\vtt-frontend\src\pages\Open5eClassesPage.tsx
import { useState, useEffect } from 'react';
import ky from 'ky';
import { Open5eAPIResponse, ClassData } from '../Components/open5e';

function Open5eClassesPage() {
  const [classes, setClasses] = useState<ClassData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await ky<ClassData[]>('https://api.open5e.com/v1/classes/').json();
        setClasses(response);
        setLoading(false);
      } catch (e: any) {
        setError(e.message);
        setLoading(false);
      }
    };

    fetchClasses();
  }, []);

  if (loading) {
    return <div>Loading classes...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2 className='mt-4'>D&D 5e Classes</h2>
      <ul>
        {classes.map(cls => (
          <li key={cls.slug}>
            {cls.name} <br/> {cls.desc}
            
            </li>
        ))}
      </ul>
    </div>
  );
}

export default Open5eClassesPage;