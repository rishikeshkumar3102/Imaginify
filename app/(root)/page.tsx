import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Home = () => {
  return (
    <div>
      <SignedIn>{/* <UserButton /> */}</SignedIn>
      <SignedOut>
        {/* <p>Please sign in to access user features.</p> */}
      </SignedOut>
    </div>
  );
};

export default Home;
