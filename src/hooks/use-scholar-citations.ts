import { useEffect, useState } from 'react';
import { profile } from '@/data/profile';

interface ScholarCitationData {
  message?: string;
  updated?: string | null;
}

function isValidCitation(value: string | undefined): value is string {
  return Boolean(value && value.trim() && value.trim() !== '--');
}

export function useScholarCitations() {
  const [citations, setCitations] = useState(profile.citations);
  const [updatedAt, setUpdatedAt] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    fetch(`${import.meta.env.BASE_URL}gs_data_shieldsio.json`, { cache: 'no-store' })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to load citation data: ${response.status}`);
        }
        return response.json() as Promise<ScholarCitationData>;
      })
      .then((data) => {
        if (!isMounted) return;

        if (isValidCitation(data.message)) {
          setCitations(data.message.trim());
        }

        if (data.updated) {
          setUpdatedAt(data.updated);
        }
      })
      .catch(() => {
        // Keep the static fallback when Google Scholar data is unavailable.
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return { citations, updatedAt };
}
