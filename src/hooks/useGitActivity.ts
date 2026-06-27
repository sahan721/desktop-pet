import { useEffect, useState } from "react";
import { getCommitCount } from "../services/GitService";

export const useGitActivity = () => {
  const [commitCount, setCommitCount] = useState(0);

  useEffect(() => {
    const fetchCommits = async () => {
      const count = await getCommitCount();
      setCommitCount(count);
    };

    fetchCommits();

    const interval = setInterval(fetchCommits, 10000);

    return () => clearInterval(interval);
  }, []);

  return commitCount;
};