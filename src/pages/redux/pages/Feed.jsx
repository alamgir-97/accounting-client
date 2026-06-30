import { useForm } from 'react-hook-form';
import PostCard from '../components/PostCard';
import { useGetPostsQuery, useGetPostByIdQuery, useSetPostMutation } from '../redux/features/api/baseApi';
import { data } from './../../../../node_modules/cheerio/lib/esm/api/attributes';

const Feed = () => {
    const {register, handleSubmit} = useForm();

    const {data: posts, isLoading, isError, error} = useGetPostByIdQuery(1);
    const [setPost, {data: postData, isLoading: isPostLoading, isError: isPostError, status}] = useSetPostMutation();
    const onSubmit = (data) => {
        setPost( {
            title: 'mutation title',
            body: data,
            userId: 2
          });
    }
    console.log(postData);
    console.log(status);
    console.log(setPost);
    if (isLoading) return <p>Loading...</p>;
    if (!isLoading && isError) return <p className='bg-red-500'>Something went wrong</p>;
    return (
        <div>
            <h1>Feed Page</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5'>
                    <div className="flex mb-5 gap-3">
                    <input className="w-full rounded-md" id="title" type='text' {...register('title')}/>
                    <button type='submit' className='bg-blue-500 text-white rounded-md px-4 py-2'>Post</button>
                </div>
            </form>
            
            <div>
                {/* {isLoading && <p>Loading...</p>} */}
                {isError && <p>Error: {error.message}</p>}
      
                {/* {posts?.map((post) => (
                    <PostCard key={post.id} post={post[1]}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </PostCard>
                ))} */}
                
                    <PostCard key={posts.id} post={posts}>
                        <h2>{posts.title}</h2>
                        <p>{posts.body}</p>
                    </PostCard>
               
            </div>
        </div>
    );
};

export default Feed;