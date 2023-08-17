import { useEffect, useState } from 'react';

const useSubreddits = () =>{
const [subReddits, setSubReddits] = useState([]);

useEffect(()=>{
    fetchSubreddits();

  }, []);

  const fetchSubreddits = async () =>{
    try{
      const response = await fetch('https://www.reddit.com/subreddits.json');
      const data = await response.json();
      const subredditList = data.data.children.map(child => ({
        displayName: child.data.display_name,
        title: child.data.title,
        url:child.data.url

      }))
      setSubReddits(subredditList);
    } catch(error){
      console.log("Error fetching subreddits", error);
    }
  }
  return subReddits;
}
export default useSubreddits;