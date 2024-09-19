async function getUser(id) {
    let data = await fetch(`http://localhost:3000/api/users/${id}`)
    data = await data.json();
    return data.result[0];
}
export default async function Page({params}){
    // console.log(params.userId)
    let user = await getUser(params.userId)
    console.log("===>",user);
    if (user=="N") {
        return (
            <div>
                <h1>User not found</h1>
            </div>
        );
    }
    return(
        <div>
            <h1>User Details</h1>
            <h4>Name: {user.name}</h4>
            <h4>Age: {user.age}</h4>
            <h4>Email: {user.email}</h4>
            <h4>Id: {user.id}</h4>
        </div>
    )
}