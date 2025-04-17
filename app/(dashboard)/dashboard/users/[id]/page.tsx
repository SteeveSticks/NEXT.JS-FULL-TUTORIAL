const page = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  return <h1>User Profile Page: {id}</h1>;
};

export default page;
