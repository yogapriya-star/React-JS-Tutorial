import {useState, useEffect} from "react";

const UserGenerator = () => {
    const [userData, setUserData] = useState(null);
    const [runEffect, setRunEffect] = useState(false);
    const fetchUserData = async () => {
        try {
            const response = await fetch("https://randomuser.me/api");
            const data = await response.json();
            console.log("data.results[0]",data.results[0])
            setUserData(data.results[0]);
        } catch (error) {
            console.log("Error fetching data:", error);
        }
    };
    useEffect(() => {
        fetchUserData();
    }, [runEffect]);

    const newUser = () => {
        setRunEffect(!runEffect);
    }
    return <div>
        <h1>User Generator</h1>
        {userData ? (
            <div>
                <img src={userData.picture.large} alt='User' />
                <h2>{`${userData.name.first} ${userData.name.last}`}</h2>
                <p>Email: {userData.email}</p>
                <p>
                    Location:{" "}
                    {`${userData.location.city} ${userData.location.country}`}
                </p>
                <button onClick={newUser}>Generate New User</button>
            </div>
        ) : (
            <p>Loading...</p>
        )}
    </div>
};

export default UserGenerator;