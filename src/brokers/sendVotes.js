const sendVotes = async (votes) => {
    console.log('sending votes');
    console.log(votes);
    const body = new URLSearchParams(votes);
    try {
        console.log(votes);
        const response = await fetch("https://4f6aem2us2.execute-api.us-east-1.amazonaws.com/Prod/addVote", {
            method: 'POST',
            body: body,
            redirect: 'follow'
        })
        if (!response.ok) {
            throw new Error('Network response was not OK');
        }
        return 'Sucess';
    }
    catch(e) {
        console.log(e);
        return 'error'
    }
}

export default sendVotes;