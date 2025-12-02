import { useEffect, useState } from 'react';
import { API_LOG_KEY, MAX_API_LOG_COUNT } from '../api.config.js';

function pushLog(log) {
  try {
    const currLog = localStorage.getItem(API_LOG_KEY);
    const arr = currLog ? JSON.parse(currLog) : [];
    arr.push(log);
    if (arr.length > MAX_API_LOG_COUNT)
      arr.splice(0, arr.length - MAX_API_LOG_COUNT);
    localStorage.setItem(API_LOG_KEY, JSON.stringify(arr));
  } catch (e) {
    console.warn('pushLog: could not write API log', {
      key: API_LOG_KEY,
      log,
      error: e,
    });
  }
}

export function useFetch(fetcherCb, fetchErr) {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const doFetch = async () => {
      const timestamp = new Date().toISOString();

      try {
        const { data, status, url, requestBody = null } = await fetcherCb();
        pushLog({ timestamp, url, requestBody, status, errorMessage: null });
        setItems(data);
      } catch (err) {
        setError(fetchErr);
        pushLog({
          timestamp,
          url: err.url,
          requestBody: err.requestBody || null,
          status: err.status,
          errorMessage: err.message,
        });
      }
    };

    doFetch();
  }, [fetcherCb, fetchErr]);

  return [items, error];
}
