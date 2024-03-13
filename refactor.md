### Refactoring Code
## see below for some changes to improve code readability and optimize performance 

# client/src/utils/formatDate.js
//Separate formatDateTime(input) into three different parts for clarity and readability:
//    - function formatTime(date)
//    - function formatDate(date)
//    - export default function formatDateTime(date)
//The method formatDateTime calls formatTime and formatDate

//Combine the conditional statements together using one if followed by else if

//Comment out const timeDifferenceInWeeks = Math.floor(timeDifferenceInDays / 7);
//because it is not needed
<br>
//I chose to separate date and time because based on the principle that components make
//React more flexible and user-friendly, I prefer to view "date" and "time" as two separate 
//components, and the big component "DateTime" uses "date" and "time" as its 
//sub-components. By designing this way, if there is any future update in algorithms or 
//styling, it would be easier to make respective changes instead of mixing everything 
//together. 

//Furthermore, it is always a good practice to combine conditional statements (if 
//applicable with similar conditional cases) because programmers can easily debug which one 
//of the statement has problem. 
//Furthermore, timeDifferenceInWeeks is not declared but not used in the function, so it 
//should be commented out (not deleted in case for future use, but not right now)

## client/src/features/posts/PostExcerpt.jsx
//Change:
//    import { Link, useNavigate } from 'react-router-dom';
To:
    import { useNavigate } from 'react-router-dom';

Change:
    import {
    selectPostById,
    useGetPostQuery,
    useInteractToPostMutation,
    } from './postSlice';
To:
    import {
    selectPostById,
    useGetPostQuery,
    useInteractToPostMutation,
    } from './postSlice';

Delete:
    import { useSelector } from 'react-redux';

Change:
    const createdAt = post.createdAt;
    timeAgo = formatCommentDate(createdAt);
    const likeCounts = post.likes.length;
    commentsCount = post.comments.length;
To:
    const { createdAt, likes, comments} = post;
    timeAgo = formatCommentDate(createdAt);
    const likeCounts = likes.length;
    commentsCount = comments.length;

Declare a local constant:
    const FaStyle = "group-hover:bg-opacity-20 p-3 cursor-pointer rounded-full  group-hover:bg-[#F91880]"
<br>
First of all, I delete certain part of some import statements because some packages are imported yet never used. This cleans up the space and gives better readability. Furthermore, when dealing with components, it is always a good strategies to deconstructure the props for easier reading and less complex code structure. Last but not least, I declare a constant FaStyle to replace the VERY LONG css styling locally, which is "group-hover:bg-opacity-20 p-3 cursor-pointer rounded-full  group-hover:bg-[#F91880]",
and it significantly improves the readability. 

## client/src/features/posts/PostExcerptSkeleton.jsx
Add:
    const smallSkeleton = "w-[50px] h-[10px]"
    const bigSkeleton = "w-[350px] h-[20px]"
    const roundSkeleton = "h-10 w-10 rounded-full"
    const SkeletonContainer = "p-4 flex space-x-2 border-t" 
Modify relevant styling change in the code 
<br> 
I declare some constant local storage to represent different styling for the components. This makes the code easier to test because changing one line essentially applies to all changes to the relevant components. Furthermore, placing the styling at the top part of the code make it easier to notice and read. 


