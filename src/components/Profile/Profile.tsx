import MyPosts from "./MyPosts/MyPosts";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props: any) => {
  if (!props.profile) {
    return <div> NO PROFILE </div>
  }

  return (
    <div>
      <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}  />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
