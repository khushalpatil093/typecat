import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TableUserData from "../Component/TableUserData";
import Graph from "../Component/Graph";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from "../firebaseConfig";
import UserInfo from "../Component/UserInfo";


const UserPage = () => {
    
    const [data, setData] = useState([]);

    const [graphData, setGraphData] = useState([]);
    const [dataLoading, setDataLoading] = useState(true);
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();

    const fetchUserData = () => {
        const resultsRef = db.collection('Results');
        const {uid} = auth.currentUser;
        let tempData = [];
        let tempGraphData = [];
        resultsRef.where('userId', '==', uid).orderBy('timeStamp', 'desc').get().then((snapshot) => {
            snapshot.docs.forEach((doc) => {
                tempData.push({...doc.data()});
                tempGraphData.push([doc.data().timeStamp.toDate().toLocaleString().split(',')[0], doc.data().wpm]);
            })
            setData(tempData);
            setGraphData(tempGraphData.reverse());
            setDataLoading(false);
        })
    }

    useEffect(() => {
        if(!loading){
            fetchUserData();
        }
        if(!loading && !user){
            navigate('/');
        }
    }, [loading, navigate, user])

    if(loading || dataLoading){
        return <div className="center-of-screen">
                    <CircularProgress size={300} />
                </div>
    }

    return (
        <div className="canvas">
            <UserInfo totalTestsTaken={data.length} />
            <div className="graph-user-page">
                <Graph graphData={graphData} />
            </div>
            
            <TableUserData data={data} />
        </div>
    )
}

export default UserPage;