import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { FaRegComment, FaRegHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const PostExcerptSkeleton = () => {
  const smallSkeleton = "w-[50px] h-[10px]"
  const bigSkeleton = "w-[350px] h-[20px]"
  const roundSkeleton = "h-10 w-10 rounded-full"
  const SkeletonContainer = "p-4 flex space-x-2 border-t" 
  return (
    <div>
      <div className={SkeletonContainer}>
        <div>
          <Skeleton className={roundSkeleton} />
        </div>
        <div className="space-y-1">
          <div className="flex items-center">
            <Skeleton className={bigSkeleton} />
          </div>
          <Skeleton className="w-[350px] h-[80px]" />
          <div className="flex space-x-2">
            <Skeleton className={smallSkeleton} />
            <Skeleton className={smallSkeleton} />
          </div>
        </div>
      </div>

      <div className={SkeletonContainer}>
        <div>
          <Skeleton className={roundSkeleton} />
        </div>
        <div className="space-y-1">
          <div className="flex items-center">
            <Skeleton className={bigSkeleton} />
          </div>
          <Skeleton className="w-[350px] h-[50px]" />
          <div className="flex space-x-2">
            <Skeleton className={smallSkeleton} />
            <Skeleton className={smallSkeleton} />
          </div>
        </div>
      </div>

      <div className={SkeletonContainer}>
        <div>
          <Skeleton className={roundSkeleton} />
        </div>
        <div className="space-y-1">
          <div className="flex items-center">
            <Skeleton className={bigSkeleton} />
          </div>
          <Skeleton className="w-[350px] h-[30px]" />
          <div className="flex space-x-2">
            <Skeleton className={smallSkeleton} />
            <Skeleton className={smallSkeleton} />
          </div>
        </div>
      </div>

      <div className={SkeletonContainer}>
        <div>
          <Skeleton className={roundSkeleton} />
        </div>
        <div className="space-y-1">
          <div className="flex items-center">
            <Skeleton className={bigSkeleton} />
          </div>
          <Skeleton className="w-[350px] h-[150px]" />
          <div className="flex space-x-2">
            <Skeleton className={smallSkeleton} />
            <Skeleton className={smallSkeleton} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostExcerptSkeleton;
